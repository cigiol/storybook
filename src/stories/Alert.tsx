import { FC, useEffect } from 'react';

export interface IAlertProps {
  status: 'success' | 'error' | 'warning' | 'info' | 'default';
  message: string;
  duration?: number;
}

const Alert: FC<IAlertProps> = (props) => {
  const { status, message, duration } = props;

  const handleStatus = (): string => {
    switch (status) {
      case 'success':
        return 'bg-green-lightest border-green-lighter';
      case 'error':
        return 'bg-red-lightest border-red';
      case 'warning':
        return 'bg-yellow-lightest border-yellow';
      case 'info':
      default:
        return 'bg-sky-light border-sky-lightest';
    }
  };

  const handleIcon = (): string => {
    switch (status) {
      case 'success':
        return 'fa-circle-check text-green';
      case 'error':
        return 'fa-triangle-exclamation text-red';
      case 'warning':
        return 'fa-circle-exclamation text-yellow';
      case 'info':
      default:
        return 'fa-circle-info text-ink';
    }
  };

  const handleClose = () => {

  };

  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, duration);
  }, []);

  return (
    <div
      className={`flex items-center justify-between gap-x-2 w-full px-6 py-4 rounded border ${handleStatus()}`}
      role="alert"
    >
      <i className={`fa-solid ${handleIcon()} mr-2`} />
      <p>{message}</p>
      <i onClick={handleClose} className="fa-solid fa-circle-xmark cursor-pointer" />
    </div>
  );
};

export default Alert;
