import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    //LoadData
    useEffect(() =>{
        fetch(`menu.json`)
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)})
    
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"From Our Menu"}
                heading={"Popular Items"}
            > 
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
             {/* Center the button */}
  <div className="flex justify-center mt-6">
    <button className="btn btn-outline uppercase border-0 border-b-2">
      VIEW ALL MENU
    </button>
  </div>
            <section>
                <h3 className="text-4xl text-center py-10 bg-black text-white mt-12 mb-7">Call Us: +88 0192345678910</h3>
            </section>
        </section>
    );
};

export default PopularMenu;