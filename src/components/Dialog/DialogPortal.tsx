import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils";
import { FC } from "react";

const DialogPortal: FC<DialogPrimitive.DialogPortalProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <DialogPrimitive.Portal className={cn("", className)} {...props}>
      {children}
    </DialogPrimitive.Portal>
  );
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

export default DialogPortal;
