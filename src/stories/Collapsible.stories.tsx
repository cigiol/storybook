import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { BiPlay, BiShare } from "react-icons/bi";

const meta = {
  title: "Example/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-small font-medium bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <div>My Playlists</div>
          <GoTriangleDown className="transform duration-300 ease-in-out group-radix-state-open:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 flex flex-col space-y-4">
          {["80s Synthwave", "Maximale Konzentration", "NF - Trust"].map(
            (title, i) => (
              <div
                key={`collapsible-${title}-${i}`}
                className="group ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900"
              >
                {title}
                <div className="hidden items-center space-x-3 group-hover:flex">
                  <BiShare className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                  <BiPlay className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                </div>
              </div>
            )
          )}
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
