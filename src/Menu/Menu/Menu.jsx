import { Helmet} from 'react-helmet-async';
import COver from '../../Shared/Cover/COver';
import menuImg from '../../assets/menu/Rectangle 1.png'
import dessertImg from '../../assets/menu/dessert-bg.png'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import drinksImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../../src/components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(items => items.category === 'dessert')
  const pizza = menu.filter(items => items.category === 'pizza')
  const salad = menu.filter(items => items.category === 'salad')
  const soup = menu.filter(items => items.category === 'soup')
  const drinks = menu.filter(items => items.category === 'drinks')
  const offered = menu.filter(items => items.category === 'offered')
    return (
        <div>

      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      {/* Main cover */}
        <COver img={menuImg} title={"OUR MENU"} subTitle={"Would You Like TO Try A Dish?"}></COver>
        <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offer"}/>
        <div className='max-w-screen-xl m-auto'>
          {/* offered */}
        <MenuCategory items={offered}></MenuCategory>
        {/* Desserts */}
        <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
        {/* Pizza */}
        <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
        {/* Salads */}
        <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
        {/* Soup */}
        <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        <MenuCategory items={drinks} title="soup" img={drinksImg}></MenuCategory>
        </div>
        </div>

    );
};

export default Menu;