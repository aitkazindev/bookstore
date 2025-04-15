import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

import { useState } from "react";
import BookModal from "./BookModal";
import { BiShow } from "react-icons/bi";
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 text-white rounded-lg text-sm">
        {" "}
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500 text-sm truncate">{book._id}</h4>{" "}
      <div className="flex justify-start books-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1 font-semibold">{book.title}</h2>{" "}
      </div>
      <div className="flex justify-start books-center gap-x-2 ">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1 text-gray-700">{book.author}</h2>{" "}
      </div>
      <div
        onClick={() => setShowModal(true)}
        className="flex justify-center books-center gap-x-4 mt-4 p-2"
      >
        {" "}
        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer"></BiShow>
        <Link
          to={`/books/details/${book._id}`}
          aria-label={`View details for ${book.title}`}
        >
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`} aria-label={`Edit ${book.title}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          aria-label={`Delete ${book.title}`}
        >
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
