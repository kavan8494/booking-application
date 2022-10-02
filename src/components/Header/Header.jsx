import { useState } from "react";
import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import {useNavigate} from "react-router-dom"
function Header({type}) {
  const [opendate, setOpendate] = useState(false);
  const[openoption,setOpenoption]=useState(false)
  const[destination,setDestination]=useState("")
  const [option, setoption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate=useNavigate()
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const optionhandle = (name, operation) => {
    setoption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const handleSearch=()=>{
    navigate("/hotel",{state:{destination,date,option}})
  }
  return (
    <div className="header">
      <div className={type=="list"?"headercontainer listmod":"headercontainer"}>
        <div className="headerlist">
          <div className="headerlistitems active">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faPlane} />
            <span>stay</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faCar} />
            <span>stay</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="headerlistitems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>stay</span>
          </div>
        </div>
      { type !=="list" &&<>
        <h1 className="headeritem">a lifetime of discount? that is genius</h1>
        <p className="headerdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, a.
        </p>
        <button className="headerbtn">sign in /register</button>
        <div className="headersearch">
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed} className="headericon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headersearchinput"
              onChange={e=>setDestination(e.target.value)}
            />  
          </div>
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendar} className="headericon" />
            <span
              onClick={() => setOpendate(!opendate)}
              className="headersearchtext"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {opendate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson} className="headericon" />
            <span onClick={()=>setOpenoption(!openoption)} className="headersearchtext">{`${option.adult} adult ${option.children} children ${option.room} room `}</span>
         {openoption && <div className="option">
              <div className="optionitem">
                <span className="optiontext">adult</span>
                <div className="optioncounter">
                  <button
                    disabled={option.adult <= 1}
                    className="optioncounterbtn"
                    onClick={() => optionhandle("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optioncounternumber">{option.adult}</span>
                  <button
                    className="optioncounterbtn"
                    onClick={() => optionhandle("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionitem">
                <span className="optiontext">children</span>
                <div className="optioncounter">
                  <button
                   disabled={option.children <= 0}
                    className="optioncounterbtn"
                    onClick={() => optionhandle("children", "d")}
                  >
                    -
                  </button>
                  <span className="optioncounternumber">{option.children}</span>
                  <button
                    className="optioncounterbtn"
                    onClick={() => optionhandle("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionitem">
                <span className="optiontext">room</span>
                <div className="optioncounter">
                  <button
                   disabled={option.room <= 1}
                    className="optioncounterbtn"
                    onClick={() => optionhandle("room", "d")}
                  >
                    -
                  </button>
                  <span className="optioncounternumber">{option.room}</span>
                  <button
                    className="optioncounterbtn"
                    onClick={() => optionhandle("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headersearchitem">
            <button className="headerbtn" onClick={handleSearch}>search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header;
