"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import {
  getDeviceUpdates,
  updateDeviceUpdateType,
} from "@/lib/actions/settings/get-post-delete-device";
import { deviceUpdateTypeSchema } from "@/lib/validations/device";
import type { DeviceUpdateTypeDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Sidebar } from "../ui/content";

interface DeviceUpdatesProps {
  device: Awaited<ReturnType<typeof getDeviceUpdates>>;
}

export function DeviceUpdates({ device }: DeviceUpdatesProps) {
  const [, startTransition] = useLoadingTransition();
  const { register, handleSubmit } = useForm<DeviceUpdateTypeDataType>({
    resolver: zodResolver(deviceUpdateTypeSchema),
    defaultValues: { type: device?.type ?? "off" },
  });

  const update = async (data: DeviceUpdateTypeDataType) => {
    await updateDeviceUpdateType(device!.id, data);
  };

  return (
    <div className="pb-[10px]">
      <Sidebar.H1 className="mb-0">Device Updates</Sidebar.H1>
      <Sidebar.P className="!mt-[0px]">
        {!device ? (
          <Link href="/devices" className="text-[10px]">
            Set up SMS updates
          </Link>
        ) : (
          <form
            onChange={(e) => {
              // had to do it this way as preventDefault stops radio from being selected
              e.stopPropagation();
              handleSubmit((data) => {
                startTransition(() => update(data));
              })();
            }}
          >
            <label htmlFor="type-on">
              <input
                type="radio"
                id="type-on"
                value="on"
                {...register("type")}
              />
              <span className="ml-[2px]">phone</span>
            </label>
            <label htmlFor="type-off" className="ml-[8px]">
              <input
                type="radio"
                id="type-off"
                value="off"
                {...register("type")}
              />
              <span className="ml-[2px]">off</span>
            </label>
          </form>
        )}
      </Sidebar.P>
    </div>
  );
}
