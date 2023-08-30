"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { updateProfile } from "@/lib/actions/profile/get-update-profile";
import { getErrorMessage } from "@/lib/utils";
import { accountSettingsSchema } from "@/lib/validations/settings";
import type { AccountSettingsDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { Input, Select, Submit } from "../ui/input";
import { Switch } from "../ui/switch";
import { UsernameInput } from "../username-input";

interface SettingsFormProps {
  defaultValues: AccountSettingsDataType;
}

export function SettingsForm({ defaultValues }: SettingsFormProps) {
  const flash = useFlash();
  const router = useRouter();
  const [isPending, startTransition] = useLoadingTransition();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<AccountSettingsDataType>({
    resolver: zodResolver(accountSettingsSchema),
    defaultValues,
  });

  const update = async (data: AccountSettingsDataType) => {
    router.replace("/account/settings");
    try {
      await updateProfile(data);
      flash("Thanks, your settings have been saved.");
    } catch (error) {
      flash(getErrorMessage(error));
    }
  };

  return (
    <Form
      className="pl-[10px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => update(data));
      })}
    >
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="name">Name:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="name" type="text" {...register("name")} />
          <Form.Subtext className="block">
            Enter your real name, so people you know can recognize you.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="username">Username:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <UsernameInput
            id="username"
            defaultUsername={defaultValues.username!}
            defaultMessage="No spaces, please."
            {...register("username")}
          />
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="email">Email:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="email" type="email" {...register("email")} />
        </Form.InputGroup>
      </Form.Row>
      <Switch condition={Boolean(dirtyFields.email || !!dirtyFields.username)}>
        <Form.Row>
          <Form.LabelGroup />
          <Form.InputGroup>
            <div className="border border-gray-border bg-gray p-[8px]">
              <strong>
                You must re-enter your password to change your screen name or
                email address.
              </strong>
              <div className="h-[15px]"></div>
              <Form.Row>
                <Form.LabelGroup className="!w-0">
                  <label htmlFor="password" className="font-bold">
                    Password:
                  </label>
                </Form.LabelGroup>
                <Form.InputGroup className="p-0">
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  <Form.Subtext>
                    <Link href="/account/resend_password">
                      Forgot your password?
                    </Link>
                  </Form.Subtext>
                </Form.InputGroup>
              </Form.Row>
            </div>
          </Form.InputGroup>
        </Form.Row>
      </Switch>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="time_zone">Time Zone:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Select className="w-[250px]" disabled>
            <option>(GMT) London</option>
          </Select>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="web">More Info URL:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="web" type="url" {...register("web")} />
          <Form.Subtext className="block">
            Have a homepage or a blog? Put the address here.
            <Link href="/downloads" className="block">
              (You can also add Twitter to your site here)
            </Link>
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="bio">One Line Bio:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="bio" type="text" {...register("bio")} />
          <Form.Subtext className="block">
            About yourself in fewer than 160 chars.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="location">Location:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Input id="location" type="text" {...register("location")} />
          <Form.Subtext className="block">
            Where in the world are you?
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup>
          <label htmlFor="language">Language:</label>
        </Form.LabelGroup>
        <Form.InputGroup>
          <Select className="w-[130px]" disabled>
            <option>English</option>
          </Select>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <label htmlFor="protected">
            <input type="checkbox" id="protected" {...register("protected")} />{" "}
            Protect my updates
          </label>
          <Form.Subtext className="block">
            Only let people whom I approve follow my updates. If this is
            checked, you WILL not be on the{" "}
            <Link href="/public_timeline">Public Timeline</Link>. Updates posted
            previously may still be publicly visible in some places.
          </Form.Subtext>
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
