"use client";

import { searchSchema } from "@/lib/validations/invite";
import { SearchDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input, Submit } from "../ui/input";

interface SearchFormProps {
  size: "small" | "large";
  keyword?: string;
  autoFocus: boolean;
}

export function SearchForm({ size, keyword, autoFocus }: SearchFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SearchDataType>({
    resolver: zodResolver(searchSchema),
    defaultValues: { keyword },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        router.push("/tw/users/search?q=" + data.keyword.split(" ").join("+"));
      })}
    >
      <Input
        className={clsx("!py-0", {
          "w-[400px]": size === "large",
          "w-[250px]": size === "small",
        })}
        placeholder="Name or location"
        {...register("keyword")}
        autoFocus={autoFocus}
      />
      <Submit value="search" />
    </form>
  );
}
