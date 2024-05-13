import { Place } from "@/pages/PlacePage";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import Model from "./Model";
import { useState } from "react";

interface PlaceItemProps {
  obj: Place;
}

function PlaceItem({ obj }: PlaceItemProps) {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  function handleDelete() {
    console.log("Deleting...");
    setOpenDeleteModal(false);
  }

  return (
    <>
      {/* MODAL COMPONENT */}
      <Model
        openModel={openModal}
        setOpenModal={setOpenModal}
        header={obj.address}
        // location={obj.location}
        body={
          <img
            src="https://developers.google.com/static/maps/images/landing/hero_mobile_maps_sdks.png"
            className="w-[100%] h-[100%]"
          />
        }
        footer={
          <button
            onClick={() => setOpenModal(false)}
            className="bg-pink-500 hover:bg-purple-500 px-4  py-2 rounded text-white font-bold"
          >
            CLOSE
          </button>
        }
      />

      <Model
        openModel={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        header="Are you sure ?"
        body={
          <p className="text-xl">
            Do you really want to delete this place ? Please not that it cannot
            be undone thereafter
          </p>
        }
        footer={
          <>
            <button
              onClick={() => setOpenDeleteModal(false)}
              className="bg-pink-500 hover:bg-purple-500 px-4  py-2 rounded text-white font-bold"
            >
              CANCEL
            </button>
            <button
              onClick={handleDelete}
              className="bg-pink-500 hover:bg-purple-500 px-4  py-2 rounded text-white font-bold"
            >
              DELETE
            </button>
          </>
        }
      />

      {/*CARD COMPONENT  */}
      <li className="flex justify-center items-center w-full my-8">
        <Card className="w-[50%] rounded-none">
          <CardHeader className="p-0">
            <img src={obj.imageUrl} className="w-full" alt={obj.title} />
          </CardHeader>
          <CardContent className="flex flex-col justify-around items-center mt-8 gap-2">
            <h2 className="text-2xl font-bold">{obj.title}</h2>
            <h3 className="text-xl font-bold">{obj.address}</h3>
            <p className="text-md">{obj.description}</p>
          </CardContent>
          <CardFooter className="border-solid border-t-2 border-gray-400 flex items-center justify-center gap-8 p-8">
            <a
              className="border-2 border-solid border-pink-500 px-4 py-2 text-pink-500 hover:text-white  hover:bg-pink-500 cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              VIEW ON MAP
            </a>
            <Link
              to={`/places/${obj.id}`}
              className="border-2 border-solid border-pink-700 bg-pink-700 text-white px-4 py-2"
            >
              EDIT
            </Link>
            <button
              className="border-2 border-solid border-red-700 bg-red-700 text-white px-4 py-2"
              onClick={() => setOpenDeleteModal(true)}
            >
              DELETE
            </button>
          </CardFooter>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
