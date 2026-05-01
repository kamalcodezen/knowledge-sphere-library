import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home/HomePage.jsx";
import Books from "./components/Books/Books";
import BookDetails from "./components/BookDetails/BookDetails";
import Categories from "./components/Categories/Categories";
import Donors from "./components/Donors/Donors";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://bhairabdeenipathagar.onrender.com/api/books"),
        element: <HomePage />,
      },
      { path: "books", element: <Books /> },
      { path: "bookDetails", element: <BookDetails /> },
      { path: "categories", element: <Categories /> },
      { path: "donors", element: <Donors /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <Faq /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
