import React from "react";

export default function Random({min, max}) {
    const x = (Math.floor(Math.Random) * (min - max) + min);
    return x;
}