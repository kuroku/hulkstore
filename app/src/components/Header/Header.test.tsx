import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Component <Header/>", () => {
  const title = "Home";
  const component = render(<Header title={title} />);
  test(`Render the prop <Header title=${title}/>`, () => {
    component.getByText(title);
  });
});
