import { SearchForm } from "@/components/forms/search-form";
import { Main } from "@/components/ui/content";
import { getSearchResults } from "@/lib/actions/get-search-results";

interface UsersSearchProps {
  searchParams: { q: string };
}

export default async function UsersSearch({
  searchParams: { q },
}: UsersSearchProps) {
  const query = q || "Name or location";
  const results = await getSearchResults(query);

  console.log(results);

  return (
    <Main>
      <Main.H1 className="w-[400px]">
        Results 1 - 20 of 2998 for &quot;{query}&quot;
      </Main.H1>
      <SearchForm size="small" keyword={query} />
      <Main.P className="text-[13.4px] text-meta">
        Your search term in highlighted below.
      </Main.P>
    </Main>
  );
}
