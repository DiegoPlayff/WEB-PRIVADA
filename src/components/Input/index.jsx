import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  FillBlue50: "bg-blue_50",
  OutlineBluegray100_1:
    "bg-gray_900_9b border border-blue_gray_100 border-solid",
  srcOutlineBluegray300:
    "bg-white_A700 border border-blue_gray_300 border-solid",
};
const shapes = {
  RoundedBorder6: "rounded-md",
  CustomBorderTL6:
    "rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md",
  srcRoundedBorder6: "rounded-md",
};
const sizes = {
  sm: "p-[13px]",
  md: "pb-[19px] pt-3.5 px-3.5",
  lg: "p-[17px]",
  xl: "pb-[34px] pt-[29px] sm:px-5 px-[29px]",
  smSrc: "p-[13px]",
  mdSrc: "p-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL6",
    "srcRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillBlue50",
    "OutlineBluegray100_1",
    "srcOutlineBluegray300",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smSrc", "mdSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
