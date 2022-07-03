import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Component <Icon/>", () => {
  const iconName = "favorite";
  const component = render(<Icon name={iconName} target />);

  test(`Render the prop <Icon name=${iconName}/>`, () => {
    component.getByText(iconName);
  });
});
