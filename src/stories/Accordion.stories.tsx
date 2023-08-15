import type { Meta, StoryObj } from "@storybook/react";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "../components";

const meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("item-1");

    return (
      <div className="relative flex h-full w-full p-6 rounded-xl shadow bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800 justify-center pt-24">
        <div className="max-w-sm w-full">
          <Accordion
            type="single"
            value={value}
            className="space-y-4 w-full"
            defaultValue="item-1"
            onValueChange={(val) => setValue(val)}
          >
            <AccordionItem value="item-1">
              <AccordionHeader>
                <AccordionTrigger>
                  <span className="text-small font-medium text-gray-900 dark:text-gray-100">
                    What is Radix UI?
                  </span>
                  <BiChevronDown className="ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400 group-radix-state-open:rotate-180 group-radix-state-open:duration-300" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <div className="text-small text-gray-700 dark:text-gray-400">
                  "Radix Primitives is a low-level UI component library with a
                  focus on accessibility, customization and developer
                  experience. You can use these components either as the base
                  layer of your design system, or adopt them incrementally.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader>
                <AccordionTrigger>
                  <span className="text-small font-medium text-gray-900 dark:text-gray-100">
                    Is it accessible?
                  </span>
                  <BiChevronDown className="ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400 group-radix-state-open:rotate-180 group-radix-state-open:duration-300" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <div className="text-small text-gray-700 dark:text-gray-400">
                  Yes!
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  },
};
