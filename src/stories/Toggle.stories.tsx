import type { Meta, StoryObj } from "@storybook/react";

import Toggle, {IToggleProps} from "../components/Toggle.tsx";
import {useEffect, useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args: IToggleProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
      args.value = checked;
    }, [checked])

    return <Toggle {...args} value={args.value} onClick={() => setChecked(!checked)} />
  },
  args: {
    checkedLabel: "Toggle",
    notCheckedLabel: "Not Toggle",
    value: false,
  }
};
