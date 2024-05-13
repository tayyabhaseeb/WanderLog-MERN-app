import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function NewPlace() {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [inputValueError, setInputValueError] = useState("");
  const [textValueError, setTextValueError] = useState("");
  const [addressValueError, setAddressValueError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

    setIsFormValid(
      value.trim() !== "" && textAreaValue !== "" && addressValue !== ""
    ); // means true
  }

  function handleAddressValue(event: React.ChangeEvent<HTMLInputElement>) {
    setAddressValue(event.target.value);
    const value = event.target.value;

    setAddressValueError(
      value.trim() === "" ? "Please do not leave the address empty " : ""
    );

    setIsFormValid(
      value.trim() !== "" && textAreaValue !== "" && inputValue !== ""
    );
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
      value.trim() !== "" &&
        value.length > 5 &&
        inputValue !== "" &&
        addressValue !== ""
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
      <div>
        <label htmlFor="address" className="text-xl font-bold">
          Address
        </label>

        <Input
          type="text"
          id="address"
          className={`block w-full my-4 ${
            addressValueError ? "border-2 border-solid border-red-500" : ""
          }`}
          value={addressValue}
          onChange={handleAddressValue}
        />
        {addressValueError && (
          <p className="my-4 text-red-500">{addressValueError}</p>
        )}
      </div>
      <button
        disabled={!isFormValid} // (!)false ==> true ==> disabled
        className="mt-4  bg-pink-500 text-white text-xl px-4 py-2  disabled:bg-gray-300 disabled:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
        type="submit"
      >
        ADD PLACE
      </button>
    </form>
  );
}

export default NewPlace;
