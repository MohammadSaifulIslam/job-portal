import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AllJobsPageHome from "../pages/AllJobsPage/AllJobsPageHome";
import AppliedJobPageHome from "../pages/AppliedJobPage/AppliedJobPageHome";
import BlogPageHome from "../pages/BlogPage/BlogPageHome";
import ContactPageHome from "../pages/ContactPage/ContactPageHome";
import Home from "../pages/HomaPage/Home/Home";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
import Login from "../pages/Others/Login/Login";
import PostJobPageHome from "../pages/PostJobPage/PostJobPageHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'allJobs',
            element: <AllJobsPageHome></AllJobsPageHome>,
            loader: () => fetch('http://localhost:5000/totalJobs')
        },
        {
            path:'blog',
            element: <BlogPageHome></BlogPageHome>,
        },
        {
            path:'postJob',
            element: <PostJobPageHome></PostJobPageHome>
        },
        {
            path:'appliedJob',
            element: <AppliedJobPageHome/>
        },
        {
            path:'contact',
            element: <ContactPageHome></ContactPageHome>
        },
        {
            path:'jobDetails/:id',
            element: <JobDetailsPage/>,
            loader: ({params})=> fetch(`http://localhost:5000/job_details/${params.id}`)
        },
        {
            path:'signIn',
            element: <Login></Login>
        },
      ]
    },
  ]);

export default router;