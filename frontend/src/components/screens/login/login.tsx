import { ButtonTextButton } from "../../ButtonTextButton";
import { TextfieldLabel } from "../../TextfieldLabel";
import { TextfieldLabelIcon } from "../../TextfieldLabelIcon";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UnauthorizedError } from "../../../errors/https_errors";
import * as UserApi from "../../../networks/api/user_api";
import { useState } from "react";
import useCountdown from "../../../hooks/useCountDown";
import useAuthenticatedUser from "../../../hooks/useAuthenticatedUser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonContained } from "../../ButtonContained/ButtonContained";

const validationSchema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).max(20).required("Required"),
});

type LoginFormData = yup.InferType<typeof validationSchema>;

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const { mutateUser } = useAuthenticatedUser();

  const [errorText, setErrorText] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(credentials: LoginFormData) {
    try {
      setErrorText(null);
      const user = await UserApi.login(credentials);
      console.log(user.name);
      mutateUser(user);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        setErrorText("Invalid credentials");
      } else {
        console.error(error);
        alert(error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorText && <h1>{errorText}</h1>}
      <div className="App auth-page">
        <div className="bg-[#363740] flex flex-col sm:flex-row justify-center items-center w-full h-full min-h-screen">
          <div className="bg-sidebar-bg w-full sm:w-[1512px] flex justify-center items-center">
            <div className="w-full sm:w-[452px] h-[643px]  bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider flex flex-col items-center justify-center space-y-7">
              <div className=" relative mt-[-30px] sm:mt-[-20px] flex flex-col items-center">
                <div className=" absolute top-[-60px] sm:top-[-60px] w-[48px] h-[48px] bg-mainblue rounded-[24px] flex items-start justify-center">
                  <img
                    className="w-[100%] h-[100%]"
                    alt="Pg white"
                    src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
                  />
                </div>
                <div className="w-[388px]  opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
                  Power Grader
                </div>
              </div>

              <p className="w-[388px] mb-[30px] sm:mb-[80px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
                Log In to Power Grader
              </p>

              <p className="w-[388px] mb-[40px]  font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] [font-style:var(--regular-14px-font-style)]">
                Enter your Email and password below
              </p>
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
                className=" !w-[388px]"
                iconHideActiveStyleOverrideClassName="absolute top-[5px] sm:top-[10px] right-[10px] sm:right-[15px] !w-[20px] !h-[20px] "
                labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
                overlapGroupClassName="!w-[388px]"
                text="Password"
                text1="PASSWORD"
                type="password"
                register={register("password")}
                error={errors.password}
                textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[328px]"
              />

              <ButtonContained
                btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
                className="!bg-mainblue !w-[388px]"
                text="Log In"
                type="submit"
              />
              <div className=" w-full sm:w-[216px] h-[20px]  flex justify-center items-center">
                <div className="font-regular-14px mt-[50px] sm:mt-[100px] font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
                  Don’t have an account?
                </div>
                <ButtonTextButton
                  btnLabelClassName="!text-mainblue mt-[50px] sm:mt-[100px]  !tracking-[var(--semibold-14px-letter-spacing)] cursor-pointer !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
                  className="!w-[79px]"
                  text="Sign Up"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
