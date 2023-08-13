import "./App.css";
import { Badge, Breadcrumbs, Button, Card, Switch } from "./components";

interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

function App() {
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
      <Switch>Toggle</Switch>
      <Card className="flex-row">HELLO CARD</Card>
    </>
  );
}

export default App;
