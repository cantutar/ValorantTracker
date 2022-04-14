export default function CardList(props) {
  return (
    <>
      <li className="list-group-item bg-dark text-light">
        {`${props.ListItemName}: ${
          props.ListItemKey ? props.ListItemKey : "No info given."
        }`}
      </li>
    </>
  );
}
