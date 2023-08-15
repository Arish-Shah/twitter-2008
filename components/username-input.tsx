import { useMountedEffect } from "@/hooks/use-mounted-effect";
import {
  getUsernameAvailableActive,
  type UsernameAvailableResponse,
} from "@/lib/actions/get-username-available";
import clsx from "clsx";
import Image from "next/image";
import React, {
  ChangeEventHandler,
  Fragment,
  forwardRef,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import { Form } from "./ui/form";
import { Input } from "./ui/input";

interface UsernameInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const UsernameInput = forwardRef<HTMLInputElement, UsernameInputProps>(
  function UsernameInput({ hasError, onChange, ...props }, ref) {
    const [username, setUsername] = useState("");
    const [debouncedUsername] = useDebounce(username, 1000);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<UsernameAvailableResponse>({
      message: null,
      success: true,
    });

    useMountedEffect(() => {
      const checkUsername = async () => {
        setResponse(await getUsernameAvailableActive(debouncedUsername));
        setLoading(false);
      };
      checkUsername();
    }, [debouncedUsername]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.target.value;
      setLoading(true);
      setUsername(value);
      onChange!(e);
    };

    return (
      <Fragment>
        <Input
          type="text"
          id="username"
          maxLength={15}
          onChange={handleChange}
          ref={ref}
          hasError={hasError}
          {...props}
          autoFocus
        />
        <Form.Subtext>
          Your URL: http://twitter.com/
          <span
            className={clsx("font-bold", {
              "text-form-green": response.success,
              "text-form-red": !response.success,
            })}
          >
            {username || (!response.message && "USERNAME")}
          </span>{" "}
          <br />
          <div className="relative h-[15px]">
            <span
              className={clsx("absolute transition-opacity duration-500", {
                "opacity-0 delay-0": loading || response.message,
                "opacity-100 delay-500": !loading && !response.message,
              })}
            >
              Username can only contain letters, numbers and &apos;_&apos;
            </span>
            <span
              className={clsx(
                "absolute text-text transition-opacity duration-500",
                {
                  "opacity-0 delay-0": !loading,
                  "opacity-100 delay-500": loading,
                }
              )}
            >
              <Image
                src="/images/ui/indicator_arrows_circle.gif"
                alt="Indicator_arrows_circle"
                height={10}
                width={10}
                quality={100}
                className="inline"
              />{" "}
              Checking for availability of this username ...
            </span>
            <span
              className={clsx("absolute transition-opacity duration-500", {
                "text-form-green": response.success,
                "text-form-red": !response.success,
                "opacity-0 delay-0": loading || !response.message,
                "opacity-100 delay-500": !loading && response.message,
              })}
            >
              {response.message}
            </span>
          </div>
        </Form.Subtext>
      </Fragment>
    );
  }
);
