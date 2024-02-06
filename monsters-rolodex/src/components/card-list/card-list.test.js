import { shallow } from "enzyme";
import CardList from "./card-list.component";

const mockMonsters = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
];

it("expect to render Card component", () => {
  expect(shallow(<CardList monsters={mockMonsters} />)).toMatchSnapshot();
});
