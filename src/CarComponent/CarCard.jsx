import React, { Component } from 'react'

export default class CarCard extends Component {
    render() {

        let { Car } = this.props;

        let { CarItem } = this.props;

        return (
            <div>
                <div className="card text-black bg-white">
                    <img className="card-img-top" src={Car.img} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{Car.name}</h4>
                        <p className="card-text">{Car.price}</p>
                        <button className="btn btn-success text-white" onClick={() => {
                            this.props.xeDuocChon(Car);
                        }} data-toggle="modal" data-target="#exampleModal">Xem chi tiết</button>
                    </div>
                </div>

                <div>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{CarItem.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img width="100%" src={CarItem.img} alt="..." />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
