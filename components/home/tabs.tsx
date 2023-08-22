import clsx from "clsx";
import Link from "next/link";

const settingsLinks = [
  { label: "Account", href: "/account/settings" },
  { label: "Password", href: "/account/password" },
  { label: "Devices", href: "/devices" },
  { label: "Notices", href: "/account/notifications" },
  { label: "Picture", href: "/account/picture" },
  { label: "Design", href: "/account/profile_settings" },
] as const;

const invitationsLinks = [
  { label: "Invite from other networks", href: "/invitations" },
  { label: "Invite by email", href: "/invitations/invite_by_email" },
  { label: "Search", href: "/invitations/search" },
] as const;

const directMessagesLinks = [
  { label: "Inbox", href: "/direct_messages" },
  { label: "Sent", href: "/direct_messages/sent" },
] as const;

type TabsProps =
  | { type: "settings"; selected: (typeof settingsLinks)[number]["label"] }
  | {
      type: "invitations";
      selected: (typeof invitationsLinks)[number]["label"];
    }
  | {
      type: "direct_messages";
      selected: (typeof directMessagesLinks)[number]["label"];
    };

export function Tabs({ type, selected }: TabsProps) {
  let links;
  if (type === "settings") links = settingsLinks;
  else if (type === "invitations") links = invitationsLinks;
  else links = directMessagesLinks;

  return (
    <div className="mt-[20px] px-[10px]">
      <ul className="flex">
        <li className="flex-1 border-b border-b-gray-border"></li>
        {links.map((link, i) => (
          <li
            key={i}
            className={clsx("ml-[-1px] border border-gray-border", {
              "border-b-white": selected === link.label,
            })}
          >
            <Link
              href={link.href}
              className={clsx("p-[2px_12px] text-text hover:no-underline", {
                "bg-gray hover:bg-gray-hover": selected !== link.label,
                "bg-white": selected === link.label,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="flex-1 border-b border-b-gray-border"></li>
      </ul>
    </div>
  );
}
