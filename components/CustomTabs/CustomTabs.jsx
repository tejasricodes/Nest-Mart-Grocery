import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomCard from '../CustomCard/customCard';
import '@fontsource/quicksand'; // Make sure you have this or import it in your index.html

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div" sx={{ fontFamily: 'Quicksand, sans-serif' }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(
          'https://68369a00664e72d28e415dd5.mockapi.io/api/blinkit/products/products'
        );
        const data = res.data;
        setProducts(data);

        const seen = new Set();
        const uniqueCategories = data
          .map((item) => {
            if (!seen.has(item.category)) {
              seen.add(item.category);
              return { label: item.category, CategoryImage: item.CategoryImage };
            }
            return null;
          })
          .filter(Boolean);

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh', // Full viewport height
        fontFamily: 'Quicksand, sans-serif',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Product Categories"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: 150,
          height: '100%',      // Make Tabs fill height
          overflowY: 'auto',   // Enable vertical scroll
          '& .MuiTabs-indicator': {
            backgroundColor: '#3bb77e',
          },
        }}
      >
        {categories.map((category, index) => (
          <Tab
            key={category.label}
            {...a11yProps(index)}
            label={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontFamily: 'Quicksand, sans-serif',
                  color: value === index ? '#3bb77e' : 'inherit',
                }}
              >
                <img
                  src={category.CategoryImage}
                  alt={category.label}
                  style={{ width: 50, height: 50, marginBottom: 6 }}
                />
                {category.label}
              </div>
            }
            sx={{
              color: '#000',
              '&.Mui-selected': {
                color: '#3bb77e',
              },
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          height: '100vh',
        }}
      >
        {categories.map((category, index) => (
          <TabPanel value={value} index={index} key={index}>
            <CustomCard
              products={products.filter((product) => product.category === category.label)}
            />
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
