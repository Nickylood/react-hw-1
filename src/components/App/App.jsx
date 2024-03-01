import Profile from "../Profile/Profile";
import data from "../../json/userData.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
// import FriendListItem from "../FriendListItem/FriendListItem";
import transactions from '../../json/transactions.json'

// import friends from '../../json/friends.json';

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
      {/* <FriendListItem friends={friends} /> */}
      <TransactionHistory items={transactions} />
    </>
  );
}
