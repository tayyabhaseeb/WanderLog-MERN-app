import { User } from "@/pages/UserPage";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
interface Component {
  obj: User;
}

function UserItem({ obj }: Component) {
  return (
    <Link to={`/${obj.id}/places`}>
      <Card className="my-4 py-4 flex items-center justify-center gap-6 bg-gray-900 text-yellow-500 hover:text-gray-900 hover:bg-yellow-300">
        <Avatar className="w-16 h-16">
          <AvatarImage src={obj.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="p-2">
          <h2 className="text-xl font-bold">{obj.name}</h2>
          <h3 className="text-md font-bold text-white">
            {obj.placeCount} {obj.placeCount <= 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Card>
    </Link>
  );
}

export default UserItem;
