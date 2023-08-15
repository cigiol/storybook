import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../utils";
import { FC } from "react";

const AlertDialogPortal: FC<AlertDialogPrimitive.AlertDialogPortalProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Portal className={cn("", className)} {...props}>
      {children}
    </AlertDialogPrimitive.Portal>
  );
};
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

export default AlertDialogPortal;
