import axios from "axios";
import React from 'react';
export default class OrganicTea extends React.Component {

state = {
products: []
}

componentDidMount() {
  axios.get("https://cheapprice.siten.co/api/productView?category=organic-tea")
    .then(res => {
        const products=res.data.data.productList;
        console.log(products)
        this.setState({
           products
        })
    })
}

render () {
    return(
        <>
    
        </>

    );
}
}