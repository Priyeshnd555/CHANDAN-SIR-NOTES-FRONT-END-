import { lazy } from "react";

const routerConfig = [
  {
    title: "Home",
    path: "/home",
    icon: "home",
    component: lazy(() => import("./pages/home")),
  },
  {
    title: "Add Student",
    path: "/add-student",
    icon: "dashboard",
    component: lazy(() => import("./pages/add-student")),
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: "dashboard",
    component: lazy(() => import("./pages/accounts")),
  }
]

export { routerConfig };
