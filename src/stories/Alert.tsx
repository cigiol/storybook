import { FC, useEffect, useState } from "react";

export interface IAlertProps {
  /**
   * What is your alert type?
   */
  status: "success" | "error" | "warning" | "info" | "default";
  /**
   * What is your alert message?
   */
  message: string;
  /**
   * [Optional] What is your auto-close duration? [0 is auto-close disabled]
   */
  duration?: number;
}

type StatusOutputsType = {
  type: string;
  icon: string;
};

const Alert: FC<IAlertProps> = (props) => {
  const [active, setActive] = useState<boolean>(true);
  const [statusOutputs, setStatusOutputs] = useState<StatusOutputsType>({
    type: "",
    icon: "",
  });
  const { status, message, duration } = props;

  useEffect(() => {
    handleStatus();
  }, [status]);

  const handleStatus = (): void => {
    let type = "",
      icon = "";

    switch (status) {
      case "success":
        type = "bg-green-lightest border-green-lighter";
        icon = "fa-circle-check text-green";
        break;
      case "error":
        type = "bg-red-lightest border-red";
        icon = "fa-triangle-exclamation text-red";
        break;
      case "warning":
        type = "bg-yellow-lightest border-yellow";
        icon = "fa-circle-exclamation text-yellow";
        break;
      case "info":
        type = "bg-primary-lighter border-primary-light";
        icon = "fa-circle-info text-primary";
        break;
      default:
        type = "bg-sky-light border-sky-lightest";
        icon = "fa-circle-info text-ink";
        break;
    }
    setStatusOutputs({ type, icon });
  };

  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    if (duration && duration > 0) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, []);

  return (
    <>
      {active && (
        <div
          className={`flex items-center relative justify-between gap-x-2 w-full px-6 py-4 rounded border ${statusOutputs.type}`}
          role="alert"
        >
          <i className={`fa-solid ${statusOutputs.icon} mr-2`} />
          <p>{message}</p>
          <i
            onClick={handleClose}
            className="fa-solid fa-circle-xmark cursor-pointer absolute -top-2 -right-2"
          />
        </div>
      )}
    </>
  );
};

export default Alert;
