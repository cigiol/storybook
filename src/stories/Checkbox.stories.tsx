import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../components";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <div className="flex inline-flex justify-center items-center">
        <Checkbox
          id="checkbox-1"
          {...args}
          onCheckedChange={() => updateArgs({ checked: !checked })}
        />
        <label htmlFor="checkbox-1" className="ml-3">
          I accept.
        </label>
      </div>
    );
  },
  args: {
    checked: false,
  },
};
