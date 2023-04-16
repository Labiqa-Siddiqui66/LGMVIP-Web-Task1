import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Date() {
    const [da, setDa] = useState("");
    return (
           <DatePicker className="date" selected={da} onChange={da => setDa(da)} placeholderText="Date:" />


    );
}