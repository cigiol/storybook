import {FC, ReactElement} from 'react';

interface IBadgeProps {
  /**
   * What is your class-name
   */
  className?: string;
  /**
   * Select left icon. Please refer this document. [https://react-icons.github.io/react-icons/]
   */
  leftIcon?: ReactElement;
  /**
   * Select right icon. Please refer this document. [https://react-icons.github.io/react-icons/]
   */
  rightIcon?: ReactElement;
  /**
   * Text your badge.
   */
  text: ReactElement | string;
}

const Badge: FC<IBadgeProps> = (props) => {
  const { className = '', leftIcon, rightIcon, text = '' } = props;
  return (
    <span
      className={`flex w-fit justify-start items-center gap-x-2 py-1 px-2 rounded-full ${className}`}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </span>
  );
};

export default Badge;
