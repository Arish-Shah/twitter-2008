interface FollowProps {
  username: string;
}

export function Follow({ username }: FollowProps) {
  return (
    <button className="mt-[5px] w-[74px] border border-black bg-subtext py-[3px] text-[14.4px] font-bold text-white">
      Follow
    </button>
  );
}
