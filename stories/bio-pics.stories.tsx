import { BioPics } from "@/components/bio-pics";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: BioPics,
} satisfies Meta<typeof BioPics>;

export default meta;
type Story = StoryObj<typeof BioPics>;

export const Default: Story = {
  args: {
    users: Array(30).fill({
      handle: "user",
      firstName: "User",
      url: "/images/profile/default_profile_mini.png",
    }),
  },
};
