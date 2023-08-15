import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "../components";

const meta = {
  title: "Example/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    let [isOpen, setIsOpen] = useState(false);

    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button>Click</Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogOverlay className="fixed inset-0 z-20 bg-gray-50 opacity-50" />
          <AlertDialogContent
            forceMount
            className="fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white dark:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <AlertDialogTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
            <div className="mt-4 flex justify-end space-x-2">
              <AlertDialogCancel className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600 border border-gray-300 dark:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600 border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Confirm
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    );
  },
};
