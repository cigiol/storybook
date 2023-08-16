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
