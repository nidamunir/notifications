import React from "react";

import { useNotification } from "./useNotification";

const Component = () => {
  let { showNotification } = useNotification();

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quidem
        asperiores?
      </p>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => showNotification("This is component modal content")}
      >
        open this modal!
      </button>
    </>
  );
};

export default Component;
