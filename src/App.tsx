import "./App.css";
<<<<<<< HEAD
import {Badge} from "./components/Badge.tsx";
function App() {
=======
import { Badge, Breadcrumbs } from "./components";

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

>>>>>>> develop
  return (
    <>
      <Badge text="This is a text brother" />
      <Breadcrumbs item={item} seperator=">" />
    </>
  );
}

export default App;
