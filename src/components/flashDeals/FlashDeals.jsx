import React from "react";
import PropTypes from "prop-types";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ productItems, addToCart }) => {
    return (
        <section className="flash">
            <div className="container">
                <div className="heading f_flex">
                    <i className="fa fa-bolt"></i>
                    <h1>Flash Delas</h1>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart} />
            </div>
        </section>
    );
};

FlashDeals.propTypes = {
    productItems: PropTypes.any,
    addToCart: PropTypes.any
};

export default FlashDeals;
