import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from '../../../src/Hooks/useMenu'

const PopularMenu = ({buttonText}) => {
    // const [menu, setMenu] = useState([]);
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"From Our Menu"}
                heading={"Popular Items"}
            > 
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
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