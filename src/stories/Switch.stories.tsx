import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components";
import { SwitchProps } from "../components/Switch";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (args: SwitchProps) => {
    const [{ checked }, updateArgs] = useArgs();
    console.log("upside", checked);
    return (
      <Switch
        {...args}
        onCheckedChange={() => updateArgs({ checked: !checked })}
      />
    );
  },
  args: {
    checked: false,
    textAlive: true,
    variant: "default",
    rounded: "full",
    IVariant: "default",
    IRounded: "full",
  },
};
