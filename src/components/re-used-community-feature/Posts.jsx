import PostHeader from "./PostHeader";
import Stats from "./Stats";
import WriteComment from "./WriteComment";

//eslint-disable-next-line
function Posts({ title, src, community, content, field, posterName }) {
  return (
    <div className="grid  grid-rows-[72px_1fr_48px] px-[24px] py-[16px] rounded-[10px] bg-white">
      <PostHeader
        community={community}
        posterName={posterName}
        field={field}
        src={src}
      />
      <div className="py-[16px]">{content}</div>
      <Stats />
      <WriteComment />
    </div>
  );
}

export default Posts;
