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