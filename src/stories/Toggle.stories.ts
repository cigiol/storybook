// Button.stories.ts|tsx

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

const ToggleWithHooks = () => {
  // Sets the hooks for both the label and primary props

  const [value, setValue] = useState(false);
  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    setValue(!value);
  };
  return (
    <Toggle
      onClick={handleOnChange}
      value={value}
      checkedLabel="AHAHAH"
      notCheckedLabel="BEBEBE"
    />
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => <ToggleWithHooks />,
};
