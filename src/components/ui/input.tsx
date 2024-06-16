import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showpassword, setShowPassword] = React.useState(false);
    const [inputType, setInputType] = React.useState<string | undefined>();

    React.useEffect(() => {
      if (type === "password") {
        if (showpassword) {
          setInputType("text");
        } else {
          setInputType("password");
        }
      } else {
        setInputType(type);
      }
    }, [showpassword, type]);

    return (
      <div
        className={`flex justify-between items-center w-full ${
          type === "password"
            ? "px-3 py-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 border border-input rounded-md text-sm placeholder:text-muted-foreground h-10 focus:outline-2 outline-black"
            : ""
        }`}
      >
        <input
          type={inputType}
          className={cn(
            `flex w-full bg-background ${
              type === "password"
                ? ""
                : " h-10 rounded-md border border-input px-3 py-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background text-sm placeholder:text-muted-foreground "
            }  file:border-0 file:bg-transparent file:text-sm file:font-medium outline-none`,
            className
          )}
          ref={ref}
          {...props}
        />
        {type == "password" ? (
          <>
            {showpassword ? (
              <Eye size={20} onClick={() => setShowPassword(false)} />
            ) : (
              <EyeOff size={20} onClick={() => setShowPassword(true)} />
            )}
          </>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
