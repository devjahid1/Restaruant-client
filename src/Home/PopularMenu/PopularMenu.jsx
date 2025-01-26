import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = ({buttonText}) => {
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
    <button className="btn btn-outline uppercase border-0 border-b-2">{buttonText || "VIEW ALL MENU"}
    </button>
  </div>

        </section>
    );
};

export default PopularMenu;