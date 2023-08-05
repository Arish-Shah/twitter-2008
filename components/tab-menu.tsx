import { HomeTabType, MenuItemType, ProfileTabType } from "@/types";
import Link from "next/link";

interface TabProps {
  label: any;
  url: string;
  selected: boolean;
}

interface ProfileTabMenuProps {
  screen: string;
  selected: ProfileTabType;
}

interface HomeTabMenuProps {
  screen: string;
  selected: HomeTabType;
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
  const menu: MenuItemType[] = [
    { label: "Updates", url: `/${screen}`, selected: selected === "UPDATES" },
    {
      label: "Favorites",
      url: `/${screen}/favourites`,
      selected: selected === "FAVORITES",
    },
  ];

  return (
    <ul>
      {menu.map((item) => (
        <Tab key={item.label} {...item} />
      ))}
    </ul>
  );
}

export function HomeTabMenu({ screen, selected }: HomeTabMenuProps) {
  const menu: MenuItemType[] = [
    { label: "Home", url: "/home", selected: selected === "HOME" },
    { label: "Replies", url: "/replies", selected: selected === "REPLIES" },
    {
      label: "Direct Messages",
      url: "/direct_messages",
      selected: selected === "DIRECT_MESSAGES",
    },
    {
      label: "Favorites",
      url: "/favorites",
      selected: selected === "FAVORITES",
    },
    { label: "@Replies", url: "/replies", selected: selected === "REPLIES" },
    { label: "Everyone", url: "/everyone", selected: selected === "EVERYONE" },
  ];

  return (
    <ul>
      {menu.map((item) => (
        <Tab key={item.label} {...item} />
      ))}
    </ul>
  );
}
