import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  // Suspense API
  return (
    <div>
      <BrowserRouter>
        <AppBar />

        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="nav-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>

      <button
        className="nav-button"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;


// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

// import React from "react";

// function App() {
//   // const Dashboard = React.lazy(()=> import('./components/Dashboard.jsx') )
//   return (
//     <div>
//       {/* <button
//           onClick={() => {
//             window.location.href = "/dashboard";

//             // it is bad way to do routing, here we again reloading the page to get the result, just like (http://localhost:5173/ and http://localhost:5173/dashboard) and it again refresh the whole page.

//             // instead of using this we use the (useNavigate hook) that is exported from the react-router library.

//             // it make sure that it don't do the hard relaod of the page, it simply changing the route keeping the same client bundle and changing the page because the route has been chaged.

//             //note >  when we use (useNavigate hooks) we always use inside a components which is inside the browserRouter. this is only invoke in a component that is inside the browserRouter.

//           }}
//           style={{
//             color: "black",
//             fontSize: "1.3rem",
//             backgroundColor: "white",
//             margin: "3px",
//           }}
//         >
//           Dashboard
//         </button> */}

//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function AppBar() {

//   const navigate = useNavigate();

//   return (
//     <div>
//       <button
//         style={{
//           color: "black",
//           fontSize: "1.3rem",
//           backgroundColor: "white",
//         }}
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Landing Page
//       </button>

//       <button
//         style={{
//           color: "black",
//           fontSize: "1.3rem",
//           backgroundColor: "white",
//         }}
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard Page
//       </button>
//     </div>
//   );
// }

// export default App;
