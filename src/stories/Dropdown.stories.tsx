import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "../components/Dropdown/Dropdown.tsx";
import DropdownMenuContent from "../components/Dropdown/DropdownMenuContent.tsx";
import DropdownMenuLabel from "../components/Dropdown/DropdownMenuLabel.tsx";
import DropdownMenuSeparator from "../components/Dropdown/DropdownMenuSeparator.tsx";
import DropdownMenuItem from "../components/Dropdown/DropdownMenuItem.tsx";
import { FaUser, FaUsers } from "react-icons/fa6";
import DropdownMenuShortcut from "../components/Dropdown/DropdownMenuShortcut.tsx";
import { AiFillCreditCard } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { BiSolidKeyboard, BiSolidUserPlus } from "react-icons/bi";
import DropdownMenuSubTrigger from "../components/Dropdown/DropdownMenuSubTrigger.tsx";

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
          <Button variant="primary">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FaUser className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AiFillCreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CiSettings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BiSolidKeyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FaUsers className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <BiSolidUserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
