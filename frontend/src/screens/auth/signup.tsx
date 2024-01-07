import { ButtonTextButton } from "../../components/index";
import { TextfieldLabel } from "../../components/index";
import { TextfieldLabelIcon } from "../../components/index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ConflictError } from "../../networks/http-errors";
import * as UserApi from "../../networks/api/user_api";
import { useState } from "react";
import useCountdown from "../../hooks/useCountDown";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BadRequestError } from "../../networks/http-errors";
import { ButtonContained } from "../../components/index";
import React from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const validationSchema = yup.object({
  name: yup.string().max(20).required("Required"),
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).max(20).required("Required"),
  verificationCode: yup.string().required("Required"),
});

type SignUpFormData = yup.InferType<typeof validationSchema>;

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const { mutateUser } = useAuthenticatedUser();
  const [verificationCodeRequestPending, setVerificationCodeRequestPending] =
    useState(false);
  const [showVerificationCodeSentText, setShowVerificationCodeSentText] =
    useState(false);
  const {
    secondsLeft: verificationCodeCooldownSecondsLeft,
    start: startVerificationCodeCooldown,
  } = useCountdown();
  const [errorText, setErrorText] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(credentials: SignUpFormData) {
    try {
      console.log(credentials);
      setErrorText(null);
      setShowVerificationCodeSentText(false);
      const newUser = await UserApi.signUp(credentials);
      mutateUser(newUser);
      navigate("/onboard");
    } catch (error) {
      if (error instanceof ConflictError || error instanceof BadRequestError) {
        setErrorText(error.message);
      } else {
        console.error(error);
        alert(error);
      }
    }
  }

  async function requestVerificationCode() {
    const validEmailInput = await trigger("email");
    if (!validEmailInput) return;
    const emailInput = getValues("email");
    setErrorText(null);
    setShowVerificationCodeSentText(false);
    setVerificationCodeRequestPending(true);

    try {
      await UserApi.getVerificationCode(emailInput);
      setShowVerificationCodeSentText(true);
      startVerificationCodeCooldown(60);
    } catch (error) {
      if (error instanceof ConflictError) {
        setErrorText(error.message);
      } else {
        console.error(error);
        alert(error);
      }
    } finally {
      setVerificationCodeRequestPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorText && <h1>{errorText}</h1>}
      {showVerificationCodeSentText && <h1>Verification code sent!</h1>}
      <div className="App auth-page">
        <div className="bg-[#363740] flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen">
          <div className="bg-sidebar-bg w-full sm:w-[1512px] flex justify-center items-center">
            <div className="w-full sm:w-[452px] h-auto sm:h-[750px] bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider flex flex-col items-center justify-center space-y-7">
              <div className="relative mt-[-30px] sm:mt-[-20px] flex flex-col items-center">
                <div className="absolute top-[-60px] sm:top-[-60px] w-[48px] h-[48px] bg-mainblue rounded-[24px] flex items-center justify-center">
                  <img
                    className="w-full h-full"
                    alt="Pg white"
                    src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
                  />
                </div>
                <div className="w-[388px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
                  Power Grader
                </div>
              </div>

              <div className="w-[388px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
                Create Account
              </div>

              <TextfieldLabel
                className="!w-[388px]"
                labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                overlapGroupClassName="!w-[388px]"
                text="Name"
                text1="NAME"
                type="text"
                register={register("name")}
                error={errors.name}
                textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
              />
              <TextfieldLabel
                className="!w-[388px]"
                labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                overlapGroupClassName="!w-[388px]"
                text="Email"
                text1="EMAIL"
                type="email"
                register={register("email")}
                error={errors.email}
                textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
              />

              <TextfieldLabelIcon
                className="!w-[388px]"
                iconHideActiveStyleOverrideClassName="absolute top-[5px] sm:top-[10px] right-[10px] sm:right-[15px] !w-[20px] !h-[20px]"
                labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                overlapGroupClassName="!w-[388px]"
                text="Password"
                text1="PASSWORD"
                type="password"
                register={register("password")}
                error={errors.password}
                textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[328px]"
              />
              <div className="flex items-center justify-start w-full sm:w-[388px] my-2">
                <TextfieldLabel
                  className="flex-grow"
                  labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                  overlapGroupClassName="!w-[250px]"
                  text="Verification Code"
                  text1="VERIFICATION CODE"
                  type="number"
                  register={register("verificationCode")}
                  error={errors.verificationCode}
                  textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
                />

                <button className=" mr-[30px] mb-[-20px] cursor-pointer w-[80px] h-[48px] all-[unset] box-border">
                  <div className="relative h-[48px] rounded-[15px] bg-[#3751ff] shadow-button-accent-default">
                    <button
                      onClick={requestVerificationCode}
                      className="ml-10.5 w-[80px] h-[48px] font-semibold-14px font-[number:var(--semibold-14px-font-weight)] text-grayscale-white text-[length:var(--semibold-14px-font-size)] text-center tracking-[var(--semibold-14px-letter-spacing)] leading-[var(--semibold-14px-line-height)] [font-style:var(--semibold-14px-font-style)] all-[unset] box-border"
                    >
                      Send{" "}
                      {verificationCodeCooldownSecondsLeft > 0 &&
                        ` (${verificationCodeCooldownSecondsLeft})`}
                    </button>
                  </div>
                </button>
              </div>

              <ButtonContained
                btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
                className="!bg-mainblue !w-[388px]"
                text="Sign up"
                type="submit"
              />

              <div className="w-full sm:w-[216px] h-[20px] flex justify-center items-center">
                <div className="font-regular-14px mt-[50px] sm:mt-[100px] font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
                  Already have an account?
                </div>
                <ButtonTextButton
                  btnLabelClassName="!text-mainblue mt-[50px] sm:mt-[100px] !tracking-[var(--semibold-14px-letter-spacing)] cursor-pointer !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
                  className="!w-[79px]"
                  text="Log in"
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
