import Card from "./general-features/Card";
import { Link } from "react-router-dom";

//eslint-disable-next-line
function Suggestions({
  label,
  existingCommunity,
  moderatorCard,
  cards,
  newCommunity,
  about,
  suggestedCommunities,
  members,
}) {
  return (
    <div className="bg-white rounded-[10px] h-[auto] self-start">
      <div className="border-b py-[10px] mb-[20px] px-[15px]">
        {/* Suggested Communities */}
        {label}
      </div>
      {!about ? (
        <>
          <div className="space-y-[24px]">
            {/* eslint-disable-next-line */}
            {cards?.map((card) => (
              <Card
                square={existingCommunity}
                label={card.label}
                quantity={card.quantity}
                right={card.right}
                name={card.name}
                field={card.field}
                moderatorCard={moderatorCard}
                key={card.id}
                members={members}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="px-[16px]">{about}</div>
      )}
      <div className="flex justify-center items-center">
        <Link
          to={`${suggestedCommunities ? "/communities/communities-list" : existingCommunity ? '/communities/your-communities': ''}`}
          className="p-[10px] text-center mt-[20px] mb-[10px] rounded-[5px] bg-[#E6EBF0]"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default Suggestions;
