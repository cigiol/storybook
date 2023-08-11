import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: "default",
    size: "xs",
    rounded: "default",
    text: "This is a Badge Text",
  },
};
