import { IconHideActive } from "./icons/IconHideActive/IconHideActive";
import { useState } from "react";
import { FieldError, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  className: any;
  overlapGroupClassName: any;
  textfieldClassName: any;
  text: string;
  iconHideActiveStyleOverrideClassName: any;
  labelClassName: any;
  text1: string;
  type: string;
  register: UseFormRegisterReturn,
  [x: string]: any,
}

export const TextfieldLabelIcon = ({
  className,
  overlapGroupClassName,
  textfieldClassName,
  text = "Input text",
  iconHideActiveStyleOverrideClassName,
  labelClassName,
  text1 = "LABEL",
  register,
  ...props
}: Props): JSX.Element => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <div className={`relative w-[255px] h-[64px] ${className}`}>
      <div
        className={`absolute w-[255px] h-[42px] top-[22px] left-0 bg-grayscale-extra-light rounded-[8px] border border-solid border-grayscale-gray-lightest ${overlapGroupClassName}`}
      >
        <input
          {...props}
          {...register}
          type={isPasswordHidden ? "password" : "text"}
          className={`absolute w-[195px] top-[9px] left-[15px] opacity-40 font-reg-14-0-3-px font-[number:var(--reg-14-0-3-px-font-weight)] text-grayscale-gray-dark text-[length:var(--reg-14-0-3-px-font-size)] tracking-[var(--reg-14-0-3-px-letter-spacing)] leading-[var(--reg-14-0-3-px-line-height)] [font-style:var(--reg-14-0-3-px-font-style)] outline-none ${textfieldClassName}`}
          placeholder={text}
        />
        <IconHideActive
          className={iconHideActiveStyleOverrideClassName}
          onClick={togglePasswordVisibility}
          isPasswordHidden={isPasswordHidden}
        />
      </div>
      <div
        className={`absolute w-[255px] -top-px left-0 font-bold-12-0-3-px-CAPS font-[number:var(--bold-12-0-3-px-CAPS-font-weight)] text-grayscale-gray text-[length:var(--bold-12-0-3-px-CAPS-font-size)] tracking-[var(--bold-12-0-3-px-CAPS-letter-spacing)] leading-[var(--bold-12-0-3-px-CAPS-line-height)] [font-style:var(--bold-12-0-3-px-CAPS-font-style)] ${labelClassName}`}
      >
        {text1}
      </div>
    </div>
  );
};
