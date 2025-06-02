import React from 'react';
import Grid from '@mui/material/Grid';
import "./CustomCard.css";

export default function CustomCard({ products }) {
  return (
    <Grid container spacing={2}>
      {products.length > 0 ? (
        products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.id || index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="cards">
              <img src={product.ProductImage} alt={product.ProductName} />
              <p className="dishname">{product.ProductName}</p>
              <p className="dishdescription">{product.Description}</p>
              <div className="card-info-row">
                <p className="dishprice">₹{product.ProductPrice}</p>
                <button className="add-button">Add</button>
              </div>
            </div>
          </Grid>
        ))
      ) : (
        <p style={{ margin: "20px" }}>There is no data</p>
      )}
    </Grid>
  );
}
