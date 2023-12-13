import CommunityHeader from "../community-feature/A-Community-Page/CommunityHeader";
import Body from "../community-feature/general-features/Body";
import Center from "../community-feature/Center";
import Header from "../community-feature/general-features/Header";
import Suggestions from "../community-feature/Suggestions";
import Members from "../community-feature/Members/Members";
import { useState } from "react";
import { useData } from "../contexts/DataContext";
import About from "../community-feature/A-Community-Page/About";

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

const connectionCard = [
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 6,
  },
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 6,
  },
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 7,
  },
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 8,
  },
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 10,
  },
];

const membersCard = [
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 6,
  },
  {
    right: "Connect",
    name: "BOma Pearls",
    field: "UI/UX Designer",
    id: 6,
  },
];

const ABOUT_CONTENT = `Welcome to Design Comrade! 🚀 We're not just a community; we're a squad of creative minds, a hub where design enthusiasts unite. Whether you're a seasoned pro or just starting your creative journey, you're among comrades here.`;

const GROUP_RULES = [
  {
    content: "Respectful Communication",
  },
  { content: "Constructive Critique" },
  { content: "Relevant Content Only" },
  { content: "Inclusivity Matters" },
  { content: "Privacy and Confidentiality" },
];

function OneCommunity() {
  const { aboutPage, membersPage, postsPage, latestPage } = useData();

  console.log(aboutPage, membersPage, postsPage);

  return (
    <div>
      <Header />

      <Body>
        <Body.Left>
          <Suggestions
            label="Suggested Communities"
            existingCommunity={false}
            moderatorCard={true}
            cards={membersCard}
          />

          <Suggestions
            label="Suggested Communities"
            existingCommunity={false}
            moderatorCard={true}
            members={true}
            cards={connectionCard}
          />
        </Body.Left>
        <Body.CenterContent>
          <CommunityHeader />
          {postsPage && <Center />}
          {latestPage && <Center />}
          {membersPage && <Members />}
          {aboutPage && <About />}
        </Body.CenterContent>
        <Body.Right>
          <Suggestions
            label="About"
            existingCommunity={true}
            cards={communityCards}
            about={ABOUT_CONTENT}
          />

          <div className="bg-white rounded-[10px] h-[auto] self-start">
            <div className="border-b py-[10px] mb-[20px] px-[15px]">
              Community Rules
            </div>

            {GROUP_RULES.map((rule, i) => (
              <p className="px-[15px] py-[10px]" key={rule.content}>
                {i + 1}. {rule.content}
              </p>
            ))}
          </div>
        </Body.Right>
      </Body>
    </div>
  );
}

export default OneCommunity;
