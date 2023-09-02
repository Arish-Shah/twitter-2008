"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { getProfile } from "@/lib/actions/profile/get-profile";
import {
  deletePicture,
  updatePicture,
} from "@/lib/actions/settings/update-delete-picture";
import { useUploadThing } from "@/lib/uploadthing";
import { pictureSchema } from "@/lib/validations/settings";
import type { PictureDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Submit } from "../ui/input";
import { Switch } from "../ui/switch";

interface PictureFormProps {
  profile: Awaited<ReturnType<typeof getProfile>>;
}

export function PictureForm({ profile }: PictureFormProps) {
  const flash = useFlash();
  const [isPending, startTransition] = useLoadingTransition();
  const { startUpload } = useUploadThing("picture");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PictureDataType>({
    resolver: zodResolver(pictureSchema),
  });

  const save = async (data: PictureDataType) => {
    const response = await startUpload(Array.from(data.picture));
    if (response?.length) {
      await updatePicture(response![0].url);
      flash("That's a nice picture!");
    }
  };

  const deleteCurrent = async () => {
    const confirmDelete = confirm(
      "Sure you want to delete your current picture?"
    );
    if (confirmDelete) {
      await deletePicture();
    }
  };

  return (
    <Form
      className="pl-[10px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => save(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup className="pt-[5px]">
          <label htmlFor="picture">
            <Image
              src={profile.picture}
              alt="Profile picture"
              className="inline-block h-auto"
              height={48}
              width={48}
              quality={100}
              draggable={false}
              priority={true}
            />
          </label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <input type="file" id="picture" {...register("picture")} />
          <Form.Subtext
            className={clsx("block", { "!text-form-red": errors.picture })}
          >
            {errors.picture?.message ?? "Maximum size of 700k. JPG, GIF, PNG."}
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Save" disabled={isPending} />
          <Switch condition={profile.pictureChanged}>
            <Submit
              value="Delete current"
              className="ml-[5px]"
              disabled={isPending}
              type="button"
              onClick={() => {
                startTransition(() => deleteCurrent());
              }}
            />
          </Switch>
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
