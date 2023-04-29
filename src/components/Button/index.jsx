import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-md",
  RoundedBorder3: "rounded-[3px]",
  icbCircleBorder10: "rounded-[10px]",
  icbRoundedBorder4: "rounded",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillBlue50: "bg-blue_50 text-gray_900_02",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray400:
    "border border-blue_gray_400 border-solid text-black_900_01",
  FillBluegray100: "bg-blue_gray_100 text-black_900_01",
  OutlineBluegray100: "bg-white_A700 border border-blue_gray_100 border-solid",
  FillRed700: "bg-red_700 text-gray_100",
  FillGray10001: "bg-gray_100_01 text-green_600",
  FillGray5005: "bg-gray_50_05 text-amber_700",
  OutlineBlueA700_1:
    "bg-white_A700 border border-blue_A700 border-solid text-blue_A700",
  OutlineAmber500:
    "bg-gray_50_05 border border-amber_500 border-solid text-amber_500",
  icbFillBlack900: "bg-black_900",
  icbOutlineBluegray100: "border border-blue_gray_100 border-solid",
  icbFillBluegray30087: "bg-blue_gray_300_87",
  icbOutlineBluegray100_1:
    "bg-white_A700 border border-blue_gray_100 border-solid",
  icbFillGray50001: "bg-gray_500_01",
};
const sizes = {
  sm: "p-1",
  md: "p-2.5",
  lg: "p-3.5",
  xl: "p-[17px]",
  smIcn: "p-0.5",
  mdIcn: "p-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "RoundedBorder3",
    "icbCircleBorder10",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillBlue50",
    "OutlineBlueA700",
    "OutlineBluegray400",
    "FillBluegray100",
    "OutlineBluegray100",
    "FillRed700",
    "FillGray10001",
    "FillGray5005",
    "OutlineBlueA700_1",
    "OutlineAmber500",
    "icbFillBlack900",
    "icbOutlineBluegray100",
    "icbFillBluegray30087",
    "icbOutlineBluegray100_1",
    "icbFillGray50001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
