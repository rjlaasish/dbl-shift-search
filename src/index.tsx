import React from "react";
import ReactDOM from "react-dom/client";
import { DoubleShiftSearch } from "lib";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DoubleShiftSearch closeOnESCPress={false} />
  </React.StrictMode>
); 
