import React, { FC } from "react";

interface IToggleProps {
  value: boolean;
  checkedLabel: string;
  notCheckedLabel: string;
  className?: string;
  onClick: () => void;
}

const Toggle: FC<IToggleProps> = (props) => {
  const {
    value,
    checkedLabel,
    notCheckedLabel,
    className = "",
    onClick,
  } = props;
  console.log(value);
  return (
    <label
      aria-hidden
      className={`${className} inline-flex relative items-center cursor-pointer`}
    >
      <input
        type="checkbox"
        onChange={onClick}
        defaultChecked={value}
        id="checked-toggle"
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-sky rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
      <p className="ml-3">{value ? checkedLabel : notCheckedLabel}</p>
    </label>
  );
};

export default Toggle;
