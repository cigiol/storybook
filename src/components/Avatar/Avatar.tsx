import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {}
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn("", className)} {...props} />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
