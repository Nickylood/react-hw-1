export default function FriendListItem({
  friend: { id, avatar, name, isOnline },
}) {
  return (
    <>
      <div id={id}>
        <img src={avatar} alt="avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline}</p>
      </div>
    </>
  );
}
