import { getUsernameAvailable } from "@/lib/get-username-available";
import { UsernameAvailableResponseType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import {
  ChangeEventHandler,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import { Form } from "./ui/form";
import { Input } from "./ui/input";

interface UsernameFieldProps {}

export function UsernameField({}: UsernameFieldProps) {
  const firstRenderRef = useRef(true);

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<UsernameAvailableResponseType>({
    message: null,
    success: true,
  });
  const [debouncedUsername] = useDebounce(username, 1000);

  useEffect(() => {
    const checkUsername = async () => {
      const response = await getUsernameAvailable(debouncedUsername);
      setResponse(response);
      setLoading(false);
    };
    !firstRenderRef.current && checkUsername();
  }, [debouncedUsername]);

  useEffect(() => {
    firstRenderRef.current = false;
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoading(true);
    setUsername(e.target.value);
  };

  return (
    <Fragment>
      <Input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
        minLength={1}
        maxLength={15}
        autoFocus
      />
      <Form.Subtext>
        Your URL: http://twitter.com/
        <span
          className={clsx("font-bold", {
            "text-green": response.success,
            "text-red": !response.success,
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
              "text-green": response.success,
              "text-red": !response.success,
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
