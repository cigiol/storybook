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
  DropdownMenuShortcut,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Switch,
} from "./components";
import { Input } from "@/src/components/Input.tsx";
import { Label } from "@/src/components/Label.tsx";

import { useState } from "react";
import { ModeToggle } from "@/src/utils/mode-toggle-theme.tsx";
import {
  ChevronDown,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { CgClose } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
} from "@/src/components/Dropdown/Dropdown.tsx";
import { DropdownMenuContent } from "@/src/components/Dropdown/DropdownMenuContent.tsx";
import { DropdownMenuItem } from "@/src/components/Dropdown/DropdownMenuItem.tsx";
import DropdownMenuSeparator from "./components/Dropdown/DropdownMenuSeparator.tsx";
import DropdownMenuLabel from "./components/Dropdown/DropdownMenuLabel.tsx";
import DropdownMenuSubTrigger from "./components/Dropdown/DropdownMenuSubTrigger.tsx";
import DropdownMenuSubContent from "./components/Dropdown/DropdownMenuSubContent.tsx";

interface item {
  label: string | React.ReactNode;
  route: string;
  children?: item | undefined;
}

function App() {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [accordionValue, setAccordionValue] = useState("item-1");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

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
          <div className="relative flex h-full w-full p-6 border-2 rounded-xl shadow bg-card text-card-foreground justify-center pt-24">
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
          <div className="relative flex h-full w-full p-6 rounded-xl shadow border-2 bg-card text-card-foreground justify-center pt-24">
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
          <div className="relative flex h-full w-full p-6 rounded-xl shadow border-2 bg-card text-card-foreground justify-center pt-24">
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
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl border-2 shadow bg-card text-card-foreground justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#checkbox"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Checkbox
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl border-2 shadow bg-card text-card-foreground justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
                <DialogTrigger asChild>
                  <Button>Edit me</Button>
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay />
                  <DialogContent>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                    <form className="mt-2 space-y-2">
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          {/* <legend>Choose your favorite monster</legend> */}
                          <Label htmlFor="username">username</Label>

                          <Input
                            id="username"
                            value="@waliair"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="familyName">Family Name</Label>
                          <Input
                            id="familyName"
                            value="@eaydinlik"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mt-4 flex justify-end">
                      <Button>Save changes</Button>
                    </div>

                    <DialogClose>
                      <CgClose className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
                    </DialogClose>
                  </DialogContent>
                </DialogPortal>
              </Dialog>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#dialog"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Dialog
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl border-2 shadow bg-card text-card-foreground justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Open My Account</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#dropdown"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  Dropdown
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[550px] w-full scroll-mt-6 ">
          <div className="relative flex h-full w-full p-6 rounded-xl border-2 shadow bg-card text-card-foreground justify-center pt-24">
            <div className="max-w-sm w-full flex items-center space-x-2 justify-center">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-2.5 dark:bg-black/30">
                    <Users className="mr-2 h-4 w-4" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  align="center"
                  sideOffset={4}
                  className="radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down max-w-md rounded-lg p-4 md:w-full bg-white dark:bg-black/30 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  <div className="flex h-full w-full space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-inner bg-gray-50/60 p-2.5 dark:bg-black/30">
                      <Users className="mr-2 h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Tailwind CSS
                      </h3>

                      <p className="mt-1 text-sm font-normal text-gray-700 dark:text-gray-400">
                        A utility-first CSS framework for rapidly building
                        custom user interfaces.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="absolute inset-x-0 top-0 rounded-t-xl flex items-center justify-between bg-black/50 px-4 py-2.5 dark:bg-black/30">
              <div className="flex items-center space-x-2">
                <a
                  href="#hovercard"
                  className="dark:text-gray-300 select-none text-sm font-medium text-white"
                >
                  HoverCard
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
