import AddCommunity from "./AddCommunity";
import Center from "./Center";
import Suggestions from "../re-used-community-feature/Suggestions";
import Body from "./Body";
import Modal from "./Modal";

import CreateCommunity from "./CreateCommunity";

const communityCards = [
  {
    label: "Python Group",
    quantity: "200",
    right: "Join",
    id: 1,
  },
  {
    label: "Python Group",
    quantity: "200",
    right: "Join",
    id: 2,
  },
  {
    label: "Python Group",
    quantity: "200",
    right: "Join",
    id: 3,
  },
  {
    label: "Python Group",
    quantity: "200",
    right: "Join",
    id: 4,
  },
  {
    label: "Python Group",
    quantity: "200",
    right: "Join",
    id: 5,
  },
];

//creating a new community requires a specicial id, i think

function AllCommunities() {
  return (
    <Modal>
      <div className="bg-[#F9F9F9]">
        <Body>
          <Body.Left>
            <Suggestions
              label="Suggested Communities"
              existingCommunity={false}
              suggestedCommunities={true}
              newCommunity={true}
              cards={communityCards}
            />
          </Body.Left>

          <Body.CenterContent>
            <AddCommunity />

            <Modal.Window header="Create Community" name="create-community">
              <CreateCommunity />
            </Modal.Window>
            <Center />
          </Body.CenterContent>

          <Body.Right>
            <Suggestions
              label="My Communities"
              existingCommunity={true}
              cards={communityCards}
            />
          </Body.Right>
        </Body>
      </div>
    </Modal>
  );
}

export default AllCommunities;
