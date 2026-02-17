import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import ManageBlogs from "./admin/ManageBlogs";
import CreateBlog from "./admin/CreateBlog";
import EditBlog from "./admin/EditBlog";

import ManageJobs from "./admin/ManageJobs";
import CreateJob from "./admin/CreateJob";
import EditJob from "./admin/EditJob";
import AdminApplications from "./admin/AdminApplications";


import ManageServices from "./admin/ManageServices";
import ServiceForm from "./admin/ServiceForm";
// import EditJob from "./admin/EditJob";

import ChatWidget from "./components/ChatWidget";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar/>

         <main style={{ padding: "30px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetails />} />


          <Route path="/admin/login" element={<AdminLogin />} />
          
           <Route path="/services" element={<Services/>} /> 
<Route path="/admin/services"
       element={<ManageServices/>}/>

<Route path="/admin/add-service"
       element={<ServiceForm/>}/>

<Route path="/admin/edit-service/:id"
       element={<ServiceForm/>}/>

          <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/blogs"
  element={
    <ProtectedRoute>
      <ManageBlogs />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/blogs/create"
  element={
    <ProtectedRoute>
      <CreateBlog />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/blogs/edit/:id"
  element={
    <ProtectedRoute>
      <EditBlog />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/jobs"
  element={
    <ProtectedRoute>
      <ManageJobs />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/jobs/create"
  element={
    <ProtectedRoute>
      <CreateJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/applications"
  element={<AdminApplications />}
/>

<Route
  path="/admin/jobs/edit/:id"
  element={
    <ProtectedRoute>
      <EditJob />
    </ProtectedRoute>
  }
/>
        </Routes>

      </main>

      <Footer/>
       <>
      {/* existing layout */}
      <ChatWidget />
    </>
    </div>
    
  );
}

export default App;
