import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Breadcrumbs,
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
import { Button } from "@/src/components/Button.tsx";
import { ModeToggle } from "@/src/utils/mode-toggle-theme.tsx";
import { ChevronDown } from "lucide-react";

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
      <header className="absolute top-0 right-10">
        <ModeToggle />
      </header>
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 py-8 md:gap-6 md:px-6 lg:grid-cols-2">
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl shadow bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800 justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <Button variant="primary">Hiii</Button>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#button"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Button
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl shadow bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800 justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <Accordion
                type="single"
                collapsible
                value={accordionValue}
                defaultValue="item-1"
                onValueChange={setAccordionValue}
                className="w-full space-y-2"
              >
                <AccordionItem value="item-1">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Is it accessible?
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Is it styled?
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Is it animated?
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#accordion"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Accordion
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl shadow bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 dark:from-pink-800 dark:via-fuchsia-900 dark:to-purple-800 justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <Switch
                id="switch-1"
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
              <label
                htmlFor="switch-1"
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {switchChecked ? "Toggle On" : "Toggle Off"}
              </label>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#switch"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Switch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
