import { Header } from "@/components/header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      handle: "user",
    },
  },
};

export const LoggedOut: Story = {};
