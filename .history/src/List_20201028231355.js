import React from "react";

export const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id} onClick={() => onRemove(item.id)}>
        {item.title}
      </li>
    ))}
  </ul>
);
