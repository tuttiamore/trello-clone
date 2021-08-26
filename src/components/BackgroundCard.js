import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../dragndrop/ItemTypes";

export default function BackgroundCard({
  items,
  stackId,
  handleAddItem,
  handleDropItem,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: () => ({ name: stackId }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <section className="bg-gray-100 rounded m-4 p-4 flex-auto" ref={drop}>
      {items &&
        items.map((item) => {
          if (item.stackId === stackId) {
            return (
              <Card
                key={item.itemId}
                text={item.text}
                itemId={item.itemId}
                items={items}
                handleDropItem={handleDropItem}
              ></Card>
            );
          }
          return null;
        })}
      <article
        className="flex flex-row cursor-pointer hover:bg-gray-200"
        onClick={() => {
          handleAddItem(stackId);
        }}
      >
        <AddIcon></AddIcon> <p>Add new card</p>
      </article>
    </section>
  );
}
