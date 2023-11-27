interface Props {
  className: any;
  btnLabelClassName: any;
  text: string;
  type?: "button" | "submit" | "reset";
}

export const ButtonContained: React.FC<Props> = ({
  className,
  btnLabelClassName,
  text = "Label",
  type = "button",
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      className={`relative w-[255px] h-[48px] bg-accent-default rounded-[8px] shadow-button-accent-default ${className}`}
    >
      <div
        className={`absolute w-[207px] top-[14px] left-[24px] font-semibold-14-0-2-px font-[number:var(--semibold-14-0-2-px-font-weight)] text-grayscale-white text-[length:var(--semibold-14-0-2-px-font-size)] text-center tracking-[var(--semibold-14-0-2-px-letter-spacing)] leading-[var(--semibold-14-0-2-px-line-height)] [font-style:var(--semibold-14-0-2-px-font-style)] ${btnLabelClassName}`}
      >
        {text}
      </div>
    </button>
  );
};
