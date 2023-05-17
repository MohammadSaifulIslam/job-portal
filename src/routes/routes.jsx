import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AllJobsPageHome from "../pages/AllJobsPage/AllJobsPageHome";
import AppliedJobPageHome from "../pages/AppliedJobPage/AppliedJobPageHome";
import Home from "../pages/HomaPage/Home/Home";
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage";
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
            element: <AllJobsPageHome></AllJobsPageHome>
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
            path:'jobDetails/:id',
            element: <JobDetailsPage/>,
            loader: ({params})=> fetch(`http://localhost:5000/job_details/${params.id}`)
        },
      ]
    },
  ]);

export default router;