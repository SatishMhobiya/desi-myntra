import React from "react";

class Product extends React.Component {
  render() {
    return (
      <>
        {this.props.productList.map((item) => {
          return (
            <div style={{ border: "1px solid black", width: "300px" }}>
              <img src={item["product-image-url"]} />
              <div>{item["product-name"]}</div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Product;
