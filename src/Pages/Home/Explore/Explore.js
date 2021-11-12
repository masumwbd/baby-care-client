import React from 'react';
import { Link } from 'react-router-dom';

const Explore = ({ exp }) => {
    const { _id, name, price, description, imgURL } = exp;
    return (
        <div>
            <div>
                <div class="col mt-5">
                    <div class="card h-100">
                        <img className=" service-img mx-auto" src={imgURL} alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">{name.slice(0, 20)}</h5>
                            <p class="card-text">{description?.slice(0, 150)}</p>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <span className="fs-5 fw-bold text-danger"> $ {price}</span>
                                </div>
                                <div>
                                    <Link to={`/purchase/${_id}`}><button className="btn btn-outline-dark fw-bold btn-sm">Buy Now <i class="fas fa-cart-plus"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;