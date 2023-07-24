import { Page } from "@/components/page";
import { TwoColumn } from "@/components/two-column";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: TwoColumn,
  render: () => (
    <Page>
      <TwoColumn>
        <TwoColumn.Main>
          <TwoColumn.Main.H1>heading 1</TwoColumn.Main.H1>
          <TwoColumn.Main.H2>heading 2</TwoColumn.Main.H2>
          <TwoColumn.Main.H3>heading 3</TwoColumn.Main.H3>
          <TwoColumn.Main.H4>heading 4</TwoColumn.Main.H4>
          <TwoColumn.Main.P>paragraph</TwoColumn.Main.P>
          <TwoColumn.Main.OrderedList>
            <li>ordered list</li>
          </TwoColumn.Main.OrderedList>
        </TwoColumn.Main>
        <TwoColumn.Sidebar>
          <TwoColumn.Sidebar.Section>
            <TwoColumn.Sidebar.H1>heading 1</TwoColumn.Sidebar.H1>
            <TwoColumn.Sidebar.H1Underline>
              heading 1 with underline
            </TwoColumn.Sidebar.H1Underline>
            <TwoColumn.Sidebar.OrderedList>
              <li>ordered list</li>
            </TwoColumn.Sidebar.OrderedList>
          </TwoColumn.Sidebar.Section>
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Page>
  ),
} satisfies Meta<typeof TwoColumn>;

export default meta;
type Story = StoryObj<typeof TwoColumn>;

export const WithHeadings: Story = {};
