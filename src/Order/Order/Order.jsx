import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import COver from '../../Shared/Cover/COver';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offerd = menu.filter(item => item.category === 'offerd');
    return (
        <div>
            <COver img={orderCover} title={"ORDER FOOD"} subTitle={"WOULD YOU LIKE TO TRY A DISH ?"}/>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                  <Tab>Salad</Tab>
                  <Tab>Pizza</Tab>
                  <Tab>Soup</Tab>
                  <Tab>Dessert</Tab>
                  <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                </Tabs>
        </div>
    );
};

export default Order;