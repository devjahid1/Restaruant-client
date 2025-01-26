import { Helmet} from 'react-helmet-async';
import COver from '../../Shared/Cover/COver';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>

      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
        <COver img={menuImg} title={"OUR MENU"} subTitle={"Would You Like TO Try A Dish?"}></COver>
      <div className='max-w-screen-xl mx-auto'>
      <PopularMenu buttonText={"ORDER YOUR FAVORITE FOOD"}></PopularMenu>
      <COver img={menuImg} title={"OUR MENU"} subTitle={"Would You Like TO Try A Dish?"}></COver>
      <PopularMenu buttonText={"ORDER YOUR FAVORITE FOOD"}></PopularMenu>
      <COver img={menuImg} title={"OUR MENU"} subTitle={"Would You Like TO Try A Dish?"}></COver>
      <PopularMenu buttonText={"ORDER YOUR FAVORITE FOOD"}></PopularMenu>
      <COver img={menuImg} title={"OUR MENU"} subTitle={"Would You Like TO Try A Dish?"}></COver>
      <PopularMenu buttonText={"ORDER YOUR FAVORITE FOOD"}></PopularMenu>
        </div>

            
        </div>
    );
};

export default Menu;