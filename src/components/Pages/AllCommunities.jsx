import { HiGlobeEuropeAfrica, HiOutlineLockClosed } from "react-icons/hi2";

import Suggestions from "../re-used-community-feature/Suggestions";
import Posts from "../re-used-community-feature/Posts";
import CreatePost from "../re-used-community-feature/CreatePost";
import Body from "../re-used-community-feature/Body";
import Menus from "../re-used-community-feature/Menu";

import Modal from "../re-used-community-feature/Modal";

import Image from "../../images/community-banner.png";

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

const POST_STRUCTURE = [
  {
    title: "Post Title",
    content: `Post content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt et explicabo saepe temporibus veniam alias iste nihil obcaecati beatae
        autem voluptas labore eveniet iure pariatur cupiditate, necessitatibus a
        porro optio assumenda repellendus quam quia praesentium ad! Sapiente
        illo aliquam libero, labore possimus nesciunt delectus praesentium, ipsa
        quas nostrum neque. `,
    image: "Post Image",
    community: "Design Comrade",
    posterName: "Boma Pearls",
    field: "UI/UX Designer",
  },
  {
    title: "Post Title",
    content: "Post content",
    image: "Post Image",
    community: "Design Comrade",
    posterName: "Boma Pearls",
    field: "UI/UX Designer",
  },
  {
    title: "Post Title",
    content: "Post content",
    image: "Post Image",
    community: "Design Comrade",
    posterName: "Boma Pearls",
    field: "UI/UX Designer",
  },
];

function Center() {
  return (
    <div className="flex flex-col gap-[15px] ">
      <CreatePost />

      {/* POSTS */}
      {POST_STRUCTURE.map((post) => (
        <Posts
          title={post.title}
          src={post.image}
          community={post.community}
          content={post.content}
          field={post.field}
          posterName={post.posterName}
          key={post.content}
        />
      ))}
    </div>
  );
}

function AddCommunity() {
  //question: should we used fixed gap
  return (
    <div className="flex px-[15px] py-[10px] bg-white justify-between items-center rounded-[10px] ">
      <div>Communities</div>
      <Modal.Open opens="create-community">
        <button className="bg-[#003366] p-[16px] rounded-[6px] w-[199px] text-white">
          Create Community
        </button>
      </Modal.Open>
    </div>
  );
}




function CreateCommunity() {
  return (
    <Menus>
      <div className="bg-white">
        <div className="w-full h-[273.306px]">
          <img src={Image} className="w-full" alt="" />
        </div>
        <div className="py-[24px] px-[16px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="specialization">Community Name</label>
            <input
              type="text"
              id="specialization"
              className="border-[1px] border-[#656565] p-[10px] rounded-[8px]"
              placeholder="UI/UX Soldier"
            />
          </div>

          <div className="flex gap-[8px] flex-col py-[24px]">
            <label htmlFor="select-privacy">Community Type</label>

            <Menus.Menu>
              <Menus.Toggle>
                <button
                  id="select-privacy"
                  className="border-[1px] text-[#65656] text-left boder-[#656565] bg-transparent  p-[10px] rounded-[8px] w-full"
                >
                  Choose Type
                </button>
              </Menus.Toggle>

              <Menus.List communityType="false">
                <Menus.Button className="flex align-top gap-[8px]">
                  <div className="text-[24px]">
                    <HiGlobeEuropeAfrica />
                  </div>
                  <div>
                    <div className="text-left">Public</div>
                    <p className="text-[14px] text-[#656565] text-left">
                      Anyone can join the community and see all content posted
                      on the community
                    </p>
                  </div>
                </Menus.Button>

                <Menus.Button className="flex align-top gap-[8px]">
                  <div className="text-[24px]">
                    <HiOutlineLockClosed />
                  </div>
                  <div>
                    <div className="text-left">Private</div>
                    <p className="text-[14px] text-[#656565] text-left">
                      Only members can see content posted and people in the
                      library
                    </p>
                  </div>
                </Menus.Button>
              </Menus.List>
            </Menus.Menu>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label htmlFor="description">About Community</label>
            <textarea
              className="border-[1px] border-[#656565]  p-[12px] rounded-[8px]"
              name="post"
              placeholder="Add description"
              id="description"
              cols="20"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="py-[12px] px-[24px] flex justify-end">
          <button className="bg-[#036] rounded-[4px] text-white [ py-[13px] px-[19px]">
            Create
          </button>
        </div>
      </div>
    </Menus>
  );
}





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
