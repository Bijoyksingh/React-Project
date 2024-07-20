import { createBrowserRouter } from "react-router-dom";
import Extra from "../pages/Extra";
import ErrorPage from "../ErrorPage.jsx";
// import SignIn from './pages/Signin.jsx'
import SignUp from "../pages/SignUp.jsx";
import Support from "../pages/Support.jsx"
import MainLayout from "./MainLayout.jsx";
//Ems Routes Imports
import EmsLayout from "../pages/Dashboard/EMS/EmsLayout.jsx";
import EmsHome from "../pages/Dashboard/EMS/EmsHome.jsx";
import EmsAnalysis from "../pages/Dashboard/EMS/EmsAnalysis.jsx";
import MandV from "../pages/Dashboard/EMS/MandV.jsx";
import EmsAlarms from "../pages/Dashboard/EMS/EmsAlarms.jsx";
import EmsReport from "../pages/Dashboard/EMS/EmsReport.jsx";
import EmsKpi from "../pages/Dashboard/EMS/EmsKpi.jsx";
import EmsGHG from "../pages/Dashboard/EMS/EmsGHG.jsx";
//Water Routes Imports
import WaterHome from "../pages/Dashboard/Water/WaterHome.jsx";
import WaterAnalysis from "../pages/Dashboard/Water/WaterAnalysis.jsx";
import WaterAlarms from "../pages/Dashboard/Water/WaterAlarms.jsx"
import WaterLayout from "../pages/Dashboard/Water/WaterLayout.jsx";
//DG Routes Imports
import DGLayout from "../pages/Dashboard/DG/DGLayout.jsx";
import DGHome from "../pages/Dashboard/DG/DGHome.jsx";
import DGAnalysis from "../pages/Dashboard/DG/DGAnalysis.jsx";
import DGAlarms from "../pages/Dashboard/DG/DGAlarms.jsx";
//UPS Routes Imports
import UPSHome from "../pages/Dashboard/UPS/UPSHome.jsx";
import UPSLayout from "../pages/Dashboard/UPS/UPSLayout.jsx";
import UPSAnalysis from "../pages/Dashboard/UPS/UPSAnalysis.jsx";
import UPSAlarms from "../pages/Dashboard/UPS/UPSAlarms.jsx";
//Temp Routes Imports
import TempLayout from "../pages/Dashboard/Temp/TempLayout.jsx";
import TempHome from "../pages/Dashboard/Temp/TempHome.jsx";
import TempAnalysis from "../pages/Dashboard/Temp/TempAnalysis.jsx";
import TempAlarms from "../pages/Dashboard/Temp/TempAlarms.jsx";
import TempHooter from "../pages/Dashboard/Temp/TempHooter.jsx";
import TempReport from "../pages/Dashboard/Temp/TempReport.jsx";
//HVAC Routes Imports
import HVACLayout from "../pages/Dashboard/HVAC/HVACLayout.jsx";
import HVACHome from "../pages/Dashboard/HVAC/HVACHome.jsx";
import HVACAnalysis from "../pages/Dashboard/HVAC/HVACAnalysis.jsx";
//Fire Routes Imports
import FireLayout from "../pages/Dashboard/Fire/FireLayout.jsx";
import FireHome from "../pages/Dashboard/Fire/FireHome.jsx";
//NBSAFE Routes Imports
import NBSafeLayout from "../pages/Dashboard/NBSafe/NBSafeLayout.jsx";
import NBSafeHome from "../pages/Dashboard/NBSafe/NBSafeHome.jsx";
//Transformer Routes Imports
import TransLayout from "../pages/Dashboard/Transformer/TransLayout.jsx";
import TransHome from "../pages/Dashboard/Transformer/TransHome.jsx";
import Home from "../pages/Home.jsx";







export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement:<ErrorPage/>
      },
      {
        path: "/ems",
        element: <EmsLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/ems",
            element: <EmsHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/analysis",
            element: <EmsAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/m&v",
            element: <MandV/>,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/alarms",
            element: <EmsAlarms/>,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/report",
            element: <EmsReport />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/kpi",
            element: <EmsKpi />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/ghg",
            element: <EmsGHG/>,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ems/support",
            element: <Support />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/water",
        element: <WaterLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/water",
            element: <WaterHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/water/analysis",
            element: <WaterAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/water/alarms",
            element: <WaterAlarms />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/water/support",
            element: <Support />,
            errorElement: <ErrorPage />,
          },

        ]
      },
      {
        path: "/dg",
        element: <DGLayout />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: "/dg",
            element: <DGHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/dg/analysis",
            element: <DGAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/dg/alarms",
            element: <DGAlarms />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/dg/support",
            element: <Support />,
            errorElement: <ErrorPage />,
          },

        ]
      },
      {
        path: "/ups",
        element: <UPSLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/ups",
            element: <UPSHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ups/analysis",
            element: <UPSAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ups/alarms",
            element: <UPSAlarms />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/ups/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/temp",
        element: <TempLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/temp",
            element: <TempHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/temp/analysis",
            element: <TempAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/temp/alarms",
            element: <TempAlarms />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/temp/hooter",
            element: <TempHooter />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/temp/report",
            element: <TempReport />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/temp/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/hvac",
        element: <HVACLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/hvac",
            element: <HVACHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/hvac/analysis",
            element: <HVACAnalysis />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/hvac/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/fire",
        element: <FireLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/fire",
            element: <FireHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/fire/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/nbsafe",
        element: <NBSafeLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/nbsafe",
            element: <NBSafeHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/nbsafe/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/trans",
        element: <TransLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/trans",
            element: <TransHome />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/trans/support",
            element: <Support/>,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/extra",
    element: <Extra />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    errorElement: <ErrorPage />,
  },
]);