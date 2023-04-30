export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
