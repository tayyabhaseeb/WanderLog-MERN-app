import { User } from "@/pages/UserPage";
import UserItem from "./UserItem";
import { Card } from "../ui/card";

interface Component {
  user: User[];
}

function UserList({ user }: Component) {
  if (user.length === 0) {
    return (
      <div className="flex justify-center">
        <Card className="my-4 py-12 gap-6 bg-gray-900 text-yellow-500 w-1/4 flex justify-center items-center">
          <h1 className="text-2xl">No Users Found</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className=" mx-auto block w-1/4 mt-8">
      {user.map((obj) => {
        return <UserItem obj={obj} key={obj.id} />;
      })}
    </ul>
  );
}

export default UserList;
