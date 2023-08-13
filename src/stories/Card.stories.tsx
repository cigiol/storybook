import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "../components";
import { ICardProps } from "../components/Card/Card";

import img from "../stories/assets/addon-library.png";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args: ICardProps) => {
    return (
      <Card {...args}>
        <CardHeader>This is Header</CardHeader>
        <CardContent className="flex flex-col">
          <img className="w-full" src={img} />
        </CardContent>
        <CardFooter>This is Footer</CardFooter>
      </Card>
    );
  },
  args: {
    className: "w-40vw",
  },
};
