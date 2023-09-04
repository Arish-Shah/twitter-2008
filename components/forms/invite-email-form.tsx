"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { inviteEmailSchema } from "@/lib/validations/invite";
import type { InviteEmailDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Main } from "../ui/content";
import { Input, Submit } from "../ui/input";

interface InviteEmailFormProps {
  formFor: "invite" | "search";
}

export function InviteEmailForm({ formFor }: InviteEmailFormProps) {
  const flash = useFlash();
  const router = useRouter();
  const { register, handleSubmit } = useForm<InviteEmailDataType>({
    resolver: zodResolver(inviteEmailSchema),
  });

  const preview: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    open(
      "/invitations/email_preview",
      "_blank",
      "width=580,height=300,location=no,menubar=no,toolbar=no"
    );
  };

  return (
    <Fragment>
      <Main.H3 className="!m-0">
        <label htmlFor="emails">
          {formFor === "invite" ? (
            "Send email invites"
          ) : (
            <Fragment>
              Did&apos;t find what you were looking for?{" "}
              <span className="font-normal">Send folks an email invite!</span>
            </Fragment>
          )}
        </label>
      </Main.H3>
      <form
        className="mt-[10px]"
        onSubmit={handleSubmit((_) => {
          // flash and redirect as this step is not implementable
          router.push("/home");
          flash("You must provide a valid email address.");
        })}
      >
        <Link
          href="/invitations/email_preview"
          className="float-right text-[10.8px]"
          onClick={preview}
          prefetch={false}
        >
          What will this look like?
        </Link>
        <Input
          type="text"
          className="w-full"
          placeholder="Enter some email addresses"
          id="emails"
          {...register("emails")}
          autoFocus
        />
        <small>
          Separate multiple email addresses with commas,{" "}
          <span className="text-subtext">
            ex: joe@twitter.com, jane@twitter.com
          </span>
        </small>
        <div className="mt-[7px] text-center">
          <Submit value="send »" />
        </div>
      </form>
    </Fragment>
  );
}
