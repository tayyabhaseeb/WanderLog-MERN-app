import UserList from "@/components/user/UserList";

// Define the type for a single user object
export interface User {
  name: string;
  image: string;
  placeCount: number;
  id: string;
}

function UserPage() {
  // Define the array of users
  const USERS: User[] = [
    {
      name: "Tayyab Haseeb",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph",
      placeCount: 1,
      id: "u1",
    },
    {
      name: "Ahmad Haseeb",
      image:
        "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=",
      placeCount: 2,
      id: "u2",
    },
  ];

  return <UserList user={USERS} />;
}

export default UserPage;
