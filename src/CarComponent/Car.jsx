import React, { Component } from 'react'
import CarCard from './CarCard';

export default class Car extends Component {

    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];

    state = {
        CarItem:  { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
    }

    xeDuocChon = (xe) =>{
        this.setState({
            CarItem: xe,
        });
    }

    renderCar = () =>{
        return this.products.map((item, index)=>{
            return <div className="col-4" key={index}>
                <CarCard Car={item} xeDuocChon={this.xeDuocChon} CarItem={this.state.CarItem} />
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="font-weight-bold text-left">Danh sách xe</h3>
                <div className="row">
                    {this.renderCar()}
                </div>
            </div>
        )
    }
}
