import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 */
export default function Sidebar({ initialMenuItems }) {
  // State for new item input
  const [newMenuItem, setNewMenuItem] = useState("");

  // TODO 2: Maintain menu items in state
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  // State for filter input
  const [filter, setFilter] = useState("");

  // TODO 3: Add new menu item
  const addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return;

    setMenuItems([newMenuItem, ...menuItems]);
    setNewMenuItem("");
  }, [newMenuItem, menuItems]);

  // TODO 4: Filter menu items (case-insensitive, regex)
  const filteredMenuItems = menuItems.filter((item) => {
    if (filter === "") return true;

    const regex = new RegExp(filter, "i");
    return regex.test(item);
  });

  return (
    <div>
      {/* Input for adding new item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* Filter input */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      {/* TODO 1: Render menu items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
