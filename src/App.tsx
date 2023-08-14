import "./App.css";
import {
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Switch,
} from "./components";
import { useState } from "react";
interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

function App() {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

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
    </>
  );
}

export default App;
