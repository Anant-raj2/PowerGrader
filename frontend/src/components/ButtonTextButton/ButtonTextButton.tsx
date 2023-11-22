interface Props {
  className: any;
  btnLabelClassName: any;
  text: string;
}

export const ButtonTextButton = ({
  className,
  btnLabelClassName,
  text = "Button",
}: Props): JSX.Element => {
  return (
    <button
      className={`relative w-[255px] h-[20px] all-[unset] box-border font-semibold-14-0-2-px font-[number:var(--semibold-14-0-2-px-font-weight)] text-accent-default text-[length:var(--semibold-14-0-2-px-font-size)] text-center tracking-[var(--semibold-14-0-2-px-letter-spacing)] leading-[var(--semibold-14-0-2-px-line-height)] [font-style:var(--semibold-14-0-2-px-font-style)] all-[unset] box-border ${className} ${btnLabelClassName}`}
    >
      {text}
    </button>
  );
};
