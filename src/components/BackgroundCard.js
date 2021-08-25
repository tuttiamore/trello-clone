import React from "react";
import AddIcon from "@material-ui/icons/Add";

export default function BackgroundCard({ children }) {
  return (
    <section className="bg-gray-200 rounded m-2">
      {children}
      <article className="flex flex-row">
        <AddIcon></AddIcon> <p>Add another card</p>
      </article>
    </section>
  );
}
