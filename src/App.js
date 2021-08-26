import { useState } from "react";
import { nanoid } from "nanoid";

import BackgroundCard from "./components/BackgroundCard";

const itemsDefault = [
  {
    itemId: nanoid(),
    index: 1,
    text: "test item 1",
    checked: false,
    stackId: "todo",
  },
  {
    itemId: nanoid(),
    index: 2,
    text: "test item 2",
    checked: false,
    stackId: "doing",
  },
  {
    itemId: nanoid(),
    index: 3,
    text: "test item 3",
    checked: false,
    stackId: "done",
  },
];

const stacksDefault = [
  {
    heading: "New list",
    stackId: "todo",
  },
  {
    heading: "New list",
    stackId: "doing",
  },
  {
    heading: "New list",
    stackId: "done",
  },
];

function App() {
  const [items, setItems] = useState([]);
  const [stacks, setStacks] = useState(stacksDefault);

  const handleAddItem = (stackId) => {
    let lastItem;

    if (items.length === 0) {
      lastItem = 0;
    } else {
      lastItem = items.reduce((acc, curr) => {
        acc = curr.index > acc ? curr.index : acc;
        return acc;
      }, 0);
    }

    setItems([
      ...items,
      {
        itemId: nanoid(),
        index: lastItem + 1,
        checked: false,
        text: "",
        stackId: stackId,
      },
    ]);
  };

  const handleDropWithinStack = (itemId, stackId) => {};

  const handleDropBetweenStacks = (itemId, stackId) => {
    const updatedStackId = items.map((item) => {
      if (item.itemId === itemId) item.stackId = stackId;
      return item;
    });
    setItems(updatedStackId);
  };

  const handleDropItem = (itemId, stackId) => {
    // Two cases: item being dropped in different place within stack
    // Item dropped in different stack
    handleDropBetweenStacks(itemId, stackId);
  };

  return (
    <div className="flex flex-row justify-between">
      {stacks.map((stack) => {
        return (
          <BackgroundCard
            handleAddItem={handleAddItem}
            handleDropItem={handleDropItem}
            stackId={stack.stackId}
            items={items}
            key={stack.stackId}
          ></BackgroundCard>
        );
      })}
    </div>
  );
}

export default App;
