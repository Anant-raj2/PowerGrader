import { ButtonTextButton } from "../../ButtonTextButton";
import { TextfieldLabel } from "../../TextfieldLabel";
import { TextfieldLabelIcon } from "../../TextfieldLabelIcon";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UnauthorizedError } from "../../../errors/https_errors";
import * as UserApi from "../../../networks/api/user_api";
import { useState } from 'react';
import useCountdown from '../../../hooks/useCountDown';
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

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
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
        }else {
            console.error(error);
            alert(error);
        }
    }
}

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
{errorText &&
                    <h1>{errorText}</h1>
                }
    <div className="App  auth-page">
      
    <div className="bg-[#363740] flex flex-row justify-center w-full h-full min-h-screen">
      <div className="bg-sidebar-bg w-[1512px] h-[982px]">
        <div className="relative w-[452px] h-[704px] top-[139px] left-[530px] bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider">
          <div className="absolute w-[216px] h-[20px] top-[643px] left-[118px]">
            <div className="absolute top-0 left-0 font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
              Don’t have an account?
            </div>
            <ButtonTextButton
              btnLabelClassName="!text-mainblue !tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
              className="!absolute !left-[150px] !w-[79px] !top-0"
              text="Sign Up"
              onClick={() => navigate("/")}
            />
          </div>
            <ButtonContained
              btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
              className="!absolute !left-[31px] !bg-mainblue !w-[388px] !top-[441px]"
              text="Log In"
              type="submit"
            />
          <TextfieldLabel
            className="!absolute !left-[31px] !w-[388px] !top-[265px]"
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
            className="!absolute !left-[31px] !w-[388px] !top-[353px]"
            iconHideActiveStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[10px] !left-[351px]"
            labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
            overlapGroupClassName="!w-[388px]"
            text="Password"
            text1="PASSWORD"
            type="password"
            register={register("password")}
            error={errors.password}
            textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[328px]"
          />
          <p className="absolute w-[388px] top-[196px] left-[31px] font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] [font-style:var(--regular-14px-font-style)]">
            Enter your Email and password below
          </p>
          <div className="absolute w-[388px] top-[98px] left-[31px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
            Power Grader
          </div>
          <div className="absolute w-[48px] h-[48px] top-[39px] left-[201px] bg-mainblue rounded-[24px] flex items-center justify-center">
            <img
              className="w-[100%] h-[100%]"
              alt="Pg white"
              src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
            />
          </div>
          <p className="absolute w-[388px] top-[154px] left-[31px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
            Log In to Power Grader
          </p>
          <div
            id="loginDiv"
            className="absolute w-[500px] top-[550px] left-[100px]"
          ></div>
        </div>
      </div>
    </div>
    </div>
    </form>

    );
}

// import { ButtonContained } from "../../ButtonContained";
// import { ButtonTextButton } from "../../ButtonTextButton";
// import { TextfieldLabel } from "../../TextfieldLabel";
// import { TextfieldLabelIcon } from "../../TextfieldLabelIcon";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// // import * as UserApi from "../../../networks/user_api";

// import "../../../App.css";
// declare const google: any;

// export const Login = (): JSX.Element => {
//   const navigate = useNavigate();
//   function handleCallbackResponse(response: any) {
//     console.log(response.credential);

//     var userObject = jwtDecode(response.credential) as User;
//     console.log(userObject);
//     // UserApi.loginGoogle(userObject);
//   }

//   interface User {
//     email: string;
//     name: string;
//     // other properties...
//   }

//   useEffect(() => {
//     /* global google */
//     google.accounts.id.initialize({
//       client_id:
//         "360114089145-p3ua4ks0v3stme5npq3c5uq9k1g3gc9k.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });

//     google.accounts.id.renderButton(document.getElementById("loginDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Your login logic here
//   };

//   return (
//     <div className="App  auth-page">
//       {/* <div className="bg-[#363740] flex flex-row justify-center w-full h-full min-h-screen">
//         <div className="bg-sidebar-bg w-[1512px] h-[982px]">
//           <div className="relative w-[452px] h-[704px] top-[139px] left-[530px] bg-grayscale-white rounded-[8px] overflow-hidden border border-solid border-grayscale-divider">
//             <div className="absolute w-[216px] h-[20px] top-[643px] left-[118px]">
//               <div className="absolute top-0 left-0 font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] whitespace-nowrap [font-style:var(--regular-14px-font-style)]">
//                 Don’t have an account?
//               </div>
//               <ButtonTextButton
//                 btnLabelClassName="!text-mainblue !tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[51px]"
//                 className="!absolute !left-[150px] !w-[79px] !top-0"
//                 text="Sign Up"
//                 onClick={() => navigate("/")}
//               />
//             </div>
//             <form onSubmit={handleSubmit}>
//               <ButtonContained
//                 btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
//                 className="!absolute !left-[31px] !bg-mainblue !w-[388px] !top-[441px]"
//                 text="Log In"
//                 type="submit"
//               />
//             </form>
//             <TextfieldLabel
//               className="!absolute !left-[31px] !w-[388px] !top-[265px]"
//               labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
//               overlapGroupClassName="!w-[388px]"
//               text="Email"
//               text1="EMAIL"
//               textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
//             />
//             <TextfieldLabelIcon
//               className="!absolute !left-[31px] !w-[388px] !top-[353px]"
//               iconHideActiveStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[10px] !left-[351px]"
//               labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
//               overlapGroupClassName="!w-[388px]"
//               text="Password"
//               text1="PASSWORD"
//               textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[328px]"
//             />
//             <p className="absolute w-[388px] top-[196px] left-[31px] font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] [font-style:var(--regular-14px-font-style)]">
//               Enter your Email and password below
//             </p>
//             <div className="absolute w-[388px] top-[98px] left-[31px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
//               Power Grader
//             </div>
//             <div className="absolute w-[48px] h-[48px] top-[39px] left-[201px] bg-mainblue rounded-[24px] flex items-center justify-center">
//               <img
//                 className="w-[100%] h-[100%]"
//                 alt="Pg white"
//                 src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
//               />
//             </div>
//             <p className="absolute w-[388px] top-[154px] left-[31px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
//               Log In to Power Grader
//             </p>
//             <div
//               id="loginDiv"
//               className="absolute w-[500px] top-[550px] left-[100px]"
//             ></div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };