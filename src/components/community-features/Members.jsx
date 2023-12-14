import MemberCard from "../re-used-community-feature/MemberCard";

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

export default Members;
