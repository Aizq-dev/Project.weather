import React, { useContext, useEffect, useState,useReducer} from "react";
import "./input.css";
import { positionContext } from "../../context/positionContext";
import PopupMessage from "../PopupMessage/PopupMessage";
import { fetchCity } from "../../utils/fetchCity";
import reducer from "../../reducer/reducer";
const input = () => {
  // const [query, setQuery] = useState("");
  // const [cities, setCities] = useState("");
  const {stateContext, sendAction } = useContext(positionContext);
  // const [visible, setVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [state,dispatch]=useReducer(reducer, {
    query: '',
    cities: '',
    visible: false,
    loading: false
  })
  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      handleSearch();
    }
  };
  const handleInputChange = (ev) => {
    dispatch({type: 'inputQuery', payload:(ev.target.value)});
  };

  const handleSearch = () => {
    dispatch({type: 'search'})
    // setLoading(true);
    // setPermiss(true);
    fetchCity(state, dispatch);
    
  };
  const handleOptionClick = (ev) => {
    dispatch({type: 'cleanInput'})
    sendAction({type:'updateLanAndLot', payload:{lat:ev.lat, lon: ev.lon}})
    console.log(state)
    // setLat(ev.lat);
    // setLon(ev.lon);
    // setTrigger((prevTrigger) => !prevTrigger);
    // setQuery("");
    // setCities("");
  };
console.log(state)
  useEffect(() => {
    if ( state.cities.length == 0){
      
    setTimeout(() => {
      dispatch({type: 'invisible'})
    },3000);}
  }, [state.cities]);

  return (
    <div className="search">
      <label htmlFor="searcher" className="label_input">
        <div className="div_input">
          <input
            id="searcher"
            value={state.query}
            className="searcher-input"
            type="text"
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
            placeholder="Search a city"
          />
          <button onClick={handleSearch} className="searcher-button">
            <img className="lupa" src="./lupa.png" />
          </button>
        </div>
        <div className="label_options">
          {state.loading && <img src="loading.gif" />}
          {state.cities && !state.loading && (
            <ul className="options" id="options">
              {Object.values(state.cities).map((option) => (
                <li
                  key={`${option.lat}-${Math.random()}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.name}, {option.country}, {option.state}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>

      <PopupMessage message="City not founded" visible={state.visible} />
    </div>
  );
};

export default input;
