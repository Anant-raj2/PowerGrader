import { ButtonContained } from "../src/components/ButtonContained/";
import { ButtonTextButton } from "../src/components/ButtonTextButton/";
import { TextfieldLabel } from "../src/components/TextfieldLabel/";
import { TextfieldLabelIcon } from "../src/components/TextfieldLabelIcon";

import "./App.css";

export const App = (): JSX.Element => {
  return (
    <div className="App overflow-hidden">
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
              />
            </div>
            <ButtonContained
              btnLabelClassName="!tracking-[var(--semibold-14px-letter-spacing)] !text-[length:var(--semibold-14px-font-size)] ![font-style:var(--semibold-14px-font-style)] !font-[number:var(--semibold-14px-font-weight)] !font-semibold-14px !leading-[var(--semibold-14px-line-height)] !w-[340px]"
              className="!absolute !left-[31px] !bg-mainblue !w-[388px] !top-[441px]"
              text="Log In"
            />
            <TextfieldLabel
              className="!absolute !left-[31px] !w-[388px] !top-[265px]"
              labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
              overlapGroupClassName="!w-[388px]"
              text="Student ID"
              text1="STUDENT ID"
              textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[364px]"
            />
            <TextfieldLabelIcon
              className="!absolute !left-[31px] !w-[388px] !top-[353px]"
              iconHideActiveStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[10px] !left-[351px]"
              labelClassName="!tracking-[var(--bold-12px-letter-spacing)] !text-[length:var(--bold-12px-font-size)] ![font-style:var(--bold-12px-font-style)] !font-[number:var(--bold-12px-font-weight)] !font-bold-12px !leading-[var(--bold-12px-line-height)] !w-[388px]"
              overlapGroupClassName="!w-[388px]"
              text="Password"
              text1="PASSWORD"
              textfieldClassName="!tracking-[var(--regular-14px-letter-spacing)] !text-[length:var(--regular-14px-font-size)] ![font-style:var(--regular-14px-font-style)] !font-[number:var(--regular-14px-font-weight)] !font-regular-14px !leading-[var(--regular-14px-line-height)] !w-[328px]"
            />
            <p className="absolute w-[388px] top-[196px] left-[31px] font-regular-14px font-[number:var(--regular-14px-font-weight)] text-grayscale-gray text-[length:var(--regular-14px-font-size)] text-center tracking-[var(--regular-14px-letter-spacing)] leading-[var(--regular-14px-line-height)] [font-style:var(--regular-14px-font-style)]">
              Enter your Student ID and password below
            </p>
            <div className="absolute w-[388px] top-[98px] left-[31px] opacity-70 font-bold-19px font-[number:var(--bold-19px-font-weight)] text-sidebar-gray text-[length:var(--bold-19px-font-size)] text-center tracking-[var(--bold-19px-letter-spacing)] leading-[var(--bold-19px-line-height)] [font-style:var(--bold-19px-font-style)]">
              Power Grader
            </div>
            <div className="absolute w-[48px] h-[48px] top-[39px] left-[201px] bg-mainblue rounded-[24px]">
              <img
                className="absolute w-[75px] h-[75px] top-[-13px] left-[-13px]"
                alt="Pg white"
                src="https://c.animaapp.com/PUgvNGDd/img/pg-white-1.svg"
              />
            </div>
            <p className="absolute w-[388px] top-[154px] left-[31px] font-bold-24px font-[number:var(--bold-24px-font-weight)] text-grayscale-black text-[length:var(--bold-24px-font-size)] text-center tracking-[var(--bold-24px-letter-spacing)] leading-[var(--bold-24px-line-height)] [font-style:var(--bold-24px-font-style)]">
              Log In to Power Grader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
