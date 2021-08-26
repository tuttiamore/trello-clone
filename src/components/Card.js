import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../dragndrop/ItemTypes";

export default function Card({ text, itemId, handleDropItem }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { itemId },
    end: (item, monitor) => {
      const { name } = monitor.getDropResult();
      handleDropItem(item.itemId, name);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <article
      className="p-2 my-2 bg-white rounded flex flex-row justify-between"
      ref={drag}
    >
      <div>{text.length > 0 ? text : "Enter task"}</div>
      <div>
        <EditIcon className="self-end justify-self-end"></EditIcon>
        <DeleteIcon className="self-end"></DeleteIcon>
      </div>
    </article>
  );
}
