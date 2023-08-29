import { getUnreadCount } from "@/lib/actions/home/get-post-message";
import clsx from "clsx";
import Link from "next/link";

const homeLinks = [
  { label: "Home", href: "/home" },
  { label: "@Replies", href: "/replies" },
  { label: "Direct Messages", href: "/direct_messages", unread: 0 },
  { label: "Favorites", href: "/favorites" },
  { label: "Everyone", href: "/everyone" },
] as const;

const profileLinks = (username: string) => {
  return [
    { label: "Updates", href: `/${username}` },
    { label: "Favorites", href: `/${username}/favorites` },
  ] as const;
};

type HomeLinkType = (typeof homeLinks)[number];
type ProfileLinkType = ReturnType<typeof profileLinks>[number];

type MenuProps =
  | {
      type: "home";
      selected: HomeLinkType["label"];
      username?: string;
    }
  | {
      type: "profile";
      username: string;
      selected: ProfileLinkType["label"];
    };

interface MenuItemProps {
  link: HomeLinkType | ProfileLinkType;
  selected: boolean;
}

function MenuItem({ link, selected }: MenuItemProps) {
  return (
    <li className="w-full border-t border-sidebar-border">
      <Link
        href={link.href}
        className={clsx(
          "flex justify-between px-[13px] py-[11px] text-[13.2px] font-bold text-text hover:no-underline",
          {
            "ml-[-1px] bg-white pl-[14px]": selected,
            "hover:bg-pale": !selected,
          }
        )}
      >
        <span>{link.label}</span>
        {link.label === "Direct Messages" && <span>{link.unread}</span>}
      </Link>
    </li>
  );
}

export async function Menu({ type, selected, username }: MenuProps) {
  let links;

  if (type === "home") {
    links = homeLinks;
    const unread = await getUnreadCount();
    // TODO: fix type
    (links[2] as any).unread = unread;
  } else links = profileLinks(username);

  return (
    <ul>
      {links.map((link) => (
        <MenuItem
          key={link.label}
          link={link}
          selected={selected === link.label}
        />
      ))}
    </ul>
  );
}
