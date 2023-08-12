import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "../components";
import { useEffect, useState } from "react";
import { IToggleProps } from "../components/Toggle";

const meta = {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: (args: IToggleProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
      args.value = checked;
    }, [checked]);

    return (
      <Toggle
        {...args}
        value={args.value}
        onClick={() => setChecked(!checked)}
      />
    );
  },
  args: {
    checkedLabel: "Toggle",
    notCheckedLabel: "Not Toggle",
    value: false,
  },
};
