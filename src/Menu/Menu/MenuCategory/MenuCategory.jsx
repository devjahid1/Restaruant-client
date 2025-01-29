import { Link } from 'react-router-dom';
import COver from '../../../Shared/Cover/COver';
import MenuItem from '../../../Shared/MenuItem/MenuItem'
const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {<COver img={img} title={title}></COver>}
        <div className="grid md:grid-cols-2 gap-10 mt-24 mb-5 max-w-screen-xl m-auto">
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <Link to={`/shop/${title}`}>
            <button className='btn btn-outline border-0 border-b-4 mt-4 mb-10 w-1/4 md:ml-96'>Order Now</button>
        </Link>
        </div>
    );
};

export default MenuCategory;