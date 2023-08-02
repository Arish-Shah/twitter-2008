import Link from "next/link";

interface TabProps {
  label: string;
  url: string;
  selected: boolean;
}

interface ProfileTabMenuProps {
  screen: string;
  selected: "updates" | "favorites";
}

function Tab({ label, url, selected }: TabProps) {
  return (
    <li className="w-full border-t border-x-sidebar-border">
      <Link
        href={url}
        className={`block py-[11px] pl-[13px] text-[13.2px] font-bold text-x-sidebar-tab hover:no-underline ${
          selected && "ml-[-1px] bg-white pl-[14px]"
        } ${!selected && "hover:bg-x-pale"}`}
      >
        {label}
      </Link>
    </li>
  );
}

export function ProfileTabMenu({ screen, selected }: ProfileTabMenuProps) {
  return (
    <ul className="">
      <Tab
        label="Updates"
        url={`/${screen}`}
        selected={selected === "updates"}
      />
      <Tab
        label="Favorites"
        url={`/${screen}/favourites`}
        selected={selected === "favorites"}
      />
    </ul>
  );
}
