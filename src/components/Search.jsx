import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  searchProduct = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);
    const filterdList = this.props.productList.filter((item) => {
      return item["product-name"].includes(filterValue);
    });

    this.props.updateList(filterdList);
  };

  render() {
    return (
      <>
        <div>
          <input
            placeholder="Search Product"
            value={this.state.searchValue}
            onChange={(e) => {
              this.searchProduct(e);
              this.setState({
                searchValue: e.target.value
              });
            }}
          />
        </div>
      </>
    );
  }
}

export default Search;
