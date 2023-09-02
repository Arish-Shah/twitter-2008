"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { updateDesign } from "@/lib/actions/settings/update-design";
import { defaultThemes, designColors } from "@/lib/data";
import { useUploadThing } from "@/lib/uploadthing";
import { getThemeCSS } from "@/lib/utils";
import { designSchema } from "@/lib/validations/settings";
import type { DesignDataType, ThemeType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useForm } from "react-hook-form";
import { Alert } from "../ui/alert";
import { Submit } from "../ui/input";
import { Switch } from "../ui/switch";

interface DesignFormProps {
  currentTheme: ThemeType;
}

export function DesignForm({ currentTheme }: DesignFormProps) {
  const [tab, setTab] = useState<"image" | "colors" | undefined>();
  const [selected, setSelected] = useState<keyof ThemeType | undefined>();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<DesignDataType>({
    resolver: zodResolver(designSchema),
    defaultValues: currentTheme,
  });
  const flash = useFlash();
  const router = useRouter();
  const [isPending, startTransition] = useLoadingTransition();
  const { startUpload } = useUploadThing("backgroundImage");
  const css = getThemeCSS(getValues());

  watch();

  const uploadBackgroundImage = async (theme: DesignDataType) => {
    if (theme.backgroundFile?.length === 1) {
      const response = await startUpload(Array.from(theme.backgroundFile));
      if (response?.length) return response[0].url;
    }
    return theme.backgroundImage;
  };

  const save = async (theme: DesignDataType) => {
    router.replace("/account/profile_settings");
    const backgroundImage = await uploadBackgroundImage(theme);
    await updateDesign({
      ...theme,
      backgroundImage,
      backgroundFile: undefined,
    });
    flash("Your profile customization has been saved.");
  };

  return (
    <form
      className="mx-[15px]"
      onSubmit={handleSubmit((data) => {
        startTransition(() => save(data));
      })}
    >
      <style>{css}</style>
      <div className="mt-[20px] border border-gray">
        <div className="bg-gradient-to-t from-white to-timeline-hover p-[10px] text-[14.4px]">
          Select a <strong>theme</strong> »
        </div>
        <div className="grid grid-cols-4 gap-[7px] overflow-hidden p-[10px]">
          {defaultThemes.map((theme, i) => (
            <div
              key={i}
              className="h-[75px] overflow-hidden border border-gray bg-[15%_50%] hover:border-text"
              title={`Theme ${i + 1}`}
              style={{ backgroundImage: `url(${theme.backgroundImage})` }}
              onClick={() => reset(theme)}
            />
          ))}
        </div>
      </div>
      <div className="mt-[15px] flex">
        <div
          onClick={() => setTab("image")}
          className={clsx(
            "w-[245px] cursor-pointer border border-gray bg-gradient-to-t from-white to-timeline-hover p-[10px]",
            {
              "z-10 border-b-white": tab === "image",
              "text-links hover:underline": tab !== "image",
            }
          )}
        >
          Change <strong>background image</strong> »
        </div>
        <div
          onClick={() => setTab("colors")}
          className={clsx(
            "ml-[10px] w-[245px] cursor-pointer border border-gray bg-gradient-to-t from-white to-timeline-hover p-[10px]",
            {
              "z-10 border-b-white": tab === "colors",
              "text-links hover:underline": tab !== "colors",
            }
          )}
        >
          Change design <strong>colors</strong> »
        </div>
      </div>
      <Switch condition={!!tab}>
        <div className="mt-[-1px] border border-gray p-[10px] pb-[8px]">
          <Switch condition={tab === "image"}>
            <Alert.Default className="!p-[10px]">
              <input type="file" {...register("backgroundFile")} />
              <small
                className={clsx("mt-[5px] block", {
                  "text-subtext": !errors.backgroundFile,
                  "text-form-red": errors.backgroundFile,
                })}
              >
                {errors.backgroundFile?.message ??
                  "Images must be smaller than 800k. GIF, JPG, PNG."}
              </small>
            </Alert.Default>
            <div className="mt-[10px] grid grid-cols-4 gap-[5px] ">
              <Switch condition={!!getValues().backgroundImage}>
                <div
                  className="h-[75px] overflow-hidden border border-gray-border bg-[15%_50%] hover:border-text"
                  style={{
                    backgroundImage: `url(${getValues().backgroundImage})`,
                  }}
                />
              </Switch>
              <div
                className="flex h-[75px] cursor-pointer items-center border border-gray-border pl-[10px] text-[11.32px] hover:border-text"
                onClick={() => setValue("backgroundImage", "")}
              >
                ❌ Don&apos;t use a background image
              </div>
            </div>
            <label
              htmlFor="tile"
              className="mt-[8px] block font-georgia italic text-subtext"
            >
              <input
                type="checkbox"
                id="tile"
                className="mr-[2px]"
                {...register("tile")}
              />{" "}
              tile background
            </label>
          </Switch>
          <Switch condition={tab === "colors"}>
            <div className="flex items-start py-[10px]">
              <div className="grid w-[220px] grid-cols-2 gap-[8px]">
                {Object.keys(designColors).map((color) => (
                  <div key={color} className="cursor-default">
                    <span className="font-georgia italic text-meta">
                      {color}
                    </span>
                    <input
                      onFocus={() => setSelected(designColors[color])}
                      className={clsx(
                        "w-full p-[6px] pl-[12px] text-[13.2px] text-black"
                      )}
                      style={{
                        backgroundColor: getValues()[
                          designColors[color]
                        ] as string,
                      }}
                      {...register(designColors[color])}
                    />
                  </div>
                ))}
              </div>
              <HexColorPicker
                className={clsx("ml-[40px]", {
                  "pointer-events-none opacity-5": !selected,
                })}
                color={selected && (getValues()[selected] as string)}
                onChange={(color) => setValue(selected!, color)}
              />
            </div>
          </Switch>
        </div>
      </Switch>
      <div className="mb-[30px] mt-[20px] text-center">
        <Submit
          type="button"
          value="cancel"
          className="mr-[5px]"
          onClick={() => {
            reset(currentTheme);
            setSelected(undefined);
            setTab(undefined);
          }}
          disabled={isPending}
        />
        <Submit value="save changes" disabled={isPending} />
      </div>
    </form>
  );
}
