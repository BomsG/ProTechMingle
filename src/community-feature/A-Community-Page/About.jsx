import {
  HiGlobeAsiaAustralia,
  HiOutlineCalendar,
  HiOutlineClipboard,
} from "react-icons/hi2";

function About() {
  return (
    <div className="space-y-[20px]">
      <div className="py-[16px] px-[24px] bg-white rounded-[8px]">
        <header className="border-b-[1px] border-[#DBDBDB] pb-[8px] text-[20px] leading-[20px] tracking-[-0.4px]">
          About Community
        </header>
        <main className="pt-[8px] ">
          Welcome to Design Comrade! 🚀 We're not just a community; we're a
          squad of creative minds, a hub where design enthusiasts unite. Whether
          you're a seasoned pro or just starting your creative journey, you're
          among comrades here. Share your masterpieces, swap ideas, and dive
          into the vibrant world of design with your fellow comrades. Together,
          we're turning visions into visuals! 💡✨ #DesignComrade
          #CreativeCommunity.
        </main>
        <div className="mt-[36px] flex flex-col gap-[24px]">
          <div className="flex gap-[8px] items-start">
            <div className="text-[24px]">
              <HiGlobeAsiaAustralia />
            </div>
            <div>
              <h3 className="text-[18px] font-[500]">
                All communities content are visible to public
              </h3>
              <p className="text-[14px] text-[#656565]">
                Anyone can join community
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-start">
            <div className="text-[24px]">
              <HiOutlineClipboard />
            </div>
            <div>
              <h3 className="text-[18px] font-[500]">
                All communities content are visible to public
              </h3>
              <p className="text-[14px] text-[#656565]">
                Anyone can join community
              </p>
            </div>
          </div>
          <div className="flex gap-[8px] items-start">
            <div className="text-[24px]">
              <HiOutlineCalendar />
            </div>
            <div>
              <h3 className="text-[18px] font-[500]">
                All communities content are visible to public
              </h3>
              <p className="text-[14px] text-[#656565]">
                Created on May, 5 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[8px] py-[10px] px-[24px]">
        <header className="border-b-[1px] border-[#DBDBDB] pb-[8px] text-[20px] leading-[20px] tracking-[-0.4px]">
          Community Rules
        </header>

        <div className="space-y-[24px] mt-[25px]">
          <div className="flex gap-[8px]">
            <span className="font-[500]">1.</span>
            <div>
              <h3 className="font-[500]"> Respectful COmunication</h3>
              <p className="text-[14px] text-[#656565]">
                Keep discussions and comments respectful. Avoid the use of
                offensive language, personal attacks, or any form of harassment.
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <span className="font-[500]">2.</span>
            <div>
              <h3 className="font-[500]"> Constructive Critique</h3>
              <p className="text-[14px] text-[#656565]">
                Encourage constructive feedback and critique. Share your
                thoughts in a positive and helpful manner to foster a supportive
                environment for growth.
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <span className="font-[500]">3.</span>
            <div>
              <h3 className="font-[500]"> Relevant Content Only</h3>
              <p className="text-[14px] text-[#656565]">
                Post content that is directly related to design or creative
                processes. Avoid spam, unrelated promotions, or content that
                violates intellectual property rights.
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <span className="font-[500]">4.</span>
            <div>
              <h3 className="font-[500]"> Inclusivity Matters</h3>
              <p className="text-[14px] text-[#656565]">
                Embrace diversity and inclusivity. Discrimination based on race,
                gender, ethnicity, or any other factor will not be tolerated.
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <span className="font-[500]">4.</span>
            <div>
              <h3 className="font-[500]"> Privacy and Confidentiality</h3>
              <p className="text-[14px] text-[#656565]">
                Respect the privacy of fellow comrades. Do not share personal
                information without consent, and ensure that confidential
                information shared within the community remains confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
