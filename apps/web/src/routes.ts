import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('./App.tsx'),
  layout('./layouts/auth-layout.tsx', [
    route('login', './pages/Login.tsx'),
    route('signup', './pages/Signup.tsx'),
  ]),
  layout('./layouts/main-layout.tsx', [
    route('editor', './pages/Editor.tsx'),
    route('resume-list', './pages/ResumeList.tsx'),
  ]),
] satisfies RouteConfig;
