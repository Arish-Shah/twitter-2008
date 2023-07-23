import { Page } from "@/components/page";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedIn: Story = {
  args: {
    user: {
      handle: "user",
    },
    theme: {
      backgroundImage: {
        url: "/images/themes/theme7.gif",
        tile: false,
      },
      designColors: {
        background: "#ebebeb",
        text: "#333",
        links: "#990000",
        sidebar: "#f3f3f3",
        sidebarBorder: "#dfdfdf",
      },
    },
    children: "page content",
  },
};

export const LoggedOut: Story = {
  args: {
    children: "page content",
  },
};
