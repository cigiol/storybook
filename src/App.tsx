import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Switch,
} from "./components";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

function App() {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [accordionValue, setAccordionValue] = useState("item-1");
  let [isOpen, setIsOpen] = useState(false);

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
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button className="bg-skin-button-accent data-[hovered]:bg-skin-button-accent-hover text-skin-inverted">
            Click
          </Button>
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
      <div className="relative flex h-full w-full p-6 rounded-xl shadow justify-center pt-24">
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
                  <span className="text-small font-medium text-skin-base">
                    What is Radix UI?
                  </span>
                  <BiChevronDown className="ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out text-skin-base group-radix-state-open:rotate-180 group-radix-state-open:duration-300" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <div className="text-small text-skin-base">
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
