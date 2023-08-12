import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../components";
import { SwitchProps} from "../components/Switch";
import {useArgs} from "@storybook/preview-api";


const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: '^on.*' }
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (args: SwitchProps) => {
    const [{isSelected}, updateArgs] = useArgs();
    return <Switch {...args} isSelected={isSelected} onChange={() => updateArgs({isSelected: !isSelected})}/>
  },
  args: {
    isSelected: false,
  },
};
