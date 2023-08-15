import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Avatar className="relative inline-flex h-10 w-10">
          <AvatarImage
            src="https://images.unsplash.com/photo-1573607217032-18299406d100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            className="h-full w-full object-cover rounded-full"
          />
          {/* online status div */}
          <div className="absolute bottom-0 right-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2">
            <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <AvatarFallback
            className="flex h-full w-full items-center justify-center bg-white dark:bg-gray-800 rounded-full"
            delayMs={600}
          >
            <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
              {Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substring(0, 2)
                .toUpperCase()}
            </span>
          </AvatarFallback>
        </Avatar>
        <Avatar className="relative inline-flex h-10 w-10">
          <AvatarImage
            src="https://images.unsplash.com/photo-1594089426440-ab4513b4d0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="h-full w-full object-cover rounded-full"
          />
          <AvatarFallback
            className="flex h-full w-full items-center justify-center bg-white dark:bg-gray-800 rounded-full"
            delayMs={600}
          >
            <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
              {Math.random()
                .toString(36)
                .replace(/[^a-z]+/g, "")
                .substring(0, 2)
                .toUpperCase()}
            </span>
          </AvatarFallback>
        </Avatar>
      </>
    );
  },
};
