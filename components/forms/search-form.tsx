import { searchSchema } from "@/lib/validations/invite";
import { SearchDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input, Submit } from "../ui/input";

export function SearchForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SearchDataType>({
    resolver: zodResolver(searchSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        router.push("/users/search?q=" + data.keyword);
      })}
    >
      <Input
        className="w-[400px] !py-0"
        placeholder="Name or location"
        {...register("keyword")}
      />
      <Submit value="search" />
    </form>
  );
}
