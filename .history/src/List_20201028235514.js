import React from "react";
import { TransitionGroup } from "react-transition-group";
export const List = ({ items, onRemove }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id} onClick={() => onRemove(item.id)}>
        {item.title}
      </li>
    ))}
  </ul>
);
