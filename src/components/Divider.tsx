import { FC } from "react";

interface IDividerProps {
  text?: JSX.Element | string;
  align: "start" | "center" | "end";
  className?: string;
}

const Divider: FC<IDividerProps> = (props) => {
  const { text, align, className = "" } = props;

  const makeAlignment = (piece: string): string => {
    switch (align) {
      case "start":
        return piece === "first" ? "w-1/6" : piece === "last" ? "w-4/6" : "";
      case "center":
        return "";
      case "end":
        return piece === "first" ? "w-4/6" : piece === "last" ? "w-1/6" : "";
      default:
        return "";
    }

    return "";
  };

  return (
    <div className={`relative flex py-5 items-center ${className}`}>
      <div
        className={`flex-grow border-t border-default-border ${makeAlignment(
          "first"
        )}`}
      ></div>
      <span className="flex-shrink mx-4 text-gray-400">{text}</span>
      <div
        className={`flex-grow border-t border-default-border ${makeAlignment(
          "last"
        )}`}
      ></div>
    </div>
  );
};

export default Divider;
