import React from "react";
import type { Action } from "../model";

interface ActionPanelProps {
  actions: Array<Action>;
}
export const ActionPanel: React.FC<ActionPanelProps> = ({ actions }) => {
  const listItems = actions?.map((item: Action) => (
    <li key={item.title}>
      <button title={item.title} onClick={item.action}>
        {item.icon}
      </button>
    </li>
  ));

  return <ul>{listItems}</ul>;
};
