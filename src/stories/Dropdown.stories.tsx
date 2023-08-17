import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";
import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "../components/Dropdown/Dropdown.tsx";

import DropdownMenuLabel from "../components/Dropdown/DropdownMenuLabel.tsx";
import DropdownMenuSeparator from "../components/Dropdown/DropdownMenuSeparator.tsx";

import { FaCrop, FaFile, FaLink } from "react-icons/fa6";
import DropdownMenuSubTrigger from "../components/Dropdown/DropdownMenuSubTrigger.tsx";
import { FaCogs } from "react-icons/fa";
import DropdownMenuSubContent from "../components/Dropdown/DropdownMenuSubContent.tsx";
import { DropdownMenuContent } from "../components/Dropdown/DropdownMenuContent.tsx";
import { DropdownMenuItem } from "../components/Dropdown/DropdownMenuItem.tsx";

const meta = {
  title: "Example/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="sm">
            Open
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="DropdownMenuItem w-30">
            <FaFile />
            <span className="ml-3 flex-grow text-gray-700 dark:text-gray-300">
              New Item
            </span>
            <span className="text-sm">⌘+F</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem w-30">
            <FaCogs />
            <span className="ml-3 flex-grow text-gray-700 dark:text-gray-300">
              Settings
            </span>
            <span className="text-sm">⌘+,</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuLabel className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
            Region Tools
          </DropdownMenuLabel>
          <DropdownMenuItem className="DropdownMenuItem w-30">
            <FaCrop />
            <span className="ml-3 flex-grow text-gray-700 dark:text-gray-300">
              Crop
            </span>
            <span className="text-sm">⌘+S</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900">
              <FaLink className="mr-2 h-3.5 w-3.5" />
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                Share
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="origin-radix-dropdown-menu radix-side-right:animate-scale-in w-full rounded-md px-1 py-1 text-xs shadow-md bg-white dark:bg-gray-800">
              <DropdownMenuItem className="flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none md:w-32 text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900">
                <img
                  className="mr-2.5 h-6 w-6 rounded-full"
                  src="https://github.com/waliair.png"
                />
                <span className="text-gray-700 dark:text-gray-300 text-small">
                  E.Aydınlık
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none md:w-32 text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900">
                <img
                  className="mr-2.5 h-6 w-6 rounded-full"
                  src="https://github.com/cigiol.png"
                />
                <span className="text-gray-700 dark:text-gray-300 text-small">
                  C.Gürtürk
                </span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
