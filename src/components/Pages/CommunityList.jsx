import CardsBody from "./CardsBody";

function CommunityList() {
  return (
    <div>
      <h1>Communities</h1>
      <div className="pt-[100px] flex flex-wrap justify-center gap-[24px]">
        {Array.from({ length: 30 }, (_, i) => (
          <CardsBody key={i} label="Comunnities" />
        ))}
      </div>
    </div>
  );
}

export default CommunityList;
