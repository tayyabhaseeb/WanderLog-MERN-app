import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Place } from "./PlacePage";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const DUMMY_PLACES: Place[] = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

function EditPlace() {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValueError, setInputValueError] = useState("");
  const [textValueError, setTextValueError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { id } = useParams();

  const identifiedPlace = DUMMY_PLACES.find((obj) => obj.id === id);
  useEffect(() => {
    if (identifiedPlace) {
      setInputValue(identifiedPlace?.title || "");
      setTextAreaValue(identifiedPlace?.description || "");
      setIsFormValid(true);
    }
  }, [identifiedPlace]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputValue, textAreaValue);
  }

  function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    const value = event.target.value;

    setInputValueError(
      value.trim() === "" ? "Please do not leave the title empty " : ""
    );

    setIsFormValid(value.trim() !== "" && textAreaValue !== ""); // means true
  }

  function handleTextAreaValue(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value);

    const value = event.target.value;

    setTextValueError(
      value.trim() === "" && value.length <= 5
        ? "Please a description should be of atleast 5 words"
        : ""
    );
    setIsFormValid(
      value.trim() !== "" && value.length > 5 && inputValue !== ""
    );
  }

  if (!identifiedPlace) {
    return (
      <Card className="bg-pink-500  py-12 my-12 w-1/3 mx-auto block">
        <h2 className="text-white text-2xl font-bold text-center">
          Could not find the place
        </h2>
      </Card>
    );
  }

  return (
    <form
      className="bg-white block w-1/2 mx-auto mt-8 p-8 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title" className="text-xl font-bold">
          Title
        </label>

        <Input
          type="text"
          id="title"
          className={`block w-full my-4 ${
            inputValueError ? "border-2 border-solid border-red-500" : ""
          }`}
          value={inputValue}
          onChange={handleInputValue}
        />
        {inputValueError && (
          <p className="my-4 text-red-500">{inputValueError}</p>
        )}
      </div>
      <div>
        <label htmlFor="description" className="text-xl font-bold">
          Description
        </label>
        <Textarea
          id="description"
          rows={3}
          className={`block resize-none mt-2 mb-4 ${
            textValueError ? "border-2 border-solid border-red-500" : ""
          }`}
          value={textAreaValue}
          onChange={handleTextAreaValue}
        />
        {textValueError && (
          <p className="my-4 text-red-500">{textValueError}</p>
        )}
      </div>

      <button
        disabled={!isFormValid} // (!)false ==> true ==> disabled
        className="mt-4  bg-pink-500 text-white text-xl px-4 py-2  disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        type="submit"
      >
        UPDATE PLACE
      </button>
    </form>
  );
}

export default EditPlace;
