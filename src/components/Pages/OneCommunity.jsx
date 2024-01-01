import { useData } from "../../contexts/DataContext";

import Body from "./Body";
import Posts from "../screens/Posts";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Suggestions from "./Suggestions";
import MemberCard from "./MemberCard";
import About from "./About";

import communityBanner from "../../images/community-banner.png";
import Image from "../../images/Avatars.png";

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

function CommunityHeader() {
  const { dispatch, postsPage } = useData();

  // const navigate = useNavigate();
  return (
    <div className="space-y-[12px] bg-white">
      <div className="mb-[10px]">
        <img
          src={communityBanner}
          className="w-full"
          alt="community banner page"
        />
      </div>
      <div className="mt-[10px] px-[23px]">
        <div className="text-[28px] leading-[36px] tracking-[-0.56px] py-[10px]">
          Design Comrades
        </div>
        <div className="flex justify-between">
          <div>
            <div>300 Members</div>
            <div className="flex">
              <img
                src={Image}
                className="w-[24px] h-[24px] ml-[-6px] "
                alt="a community member"
              />
              <img
                src={Image}
                className="w-[24px] h-[24px] ml-[-6px] "
                alt="a community member"
              />
              <img
                src={Image}
                className="w-[24px] h-[24px] ml-[-6px] "
                alt="a community member"
              />
            </div>
          </div>
          <div className="flex gap-[12px] items-center">
            <button className="rounded-[8px] bg-[#036] text-white px-[12px] py-[8px]  flex space-x-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M10.8333 3.63802C10.8333 3.17778 10.4602 2.80469 10 2.80469C9.53976 2.80469 9.16667 3.17778 9.16667 3.63802V9.47135H3.33333C2.8731 9.47135 2.5 9.84445 2.5 10.3047C2.5 10.7649 2.8731 11.138 3.33333 11.138H9.16667V16.9714C9.16667 17.4316 9.53976 17.8047 10 17.8047C10.4602 17.8047 10.8333 17.4316 10.8333 16.9714V11.138H16.6667C17.1269 11.138 17.5 10.7649 17.5 10.3047C17.5 9.84445 17.1269 9.47135 16.6667 9.47135H10.8333V3.63802Z"
                  fill="#FEFEFE"
                />
              </svg>
              <span>Invite</span>
            </button>
            <button className="rounded-[8px] bg-[#036] text-white px-[12px] py-[8px]  flex space-x-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.1666 1.9707C12.3256 1.9707 10.8333 3.46309 10.8333 5.30404C10.8333 5.44639 10.8422 5.58665 10.8595 5.72431C10.739 5.82108 10.582 5.9436 10.3989 6.07822C9.95233 6.40665 9.37812 6.78689 8.81548 7.04828C8.33214 7.27282 7.75162 7.4677 7.27614 7.60911C7.04171 7.67884 6.83938 7.73365 6.69635 7.77085C6.62494 7.78943 6.56859 7.80354 6.53073 7.81286L6.48832 7.82319L6.47837 7.82556L6.47638 7.82604C6.45551 7.83093 6.43487 7.83661 6.41477 7.84295C5.82202 7.30119 5.0329 6.9707 4.16659 6.9707C2.32564 6.9707 0.833252 8.46309 0.833252 10.304C0.833252 12.145 2.32564 13.6374 4.16659 13.6374C5.03288 13.6374 5.822 13.3069 6.41473 12.7651C6.44493 12.7747 6.47599 12.7826 6.50782 12.7888L6.50873 12.789L6.51702 12.7906L6.55515 12.7985C6.58977 12.8058 6.64214 12.8172 6.70922 12.8327C6.84363 12.8638 7.03579 12.9112 7.26166 12.9754C7.71933 13.1055 8.28939 13.2971 8.79391 13.5494C9.30407 13.8045 9.88681 14.1908 10.3587 14.5286C10.5541 14.6684 10.7253 14.7962 10.8578 14.8972C10.8416 15.0305 10.8333 15.1663 10.8333 15.304C10.8333 17.145 12.3256 18.6374 14.1666 18.6374C16.0075 18.6374 17.4999 17.145 17.4999 15.304C17.4999 13.4631 16.0075 11.9707 14.1666 11.9707C13.0781 11.9707 12.1115 12.4924 11.5031 13.2994C11.4474 13.2587 11.3892 13.2166 11.3288 13.1733C10.8354 12.8201 10.1681 12.3731 9.53926 12.0587C8.90475 11.7414 8.22481 11.5164 7.71724 11.3722C7.586 11.3349 7.46456 11.3025 7.3563 11.275C7.44969 10.9678 7.49992 10.6418 7.49992 10.304C7.49992 9.96172 7.44832 9.63146 7.35247 9.3206C7.47053 9.28822 7.60521 9.25006 7.75127 9.20662C8.25722 9.05614 8.9267 8.83435 9.51769 8.5598C10.2245 8.23143 10.9003 7.77834 11.3864 7.42088C11.4308 7.3882 11.4739 7.35615 11.5155 7.32488C12.1245 8.12265 13.0854 8.63737 14.1666 8.63737C16.0075 8.63737 17.4999 7.14499 17.4999 5.30404C17.4999 3.46309 16.0075 1.9707 14.1666 1.9707ZM12.4999 5.30404C12.4999 4.38356 13.2461 3.63737 14.1666 3.63737C15.0871 3.63737 15.8333 4.38356 15.8333 5.30404C15.8333 6.22451 15.0871 6.9707 14.1666 6.9707C13.2461 6.9707 12.4999 6.22451 12.4999 5.30404ZM2.49992 10.304C2.49992 9.38356 3.24611 8.63737 4.16659 8.63737C5.08706 8.63737 5.83325 9.38356 5.83325 10.304C5.83325 11.2245 5.08706 11.9707 4.16659 11.9707C3.24611 11.9707 2.49992 11.2245 2.49992 10.304ZM12.4999 15.304C12.4999 14.3836 13.2461 13.6374 14.1666 13.6374C15.0871 13.6374 15.8333 14.3836 15.8333 15.304C15.8333 16.2245 15.0871 16.9707 14.1666 16.9707C13.2461 16.9707 12.4999 16.2245 12.4999 15.304Z"
                  fill="#FEFEFE"
                />
              </svg>
              <span>Share</span>
            </button>
            <button className="rounded-[8px] bg-[#036] text-white px-[12px] py-[8px] ">
              Joined
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] pt-[20px]">
        <button
          className={`px-[15px] py-[10px] cursor-pointer focus:text-[#036] focus:border-b-[2px] border-[#036] ${
            postsPage && "text-[#036] border-b-[2px]"
          }`}
          onClick={() => dispatch({ type: "open-posts" })}
        >
          Posts
        </button>
        <button
          className="px-[15px] py-[10px] cursor-pointer focus:text-[#036] focus:border-b-[2px] border-[#036]"
          onClick={() => dispatch({ type: "open-latest" })}
        >
          Latest
        </button>
        <button
          className="px-[15px] py-[10px] cursor-pointer focus:text-[#036] focus:border-b-[2px] border-[#036]"
          onClick={() => dispatch({ type: "open-members" })}
        >
          Member
        </button>
        <button
          className="px-[15px] py-[10px] cursor-pointer focus:text-[#036] focus:border-b-[2px] border-[#036]"
          onClick={() => dispatch({ type: "open-about" })}
        >
          About
        </button>
      </div>
    </div>
  );
}

function Members() {
  return (
    <div>
      <div className="border-b-[1px] border-black space-y-p">
        {Array.from({ length: 5 }, (_, i) => (
          <MemberCard key={i} />
        ))}
      </div>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <MemberCard key={i} />
        ))}
      </div>
    </div>
  );
}

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
