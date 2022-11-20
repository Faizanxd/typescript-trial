import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import Browse from "./pages/browse";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<h1 className="font-bold underline">default</h1>}
        />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/main" element={<Layout />}>
          <Route index element={<Browse />} />
          <Route index element={<h1>hourly</h1>} />
          <Route index element={<h1>daily</h1>} />
          <Route index element={<h1>monthly</h1>} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default function App() {
  return <AppRouter />;
}
