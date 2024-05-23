import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const RangeSlider = ({minPrice, maxPrice, setMinPrice, setMaxPrice}) => {
    const handleInput = (e) => {
        setMinPrice(e.minValue);
        setMaxPrice(e.maxValue);
    };

    return (
        <div className="App">
            <MultiRangeSlider
                min={0}
                max={500}
                step={5}
                minValue={minPrice}
                maxValue={maxPrice}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    );
};

export default RangeSlider;
