import type { Meta, StoryObj } from "@storybook/react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components";

import { Users } from "lucide-react";
import "../../src/assets/styles/globals.css";

const meta = {
  title: "Example/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: { iframeHeight: 400 },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2.5 dark:bg-black/30">
            <Users className="mr-2 h-4 w-4" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="center"
          sideOffset={4}
          className="radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down max-w-md rounded-lg p-4 md:w-full bg-white dark:bg-black/30 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <div className="flex h-full w-full space-x-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-inner bg-gray-50/60 p-2.5 dark:bg-black/30">
              <Users className="mr-2 h-4 w-4" />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Tailwind CSS
              </h3>

              <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
                A utility-first CSS framework for rapidly building custom user
                interfaces.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
};
