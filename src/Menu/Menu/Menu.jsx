import { Helmet, HelmetProvider } from 'react-helmet-async';
const Menu = () => {
    return (
        <div>
    <HelmetProvider>
      <Helmet>
        <title>BISTRO BOSS</title>
      </Helmet>
      <h1>Hello World</h1>
  </HelmetProvider>
            
        </div>
    );
};

export default Menu;