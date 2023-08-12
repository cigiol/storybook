import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components";

const meta = {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    item: {
      label: "Home Page",
      route: "/",
      children: { label: "Category", route: "/" },
    },
    seperator: "/",
    labelElementWrapperClassName: "",
    seperatorClassName: "",
    wrapperClassName: "",
  },
};
