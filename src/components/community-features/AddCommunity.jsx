import Modal from "./Modal";

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

export default AddCommunity;
