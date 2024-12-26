import React, { useState, useEffect } from 'react';
import Cards from './card';
import data from './../dataimages.json';
import './cards.css'

function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <>
    <div><center><h2>NAWNIT STUDIO UMEDANDA</h2><br></br><h3>PHOTO FRAME ORDER</h3></center></div>
       <div className="card_container_parent">
          {(
            users.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          )},
        </div>
    </>
  );
}

export default List;