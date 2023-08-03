"use client";

import Image from "next/image";
import Modal from "./component/Modal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex p-3 justify-end ">
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Select Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
