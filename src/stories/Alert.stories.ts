import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../components";

const meta = {
  title: "Example/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
    size: "md",
    rounded: "default",
    message: "Hello this is a default alert.",
    duration: 0,
  },
};
