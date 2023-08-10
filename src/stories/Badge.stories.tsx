import type { Meta, StoryObj } from "@storybook/react";
import { FaBeer } from 'react-icons/fa';


import Badge from "./Badge";
import {FaAngellist} from "react-icons/fa6";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: "This is a Badge Text",
    className: "bg-yellow border-yellow p-2"
  },
  argTypes: {
    leftIcon: {
      options: ["FaBeer", "FaAngellist"],
      mapping: {
        FaBeer: <FaBeer />,
        FaAngellist: <FaAngellist />
      }
    },
    rightIcon: {
      options: ["FaBeer", "FaAngellist"],
      mapping: {
        FaBeer: <FaBeer />,
        FaAngellist: <FaAngellist />
      },
    }
  }
}
