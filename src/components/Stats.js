export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding your list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! you ready to go ✈️"
          : `you have ${numItems} items on your list, and you are already picks ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
