import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header'
import SearchItem from '../../components/searchItem/SearchItem'
import {useLocation} from 'react-router-dom'
import {format} from "date-fns";
import { DateRange } from "react-date-range";


import "./List.css"
import { useState } from 'react'
const List = () => {
  const location=useLocation();
  const [destination,setDestination]=useState(location.state.destination);
  const [date,setDate]=useState(location.state.date);
  const [option,setoption]=useState(location.state.option);
  const [opendate,setopendate]=useState(false)
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listcontainer">
          <div className="listwrapper">
          <div className="listsearch">
            <h1 className="listtitle">search</h1>
            <div className="listitem">
              <label>destination</label>
              <input placeholder='destination' type="text" />
            </div>
            <div className="listitem">
              <label>check-in-date</label>
              <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {opendate && <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}
            </div>
            <div className="listitem">
              <label for="">options</label>
              <div className="listoptionitem">
                <span className="listoptiontext">min price
                <small>pernight</small></span>
                <input type="number"  className="listoptioninput" />
              </div>
              <div className="listoptionitem">
                <span className="listoptiontext">max price
                <small>pernight</small></span>
                <input type="number" className="listoptioninput" />
              </div>
              <div className="listoptionitem">
                <span className="listoptiontext">adult
              </span>
                <input min={1} placeholder={option.adult} type="number" className="listoptioninput" />
              </div>
              <div className="listoptionitem">
                <span className="listoptiontext">children
                </span>
                <input min={0} placeholder={option.children} type="number" className="listoptioninput" />
              </div>
              <div className="listoptionitem">
                <span className="listoptiontext">room
                </span>
                <input min={1} placeholder={option.room} type="number" className="listoptioninput" />
              </div>
            </div>
            <button>search</button>
          </div>
          <div className="listresult">
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default List
