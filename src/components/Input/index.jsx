import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  underline: {
    gray_900_87: "text-gray-900 border-b border-gray-900_87 border-solid",
  },
};
const sizes = {
  xs: "h-[39px] pr-[35px] text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "underline",
      size = "xs",
      color = "gray_900_87",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-gray-900 tracking-[2.00px] uppercase text-lg font-medium border-b border-gray-900_87 border-solid ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["underline"]),
  color: PropTypes.oneOf(["gray_900_87"]),
};

export { Input };
