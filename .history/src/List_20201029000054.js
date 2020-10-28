import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const List = ({ items, onRemove }) => (
  <TransitionGroup component={"ul"}>
    {items.map((item) => (
      <CSSTransition>
        <li key={item.id} onClick={() => onRemove(item.id)}>
          {item.title}
        </li>{" "}
      </CSSTransition>
    ))}
  </TransitionGroup>
);
