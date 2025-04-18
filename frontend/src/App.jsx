import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      <Route path="/books/update/:id" element={<UpdateBook />}></Route>
    </Routes>
  );
}
