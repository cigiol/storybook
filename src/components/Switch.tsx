import React, {FC, forwardRef, useState} from "react";
import {AriaSwitchProps, useFocusRing, useSwitch, VisuallyHidden} from "react-aria";
import {useToggleState} from "react-stately";

export interface IToggleProps {
  value: boolean;
  checkedLabel: string;
  notCheckedLabel: string;
  className?: string;
  onClick: () => void;
}

export type SwitchProps = AriaSwitchProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  {
    activeText?: string,
    inActiveText?: string
};

const Switch:FC<SwitchProps> = ({activeText = "Toggle On", inActiveText= "Toggle Off", ...props}) => {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg
        width={40}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <rect
          x={4}
          y={4}
          width={32}
          height={16}
          rx={8}
          fill={state.isSelected ? 'orange' : 'gray'}
        />
        <circle
          cx={state.isSelected ? 28 : 12}
          cy={12}
          r={5}
          fill="white"
        />
        {isFocusVisible &&
          (
            <rect
              x={1}
              y={1}
              width={38}
              height={22}
              rx={11}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {isFocusVisible &&
        (
          <rect
            x={1}
            y={1}
            width={38}
            height={22}
            rx={11}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
        {state.isSelected ? activeText: inActiveText}
    </label>
  )
}
  /*
  const {
    value,
    checkedLabel,
    notCheckedLabel,
    className = "",
    onClick,
  } = props;
  return (
    <label
      aria-hidden
      className={`${className} inline-flex relative items-center cursor-pointer`}
    >
      <input
        type="checkbox"
        onChange={onClick}
        checked={value}
        id="checked-toggle"
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-sky rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
      <p className="ml-3">{value ? checkedLabel : notCheckedLabel}</p>
    </label>
  );
  * */

export default Switch;
