"use client";

import { useLoadingStore } from "@/hooks/use-loading-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";

import { useFlashStore } from "@/hooks/use-flash-store";
import {
  deleteDeviceUpdates,
  getDeviceUpdates,
  postDeviceSetup,
  updateDeviceSleep,
  updateDeviceUpdateType,
} from "@/lib/actions/settings/get-post-delete-device";
import { hours } from "@/lib/data";
import {
  deviceSetupSchema,
  deviceUpdateSleepSchema,
  deviceUpdateTypeSchema,
} from "@/lib/validations/device";
import {
  DeviceSetupDataType,
  DeviceUpdateSleepDataType,
  DeviceUpdateTypeDataType,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Mobile } from "../icons/mobile";
import { Main } from "../ui/content";
import { Form } from "../ui/form";
import { Input, Select, Submit } from "../ui/input";

interface FormProps {
  device: Awaited<ReturnType<typeof getDeviceUpdates>>;
}

// TODO: flash message
function SetupForm() {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [isPending, startTransition] = useLoadingTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeviceSetupDataType>({
    resolver: zodResolver(deviceSetupSchema),
  });

  const setup = async (data: DeviceSetupDataType) => {
    await postDeviceSetup(data);
    setLoading(false);
  };

  return (
    <Form
      className="mt-[5px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => setup(data));
      })}
    >
      <Main.H3>
        <label htmlFor="phone">Mobile Phone</label>
      </Main.H3>
      <small className="text-[10.8px]">
        Please precede your number with a &quot;+&quot; and your country code
        (leaving off the leading 0 of your number if applicable). Examples:
        +447781488126 or +12125551212. <Link href="/help">Need help?</Link>
      </small>
      <Input
        type="text"
        id="phone"
        className="mr-[3px] mt-[20px]"
        hasError={!!errors.phone}
        {...register("phone")}
        autoFocus
      />
      <Submit
        value="Save"
        className="mr-[3px] p-[5px_10px]"
        disabled={isPending}
      />
      {errors.phone && (
        <Form.Error className="inline">{errors.phone?.message}</Form.Error>
      )}
      <label htmlFor="okay" className="mt-[3px] block text-[10.8px]">
        <input
          type="checkbox"
          id="okay"
          className="mr-[3px]"
          {...register("type")}
        />
        It&apos;s okay for Twitter to send txt messages to my phone. Standard
        rates apply.
      </label>
    </Form>
  );
}

export function ConfigureForm(formProps: FormProps) {
  const flash = useFlashStore((state) => state.setMessage);
  const deviceData = formProps.device!;
  const [isPending, startTransition] = useLoadingTransition();

  const { register: registerType, handleSubmit: handleTypeSubmit } =
    useForm<DeviceUpdateTypeDataType>({
      resolver: zodResolver(deviceUpdateTypeSchema),
      defaultValues: deviceData,
    });

  const {
    register: registerSleep,
    handleSubmit: handleSleepSubmit,
    getValues,
    watch,
  } = useForm<DeviceUpdateSleepDataType>({
    resolver: zodResolver(deviceUpdateSleepSchema),
    defaultValues: deviceData,
  });

  watch("sleep");

  const type = async (data: DeviceUpdateTypeDataType) => {
    updateDeviceUpdateType(deviceData.id, data);
    flash("Thanks, your device settings have been saved.");
  };

  const sleep = async (data: DeviceUpdateSleepDataType) => {
    updateDeviceSleep(deviceData.id, data);
    flash("Thanks, your device settings have been saved.");
  };

  const deleteDevice = () => {
    deleteDeviceUpdates(deviceData.id);
    flash("Your device has been removed.");
  };

  return (
    <Fragment>
      <Main.H3 className="mt-[10px]">Mobile Phone: {deviceData.phone}</Main.H3>
      <Form
        className="mt-[0px]"
        onSubmit={handleTypeSubmit((data) => {
          startTransition(() => type(data));
        })}
      >
        <label htmlFor="type">Device Updates:</label>
        <div className="mt-[3px]">
          <Select id="type" {...registerType("type")}>
            <option value="on">On</option>
            <option value="off">Off</option>
            <option value="direct_messages">Direct Messages</option>
          </Select>
          <Submit value="Save" className="p-[5px_10px]" disabled={isPending} />
          <small className="mt-[3px] block text-[10.8px]">
            (Send updates to: <strong>40404</strong>)
          </small>
        </div>
      </Form>
      <Form
        onSubmit={handleSleepSubmit((data) => {
          startTransition(() => sleep(data));
        })}
      >
        <span className="block">Sleep:</span>
        <label htmlFor="sleep" className="mt-[5px] block">
          <input
            type="checkbox"
            id="sleep"
            className="mr-[3px]"
            {...registerSleep("sleep")}
          />
          Turn off updates during these hours
        </label>
        <div className="mt-[3px]">
          <Select
            className="mr-[3px] w-[100px]"
            {...registerSleep("from")}
            disabled={!getValues("sleep")}
          >
            {hours.map((hour) => (
              <option key={hour.value} value={hour.value}>
                {hour.label}
              </option>
            ))}
          </Select>
          to
          <Select
            className="ml-[3px] w-[100px]"
            {...registerSleep("to")}
            disabled={!getValues("sleep")}
          >
            {hours.map((hour) => (
              <option key={hour.value} value={hour.value}>
                {hour.label}
              </option>
            ))}
          </Select>
          <Submit value="Save" className="p-[5px_10px]" disabled={isPending} />
        </div>
      </Form>
      <Submit
        value="Delete and start over?"
        className="mt-[30px] p-[5px_10px]"
        onClick={() => {
          const confirmDelete = confirm(
            "Sure you want to delete your number and start over?"
          );
          confirmDelete && startTransition(() => deleteDevice());
        }}
      />
    </Fragment>
  );
}

export function DevicesForm({ device: deviceData }: FormProps) {
  return (
    <Fragment>
      {!deviceData && (
        <div className="mt-[10px]">
          Twitter is more fun when used through your mobile phone. Set yours up!
        </div>
      )}
      <div className="flex items-center">
        <div className="w-[68px]">
          <div className="flex h-[50px] w-[50px] items-center justify-center border border-meta">
            <Mobile />
          </div>
        </div>
        <div className="w-[450px] pl-[3px]">
          {deviceData ? <ConfigureForm device={deviceData} /> : <SetupForm />}
        </div>
      </div>
    </Fragment>
  );
}
