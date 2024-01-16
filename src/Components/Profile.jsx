import React from "react";
import {Items} from "./Items.js"
import CalendarGfg from "./CalendarGfg.jsx"
import {useState, useEffect} from "react";

const Profile = () => {

const [selectedFilters, setSelectedFilters] = useState([])
const [filteredItems, setFilteredItems] = useState(Items)
const [toggle, setToggle] = useState(false)

let filters = ["Basic Information", "About Me", "Work Experience", "Education", "Skills"]
    

        const handleFilterButton=(selectedCategory)=>{
            if(selectedFilters.includes(selectedCategory)){
                let filters = selectedFilters.filter((el)=> el !== selectedCategory);
                setSelectedFilters(filters)
            }else{
                setSelectedFilters([...selectedFilters, selectedCategory])
            }
        };

        useEffect(() =>{
            filterItems();
        }, [selectedFilters])

        const filterItems = () =>{
            if(selectedFilters.length > 0){
                let tempItems = selectedFilters.map((selectedCategory) =>{
                    let temp = Items.filter((item) => item.category === selectedCategory);
                    return temp;
                });
                setFilteredItems(tempItems.flat());
            }else{
                setFilteredItems([Items])
            }
        }

        const handleClicked=()=>{
            setToggle(!toggle)
        }
  return (
    <>
      <div className=" bg-[#fefefe] pt-[78px] h-full flex md:align-center ">
        <div className=" w-[20%] bg-[#E6EBF0] pl-[50px] h-[100vh] hidden  lg:block">
              <header className="font-bold mb-10">Profile Update</header>
            <div className="  w-[50%]">
       
                <div>
                    <button className="max-w-md mx-auto w-1/4 lg:w-full border border-solid rounded-md p-4 mb-6 flex items-center bg-[#003366] justify-center font-semibold text-[#fff] text-sm">Preview CV</button>
                </div>

                <div>
                <button className="max-w-md mx-auto w-11/12 lg:w-full border border-solid rounded-md p-4 mb-6 flex items-center justify-center font-semibold text-sm">Download CV</button>
                </div>       
        </div>    
        </div>
        <div className="w-[80%] h-[100vh] md:align-center">
            <ul className="pl-[50px] w-[800px] space-y-8">   
                {   
                    filters.map((category, idx)=>(
                        <div onClick={()=>handleFilterButton(category)} className="shadow-md space-y-4 pl-2" key={`filters-${idx}`}>{category}</div> 
                    ))
                }

                <div>
                {
                    filteredItems.map((item, idx)=>(
                        <div key={`items-${idx}`} className="item">
                            <p>{item.name}</p>
                        
                            <p className="flex flex-col space-y-5">{item.category === 'Basic Information' && <>    
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"} placeholder="name"/>
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="email"/>
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="age"/>
                            { <CalendarGfg/>}
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="phone"/>
                            <button>Edit</button></>
                            
                            }

                            {item.category === 'About Me' && <>    <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md p-10"}  placeholder="About Me"/>
                            <input type="submit" value="save" className="bg-[#003366] text-[#fff] w-[10%] p-[3px] rounded-md" />
                            <input type="save" value="save" className=" text-center border border-[#003366] text-[#003366] bg-[#fff] w-[10%] p-[3px] rounded-md" />
                            </> }

                            {item.category === 'Work Experience' && <>    <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="Work Experience"/></>}

                            {item.category === 'Education' && <>    <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="Education"/>
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="Education"/>
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="Education"/>
                            <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  onChange={()} placeholder="Education"/>
                            </>}

                            {item.category === 'Skills' && <>    <input type="text" className={"border border-inputBorder border-solid p-2 rounded-md"}  placeholder="Skills"/>
                            <input type="submit" value="+ Add Skills" className=" text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md" onClick={()=>handleClicked()}/>
                            {!toggle && <>
                            <div className="flex space-x-4">
                                <input type="submit" value="+ userFlow" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                <input type="submit" value="+ Story Telling" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                <input type="submit" value="+ UI/UX Design" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                <input type="submit" value="+ Wire Framing" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                <input type="submit" value="+ User Flow" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                <input type="submit" value="+ User Research" className="text-[12px] font-bold text-center border border-[#003366] text-[#003366] bg-[#fff] w-[15%] p-[8px] rounded-md"/>
                                </div>
                            </>}
                            </>}
                            
                            </p>
                        </div>
                    ))
                }
            </div>
            </ul>

            
        </div>

      </div>
    
    </>
  )
}

export default Profile;