import { Page } from "@/components/page";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Page> = {
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Index: Story = {
  args: {
    large: true,
  },
};

export const LoggedIn: Story = {
  args: {
    user: {
      handle: "default",
    },
  },
};

export const LoggedOut: Story = {};
