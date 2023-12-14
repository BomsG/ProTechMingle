import CreatePost from "./CreatePost";
import Posts from "../re-used-community-feature/Posts";

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

export default Center;
