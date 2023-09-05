"use client";

import { inviteSchema } from "@/lib/validations/invite";
import type { InviteDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Padlock } from "../icons/padlock";
import { Alert } from "../ui/alert";
import { Main } from "../ui/content";
import { Input, Select, Submit } from "../ui/input";

const providers = [
  { value: "hotmail.com", label: "Hotmail" },
  { value: "yahoo.com", label: "Yahoo" },
  { value: "aol.com", label: "AOL" },
  { value: "msn.com", label: "MSN" },
  { value: "gmail.com", label: "Gmail" },
];

interface InviteFormProps {
  email: string;
}

export function InviteForm({ email }: InviteFormProps) {
  const [username, emailProvider] = email.split("@");
  const provider =
    providers.map((p) => p.value).indexOf(emailProvider) >= 0
      ? emailProvider
      : "";

  const router = useRouter();
  const { register, handleSubmit } = useForm<InviteDataType>({
    resolver: zodResolver(inviteSchema),
    defaultValues: { username, provider },
  });

  return (
    <Fragment>
      <div className="flex justify-between">
        <div>
          <Main.H4 className="!m-0">
            Search Web Email{" "}
            <span className="font-normal">(Hotmail, Yahoo, Gmail, Etc.)</span>
          </Main.H4>
          <form
            className="relative table pb-[35px]"
            onSubmit={handleSubmit((_) => {
              // flash and redirect as this step is not implementable
              router.push("/invitations/fetch_contacts");
            })}
          >
            <div className="table-row h-[20px]" />
            <div className="table-row">
              <label className="table-cell" htmlFor="email">
                Your Email
              </label>
              <div className="table-cell pl-[3px]">
                <Input
                  type="text"
                  id="email"
                  {...register("username")}
                  autoFocus
                />
                @
                <Select className="!ml-[7px]" {...register("provider")}>
                  <option value="">Select...</option>
                  {providers.map((provider) => (
                    <option key={provider.value} value={provider.value}>
                      {provider.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="table-row h-[15px]" />
            <div className="table-row">
              <label className="table-cell" htmlFor="password">
                Email password
              </label>
              <div className="table-cell pl-[5px]">
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="absolute mt-[15px] w-full pr-[50px] text-right">
              <Submit value="continue »" />
            </div>
          </form>
        </div>
        <Alert.Warning className="w-[160px]">
          <Main.H4 className="inline-block">
            <Padlock className="mt-[-4px]" /> Email Security
          </Main.H4>
          <p>
            We don&apos;t store your login, your password is submitted securely,
            and we don&apos;t email without your permission.
          </p>
        </Alert.Warning>
      </div>
    </Fragment>
  );
}
