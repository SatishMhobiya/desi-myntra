import ProductGrid from "./components/ProductGrid";
import Search from "./components/Search";
import { products } from "./constants.js";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      backupList: [],
      loading: false
    };
  }

  updateList = (filterdList) => {
    this.setState({
      backupList: filterdList
    });
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://api.npoint.io/036e0340a75dbe6cecb9")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          productList: data,
          backupList: data,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1>Desi Myntra</h1>
        <Search
          productList={this.state.productList}
          updateList={this.updateList}
        />
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <ProductGrid productList={this.state.backupList} />
          </>
        )}
      </>
    );
  }
}
export default App;
