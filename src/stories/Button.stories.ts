// Button.stories.ts|tsx

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

<Button />;

export const Primary: Story = {
  render: () => <ButtonWithHooks />,
};
