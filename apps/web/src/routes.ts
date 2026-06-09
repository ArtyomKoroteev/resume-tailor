import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./App.tsx"),
  layout("./layouts/main-layout.tsx", [
    route("editor", "./pages/Editor.tsx"),
  ]),
] satisfies RouteConfig;
