import { shallow } from "enzyme";
import Card from "./card.component";

const mockMonster = {
  id: 1,
  name: "Leanne Graham",
  email: "Sincere@april.biz",
};

it("expect to render Card component", () => {
  expect(shallow(<Card monster={mockMonster} />)).toMatchSnapshot();
});
