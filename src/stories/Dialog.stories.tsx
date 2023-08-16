import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components";

import { CgClose } from "react-icons/cg";

const meta = {
  title: "Example/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    return (
      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogTrigger asChild>
          <Button>Click</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-20 bg-gray-50 opacity-50" />
          <DialogContent className="fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white dark:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <DialogTitle className="text-small font-medium text-gray-900 dark:text-gray-100">
              Title çocuğu
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
            <form className="mt-2 space-y-2">
              <fieldset>
                {/* <legend>Choose your favorite monster</legend> */}
                <label
                  htmlFor="firstName"
                  className="text-xs font-medium text-gray-700 dark:text-gray-400"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Tim"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-mdtext-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                />
              </fieldset>
              <fieldset>
                <label
                  htmlFor="familyName"
                  className="text-xs font-medium text-gray-700 dark:text-gray-400"
                >
                  Family Name
                </label>
                <input
                  id="familyName"
                  type="text"
                  placeholder="Cook"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-mdtext-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                />
              </fieldset>
            </form>
            <div className="mt-4 flex justify-end">
              <DialogClose
                className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium
                    bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600 border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                Save
              </DialogClose>
            </div>

            <DialogClose className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <CgClose className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  },
};
