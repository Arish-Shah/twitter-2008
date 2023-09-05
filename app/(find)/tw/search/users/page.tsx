import { InviteEmailForm } from "@/components/forms/invite-email-form";
import { SearchForm } from "@/components/forms/search-form";
import { Pagination } from "@/components/profile/pagination";
import { Results } from "@/components/search/results";
import { Alert } from "@/components/ui/alert";
import { Main } from "@/components/ui/content";
import { getSearchResults } from "@/lib/actions/get-search-results";
import type { Metadata } from "next";

interface UsersSearchProps {
  searchParams: { q: string; page?: string };
}

export const metadata: Metadata = {
  title: "Twitter / people search",
};

export default async function UsersSearch({ searchParams }: UsersSearchProps) {
  const query = searchParams.q || "Name or location";
  const page = Number(searchParams.page) || 1;
  const limit = 20;
  const data = await getSearchResults(query, page, limit);

  const startIndex = Math.min((page - 1) * limit + 1, data.count);
  const endIndex = Math.min(page * limit, data.count);
  const hasMore = endIndex < data.count;
  const totalPages = Math.floor(data.count / limit) + 1;

  return (
    <Main className="pb-[20px]">
      <Main.H1 className="w-[400px]">
        Results {startIndex} - {endIndex} of {data.count} for &quot;{query}
        &quot;
      </Main.H1>
      <SearchForm size="small" keyword={query} autoFocus={false} />
      <Main.P className="mb-[20px] text-[13.4px] text-meta">
        Your search term in highlighted below.
      </Main.P>
      <Results results={data.results} />
      <center className="mt-[10px] font-bold">
        page {page} of {totalPages}
      </center>
      <Alert.Default className="mx-auto mt-[20px] max-w-[500px] !p-[10px]">
        <InviteEmailForm formFor="search" autoFocus={false} />
      </Alert.Default>
      <Pagination type="prevNext" page={page} hasMore={hasMore} />
    </Main>
  );
}
