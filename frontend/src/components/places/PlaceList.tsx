import { Place } from "@/pages/PlacePage";
import { Card } from "../ui/card";
import PlaceItem from "./PlaceItem";
import { Link } from "react-router-dom";

interface Component {
  items: Place[];
}

function PlaceList({ items }: Component) {
  if (items.length === 0) {
    return (
      <div className="flex justify-center">
        <Card className="my-4 py-12 gap-6 bg-gray-900 text-yellow-500 w-1/4 flex  flex-col justify-center items-center">
          <h1 className="text-2xl">No Places Found</h1>
          <Link
            className="bg-pink-500 text-white px-4 py-2 rounded"
            to="/places/new"
          >
            Add Place
          </Link>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {items.map((obj) => {
        return <PlaceItem obj={obj} key={obj.id} />;
      })}
    </ul>
  );
}

export default PlaceList;
