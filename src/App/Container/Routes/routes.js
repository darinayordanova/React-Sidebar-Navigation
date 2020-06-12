import { lazy } from "react";
const Home = lazy(() => import("../Components/Home"))
const Manage = lazy(() => import("../Components/Manage"))
const Develop = lazy(() => import("../Components/Develop"))
const Design = lazy(() => import("../Components/Design"))
const Project2 = lazy(() => import("../Components/Project2"))
const Project1 = lazy(() => import("../Components/Project1"))
const Milestones = lazy(() => import("../Components/Milestones"))
const Tasks = lazy(() => import("../Components/Tasks"))
const People = lazy(() => import("../Components/People"))
const PeoplePeople = lazy(() => import("../Components/PeoplePeople"))
const Companies = lazy(() => import("../Components/Companies"))
const Workload = lazy(() => import("../Components/Workload"))
const Chart = lazy(() => import("../Components/Chart"))
const Portfolio = lazy(() => import("../Components/Portfolio"))
const Categories = lazy(() => import("../Components/Categories"))
const Dashboards = lazy(() => import("../Components/Dashboards"))
const Activity = lazy(() => import("../Components/Activity"))
const MyProjects = lazy(() => import("../Components/MyProjects"))
const MyWork = lazy(() => import("../Components/MyWork"))
const Calendar = lazy(() => import("../Components/Calendar"))
const Planning = lazy(() => import("../Components/Planning"))
const Projects = lazy(() => import("../Components/Projects"))
const Profile = lazy(() => import("../Components/Profile"))
const Events = lazy(() => import("../Components/Events"))


export default [
    { path: "/", name: "Home", component: Home },
    { path: "/home", name: "Home", component: Home },
    { path: "/manage", name: "Manage", component: Manage },
    { path: "/develop", name: "Develop", component: Develop },
    { path: "/design", name: "Design", component: Design },
    { path: "/project_2", name: "Project2", component: Project2 },
    { path: "/project_1", name: "Project1", component: Project1 },
    { path: "/milestones", name: "Milestones", component: Milestones },
    { path: "/tasks", name: "Tasks", component: Tasks },
    { path: "/people", name: "People", component: People },
    { path: "/companies", name: "Companies", component: Companies },
    { path: "/workload", name: "Workload", component: Workload },
    { path: "/portfolio", name: "Portfolio", component: Portfolio },
    { path: "/chart", name: "Chart", component: Chart },
    { path: "/categories", name: "Categories", component: Categories },
    { path: "/events", name: "Events", component: Events },
    { path: "/dashboards", name: "Dashboards", component: Dashboards },
    { path: "/activity", name: "Activity", component: Activity },
    { path: "/projects-status", name: "MyProjects", component: MyProjects },
    { path: "/work", name: "MyWork", component: MyWork },
    { path: "/calendar", name: "Calendar", component: Calendar },
    { path: "/planning", name: "Planning", component: Planning },
    { path: "/projects", name: "Projects", component: Projects },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/people/people", name: "PeoplePeople", component: PeoplePeople },
]