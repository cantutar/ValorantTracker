export default function CardList(props) {
  return (
    <>
      <li className="list-group-item">
        {`${props.ListItemName}: ${
          props.ListItemKey ? props.ListItemKey : "No info given."
        }`}
      </li>
    </>
  );
}
