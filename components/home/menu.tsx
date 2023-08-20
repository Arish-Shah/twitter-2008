import clsx from "clsx";
import Link from "next/link";

const home = [
  { label: "Home", href: "/home" },
  { label: "@Replies", href: "/replies" },
  { label: "Direct Messages", href: "/direct_messages", unread: 0 },
  { label: "Favorites", href: "/favorites" },
  { label: "Everyone", href: "/everyone" },
] as const;

const profile = (username: string) =>
  [
    { label: "Updates", href: `/${username}` },
    { label: "Favorites", href: `/${username}/favorites` },
  ] as const;

type LinkType = (typeof home)[number] | ReturnType<typeof profile>[number];

interface MenuProps {
  type: "home" | { username: string };
  selected?: LinkType["label"];
}

interface MenuItemProps {
  link: LinkType;
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

// TODO: unread counter
export function Menu({ type, selected }: MenuProps) {
  const links = type === "home" ? home : profile(type.username);

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
