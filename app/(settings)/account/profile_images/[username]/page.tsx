import { Main } from "@/components/ui/content";
import { Switch } from "@/components/ui/switch";
import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { getProfile } from "@/lib/actions/profile/get-profile";
import { getTheme } from "@/lib/actions/profile/get-theme";
import { getThemeCSS } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProfileImagesProps {
  params: { username: string };
}

export default async function ProfileImages({
  params: { username },
}: ProfileImagesProps) {
  const css = await getThemeCSS(await getTheme(username));
  const profile = await getProfile(username);
  const loggedInUsername = await getLoggedInUsername();

  return (
    <Main className="pb-[20px]">
      <style>{css}</style>
      <Link href={`/${profile.username}`}>
        <Main.H2>{profile.name}</Main.H2>
      </Link>
      <Image
        src={profile.picture}
        alt={`${profile.name} picture`}
        className="mb-[5px] h-auto w-auto"
        width={480}
        height={480}
      />
      <Switch condition={username === loggedInUsername}>
        <Link href="/account/picture">
          <small>Change this?</small>
        </Link>
      </Switch>
    </Main>
  );
}
