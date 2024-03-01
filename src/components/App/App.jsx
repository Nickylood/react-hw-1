import Profile from "../Profile/Profile";
import data from "../../json/userData.json";
import FriendListItem from "../FriendListItem/FriendListItem";

import friends from '../../json/friends.json';



export default function App() {
  return (
    <>
      <Profile
        name={data.username}
        tag={data.tag}
        location={data.location}
        image={data.avatar}
        stats={data.stats}
      />
      <FriendListItem friends={friends} />
    </>
  );
}
