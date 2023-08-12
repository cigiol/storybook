import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components";
import { useEffect, useState } from "react";
import {IToggleProps, SwitchProps} from "../components/Switch.tsx";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (args: SwitchProps) => {

    return (
      <Switch isSelected={args.isSelected}/>
    );
  },
  args: {
    isSelected: false
  },
};
