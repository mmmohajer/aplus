import React from "react";
import { render as rtlRender, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "Store";
import Alert from "../Alert";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

// test("Renders app", () => {
//   render(<Alert />);
//   const linkElement = screen.getByText(/hello/i);
//   expect(linkElement).toBeInTheDocument();
// });
