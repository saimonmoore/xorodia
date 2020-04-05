import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const ChoirPage = lazy(() => import("./ChoirPage"));
const DirectorPage = lazy(() => import("./DirectorPage"));

export { Home, About, ChoirPage, DirectorPage };
