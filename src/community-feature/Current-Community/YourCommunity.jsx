import Card from "../general-features/Card";

function YourCommunity() {
  return (
    <div>
      <div>
        <div>All communities you are in (6)</div>
        <button>Create Community</button>
      </div>
      {Array.from({ length: 10 }, (_, i) => (
        <Card key={i} id={i}/>
      ))}
    </div>
  );
}

export default YourCommunity;
