"use client";

import { useFlashStore } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import {
  getNotices,
  updateNotices,
} from "@/lib/actions/settings/get-update-notices";
import { noticeSchema } from "@/lib/validations/notice";
import type { NoticeDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Select, Submit } from "../ui/input";

interface NoticesFormProps {
  notices: Awaited<ReturnType<typeof getNotices>>;
}

export function NoticesForm({ notices }: NoticesFormProps) {
  const flash = useFlashStore((state) => state.setMessage);
  const [isPending, startTransition] = useLoadingTransition();
  const { register, handleSubmit } = useForm<NoticeDataType>({
    resolver: zodResolver(noticeSchema),
    defaultValues: notices,
  });

  const notice = async (data: NoticeDataType) => {
    await updateNotices(notices.id, data);
    flash("Thanks, your notification settings have been saved.");
  };

  return (
    <Form
      className="pb-[15px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => notice(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup>Auto Nudge:</Form.LabelGroup>
        <Form.InputGroup>
          <label htmlFor="nudge">
            <input
              type="checkbox"
              id="nudge"
              className="mr-[3px]"
              {...register("nudge")}
            />
            Nudge me if I haven&apos;t updated in 24 hours
          </label>
          <Form.Subtext className="block">
            This will send a txt to your phone or message to your IM account.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="replies">@Replies:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          Show me{" "}
          <Select id="replies" className="ml-[3px]" {...register("replies")}>
            <option value="all">all @ replies</option>
            <option value="following">
              @ replies to the people I&apos;m following
            </option>
            <option value="none">no @ replies</option>
          </Select>
          <Form.Subtext>
            <small>
              <Link href="/replies">What is this?</Link>
            </small>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>New Follower Emails:</Form.LabelGroup>
        <Form.InputGroup className="align-middle">
          <label htmlFor="new_follower">
            <input
              type="checkbox"
              id="new_follower"
              className="mr-[3px]"
              {...register("newFollower")}
            />
            Email when someone starts following me
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>Direct Text Emails:</Form.LabelGroup>
        <Form.InputGroup className="align-middle">
          <label htmlFor="direct_text">
            <input
              type="checkbox"
              id="direct_text"
              className="mr-[3px]"
              {...register("directText")}
            />
            Email when I receive a new direct message
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>Email Newsletter:</Form.LabelGroup>
        <Form.InputGroup className="align-middle">
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-[3px]"
              {...register("newsletter")}
            />
            I want the inside scoop—please send me email updates!
          </label>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Save" disabled={isPending} />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
