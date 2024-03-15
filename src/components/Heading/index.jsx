import React from "react";

const sizes = {
  "3xl": "text-[26px] font-bold leading-[35px] md:text-2xl sm:text-[22px]",
  "2xl": "text-[25px] font-semibold leading-8 md:text-[23px] sm:text-[21px]",
  xl: "text-2xl font-bold leading-[31px] md:text-[22px]",
  "5xl": "text-[40px] font-extrabold leading-[51px] md:text-[38px] sm:text-4xl",
  "4xl": "text-[32px] font-bold leading-[42px] md:text-3xl sm:text-[28px]",
  "7xl": "text-[120px] font-extrabold leading-[152px] md:text-5xl",
  s: "text-lg font-semibold leading-[23px]",
  md: "text-[19px] font-semibold leading-[25px]",
  "6xl": "text-8xl font-extrabold leading-[106px] md:text-5xl",
  xs: "text-base font-semibold leading-[21px]",
  lg: "text-xl font-semibold leading-[26px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
