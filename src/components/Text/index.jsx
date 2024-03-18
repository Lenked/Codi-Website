import React from "react";

const sizes = {
  "5xl": "text-[26px] font-medium leading-[34px] md:text-2xl sm:text-[22px]",
  xs: "text-sm font-normal leading-[18px]",
  lg: "text-lg font-normal leading-7",
  "6xl": "text-[32px] font-medium leading-[42px] md:text-3xl sm:text-[28px]",
  "7xl": "text-7xl font-light leading-[91px] md:text-5xl",
  s: "text-base font-normal leading-[21px]",
  "2xl": "text-[23px] font-medium leading-[30px] md:text-[21px]",
  "3xl": "text-2xl font-medium leading-[31px] md:text-[22px]",
  "4xl": "text-[25px] font-medium leading-[33px] md:text-[23px] sm:text-[21px]",
  xl: "text-[21px] font-normal leading-[27px]",
  md: "text-[17px] font-medium leading-[23px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
