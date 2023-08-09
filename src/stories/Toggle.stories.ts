import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Toggle } from "./Toggle";

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
type Story = StoryObj<typeof meta>;

const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState("Secondary");
  const [isPrimary, setIsPrimary] = useState(false);
  const [value, setValue] = useState(false);
  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue("Primary");
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    checkedLabel: "Button",
    onClick: () => setValue(!value),
    value,
  },
};

export const Secondary: Story = {
  args: {
    checkedLabel: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    checkedLabel: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checkedLabel: "Button",
  },
};
