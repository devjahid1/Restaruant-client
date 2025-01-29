import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import COver from '../../Shared/Cover/COver';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    console.log(category);
    
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offerd = menu.filter(item => item.category === 'offerd');
    return (

        <div>
            
            <COver img={orderCover} title={"ORDER FOOD"} subTitle={"WOULD YOU LIKE TO TRY A DISH ?"}/>
            <div className='max-w-screen-xl m-auto mt-10 mb-10'>

       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <div className='mb-10 text-center font-bold'>
               <TabList>
                  <Tab>Salad</Tab>
                  <Tab>Pizza</Tab>
                  <Tab>Soup</Tab>
                  <Tab>Dessert</Tab>
                  <Tab>Drinks</Tab>
                </TabList>
               </div>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                </Tabs>
       </div>
            </div>
    );
};

export default Order;