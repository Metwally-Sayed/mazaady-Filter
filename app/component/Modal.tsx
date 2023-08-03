"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SelectInputFeild from "./SelectInputFeild";
import axios from "../axios";
import { Categories, Children, SupCategory } from "../typs";
import SubInput from "./SubInput";
import ProcessTypeInput from "./ProcessTypeInput";

export default function Modal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [categoriesData, setCategoriesData] = useState<Categories[]>();
  const [selectionData, setSelectionData] = useState<Categories>({
    name: "",
    children: [],
    description: "",
  });
  const [supCategoryData, setSubCategoryData] = useState<SupCategory[]>();
  const [processTypeData, setProcessTypeData] = useState<Children>();

  const SelectionHandler = (selectionData: Categories) => {
    setSelectionData(selectionData);
    console.log(selectionData);
  };

  const supCategoryHandler = (selectionData: SupCategory[]) => {
    setSubCategoryData(selectionData);
    console.log(selectionData, "supCategoryData");
  };

  const processTypeHandler = (selectionData: Children) => {
    setProcessTypeData(selectionData);
    console.log(selectionData);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("/get_all_cats");
        setCategoriesData(response.data.data.categories);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <Transition.Root show={open} as={Fragment as any}>
      <Dialog
        as="div"
        className="relative z-10 min-h-[150px]"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment as any}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment as any}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative min-h-[750px] transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <SelectInputFeild
                      categoryTitle={"Main Category"}
                      maininputData={categoriesData}
                      SelectionHandler={SelectionHandler}
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <SubInput
                      supCategoryHandler={supCategoryHandler}
                      selectionData={selectionData}
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <ProcessTypeInput
                      processTypeHandler={processTypeHandler}
                      supCategoryData={supCategoryData}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
