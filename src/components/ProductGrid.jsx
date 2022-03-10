import React from "react";
import Product from "./Product.jsx";

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Product List</h2>
        <div
          className="product-grid-container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Product productList={this.props.productList} />
        </div>
      </>
    );
  }
}

export default ProductGrid;
