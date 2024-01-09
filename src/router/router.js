import About from "@/views/About";
import Blog from "@/views/Blog";
import Home from "@/views/Home";
import Message from "@/views/Message";
import Project from "@/views/Project";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/About",
    component: About,
  },
  {
    name: "Blog",
    path: "/Blog",
    component: Blog,
  },
  {
    name: "BlogCategory",
    path: "/Blog/category/:id",
    component: Blog,
  },
  {
    name: "Message",
    path: "/Message",
    component: Message,
  },
  {
    name: "Project",
    path: "/Project",
    component: Project,
  },
];

export default routes;
