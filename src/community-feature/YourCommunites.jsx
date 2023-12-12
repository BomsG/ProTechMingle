import YourCommunitiesCard from "./Current-Community/YourCommunitiesCard"

function YourCommunites() {
    return (
        <div>
          <h1>Communities</h1>
          <div className="pt-[100px] flex flex-wrap justify-center gap-[24px]">
            {Array.from({ length: 30 }, (_, i) => (
              <YourCommunitiesCard key={i} />
            ))}
          </div>
        </div>
    )
}

export default YourCommunites
