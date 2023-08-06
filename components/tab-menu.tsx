import { HomeTabType, MenuItemType, ProfileTabType } from "@/types";
import Link from "next/link";

interface TabProps {
  label: any;
  url: string;
  selected: boolean;
  unreadCount?: number;
}

interface ProfileTabMenuProps {
  screen: string;
  selected: ProfileTabType;
}

interface HomeTabMenuProps {
  screen: string;
  selected: HomeTabType;
}

function Tab({ label, url, selected, unreadCount }: TabProps) {
  return (
    <li className="w-full border-t border-x-sidebar-border">
      <Link
        href={url}
        className={`flex justify-between px-[13px] py-[11px] text-[13.2px] font-bold text-x-text hover:no-underline ${
          selected && "ml-[-1px] bg-white pl-[14px]"
        } ${!selected && "hover:bg-x-pale"}`}
      >
        <span>{label}</span>
        {unreadCount && <span>{unreadCount}</span>}
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
    { label: "@Replies", url: "/replies", selected: selected === "REPLIES" },
    {
      label: "Direct Messages",
      url: "/direct_messages",
      selected: selected === "DIRECT_MESSAGES",
      unreadCount: 0,
    },
    {
      label: "Favorites",
      url: "/favorites",
      selected: selected === "FAVORITES",
    },
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
