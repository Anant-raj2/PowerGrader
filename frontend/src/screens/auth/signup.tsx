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
      navigate("/dashboard");
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
        <div className="bg-[#363740] flex flex-row justify-center w-full">
          <div className="bg-sidebar-bg w-[1512px] h-[945px]">
            <div className="relative w-[452px] h-[704px] top-[139px] left-[530px] bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider">
              <p className="absolute w-[388px] top-[196px] left-[31px] font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] [font-style:var(--regular-14px-font-style)]">
                Enter your email and password below
              </p>
              <div className="absolute w-[388px] top-[98px] left-[31px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
                Power Grader
              </div>
              <div className="absolute w-[48px] h-[48px] top-[39px] left-[201px] bg-mainblue rounded-[24px] flex items-center justify-center">
                <img
                  className="w-full h-full"
                  alt="Pg white"
                  src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
                />
              </div>
              <div className="absolute w-[388px] top-[154px] left-[31px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
                  Create Account
              </div>
              <TextfieldLabel
                  className="!absolute !left-[35px] !w-[388px] !top-[261px]"
                  labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                  overlapGroupClassName="!w-[388px]"
                  text="Name"
                  text1="NAME"
                  type="text"
                  name = "name"
                  register={register("name")}
                  error={errors.name}
                  textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
              />
              <TextfieldLabel
                  className="!absolute !left-[35px] !w-[388px] !top-[342px]"
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
                  className="!absolute !left-[35px] !w-[388px] !top-[423px]"
                  iconHideActiveStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[10px] !left-[351px]"
                  labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                  overlapGroupClassName="!w-[388px]"
                  text="Password"
                  text1="PASSWORD"
                  type="password"
                  register={register("password")}
                  error={errors.password}
                  textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
              />
              <TextfieldLabel
                  className="!absolute !left-[35px] !w-[388px] !top-[500px]"
                  labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                  overlapGroupClassName="!w-[250px]"
                  text="Verification Code"
                  text1="VERIFICATION CODE"
                  type="number"
                  register={register("verificationCode")}
                  error={errors.verificationCode}
                  textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
              />
              <button className="absolute cursor-pointer w-[48px] h-[48px] top-[518px] left-[300px] all-[unset] box-border">
                  <div className="relative h-[48px] rounded-[15px]">
                    <div className="w-[100px] h-[48px] top-0 bg-[#3751ff] rounded-[15px] shadow-button-accent-default absolute left-0" />
                      <button onClick = {requestVerificationCode} className="absolute w-[55px] top-[14px] left-[24px] font-semibold-14px font-[number:var(--semibold-14px-font-weight)] text-grayscale-white text-[length:var(--semibold-14px-font-size)] text-center tracking-[var(--semibold-14px-letter-spacing)] leading-[var(--semibold-14px-line-height)] [font-style:var(--semibold-14px-font-style)] all-[unset] box-border">
                        Send {verificationCodeCooldownSecondsLeft > 0 && ` (${verificationCodeCooldownSecondsLeft})`}
                      </button>
                  </div>
                </button>
                <div className="absolute w-[224px] h-[20px] top-[660px] left-[104px]">
                  <div className="relative w-[222px] h-[20px]">
                    <div className="absolute top-0 left-0 font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
                      Already have an account?
                    </div>
                    <ButtonTextButton
                      btnLabelClassName="!text-mainblue !tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
                      className="!absolute cursor-pointer !left-[171px] !w-[51px] !top-0"
                      onClick={() => navigate("/login")}
                      text="Log in"
                    />
                  </div>
                </div>

              <button className="absolute w-[388px] h-[48px] top-[595px] cursor-pointer left-[31px] all-[unset] box-border">
                <div className="relative h-[48px] rounded-[8px]">
                  <div className="w-[388px] h-[48px] top-0 bg-[#3751ff] rounded-[8px] shadow-button-accent-default absolute left-0" />
                  <button
                    type="submit"
                    className="absolute w-[340px] top-[14px] left-[24px] cursor-pointer font-semibold-14px font-[number:var(--semibold-14px-font-weight)] text-grayscale-white text-[length:var(--semibold-14px-font-size)] text-center tracking-[var(--semibold-14px-letter-spacing)] leading-[var(--semibold-14px-line-height)] [font-style:var(--semibold-14px-font-style)] all-[unset] box-border"
                  >
                    Sign up
                  </button>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};