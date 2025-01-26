import COver from '../../../Shared/Cover/COver';
import MenuItem from '../../../Shared/MenuItem/MenuItem'
const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <COver img={img} title={title}></COver>}
        <div className="grid md:grid-cols-2 gap-10 mt-24 mb-24 max-w-screen-xl m-auto">
            {
                items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        </div>
    );
};

export default MenuCategory;