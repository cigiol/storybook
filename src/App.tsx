import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Switch,
} from "./components";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

function App() {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [accordionValue, setAccordionValue] = useState("item-1");
  let [dialogIsOpen, setDialogIsOpen] = useState(false);

  const item: item = {
    label: "homepage",
    route: "/",
    children: {
      label: "category",
      route: "/",
      children: {
        label: "product",
        route: "/",
      },
    },
  };
  return (
    <>
      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogTrigger asChild>
          <Button>Click</Button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-20 bg-gray-50 opacity-50" />
          <DialogContent className="fixed z-30 max-w-md rounded-lg p-4 md:w-fulltop-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white dark:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <DialogTitle className="text-small font-medium text-gray-900 dark:text-gray-100">
              Title çocuğu
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
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
      <Badge text="This is a text brother" />
      <Breadcrumbs item={item} seperator=">" />
      <Button variant={"secondary"}>Complete</Button>
      <Switch textAlive={true}>Toggle</Switch>
      <br />
      <Switch
        checked={switchChecked}
        onCheckedChange={() => setSwitchChecked(!switchChecked)}
      />
      <br />
      <div className="flex inline-flex justify-center items-center">
        <Checkbox
          id="checkbox-1"
          checked={checkboxChecked}
          onCheckedChange={() => setCheckboxChecked(!checkboxChecked)}
        />
        <label htmlFor="checkbox-1" className="ml-3">
          I accept.
        </label>
      </div>
      <Card className="flex-row">HELLO CARD</Card>
      <div className="relative flex h-full w-full p-6 rounded-xl shadow bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800 justify-center pt-24">
        <div className="max-w-sm w-full">
          <Accordion
            type="single"
            value={accordionValue}
            className="space-y-4 w-full"
            defaultValue="item-1"
            onValueChange={(val) => setAccordionValue(val)}
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
    </>
  );
}

export default App;
