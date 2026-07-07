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
import EmptyState from "./components/EmptyState/EmptyState";
import { booksLoader } from "./utils/booksLoader.js";
import UnderConstruction from "./components/Shared/UnderConstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: booksLoader,
        element: <HomePage />,
      },
      {
        path: "books",
        loader: booksLoader,
        element: <Books />,
      },
      { path: "bookDetails", element: <BookDetails /> },
      { path: "bookDetails/:id", element: <BookDetails /> },
      { path: "categories", element: <Categories /> },
      { path: "donors", element: <Donors /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <Faq /> },
      { path: "login", element: <UnderConstruction title="Login / Register" /> },
      { path: "dashboard", element: <UnderConstruction title="User Dashboard" /> },
      { path: "borrowed", element: <UnderConstruction title="Borrowed Books" /> },
      { path: "wishlist", element: <UnderConstruction title="Wishlist" /> },
      { path: "notifications", element: <UnderConstruction title="Notifications" /> },
      { path: "admin", element: <UnderConstruction title="Admin Panel" /> },
    ],
  },
  {
    path: "*",
    element: <EmptyState />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
