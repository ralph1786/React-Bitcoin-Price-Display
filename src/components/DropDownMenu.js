import React, { useState, useEffect } from "react";
import axios from "axios";

const DropDownMenu = props => {
  const [listCurrencyNations, setListCurrencyNations] = useState([]);

  const getListCurrencyNations = async () => {
    try {
      let response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.coindesk.com/v1/bpi/supported-currencies.json"
      );
      let data = response.data;
      setListCurrencyNations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListCurrencyNations();
  }, []);

  const listOfNations = listCurrencyNations.map((nation, index) => {
    return (
      <option key={index} value={nation.currency}>
        {nation.country}
      </option>
    );
  });
  return (
    <div>
      <select style={styling} value={props.value} onChange={props.handleChange}>
        {listOfNations}
      </select>
    </div>
  );
};

const styling = {
  width: "100px",
  marginLeft: "25px",
  marginBottom: "20px"
};

export default DropDownMenu;
