/*****************************/
/* Daniel Janis              */
/* Project 1 - Star Wars API */
/* getFilm.js                */
/*****************************/

import React, {useState, useEffect } from 'react';

export default function GetFilm ({data}) {
  let [, setCharacter] = useState([]); 
  const [, setLoading] = useState(true);

  useEffect(() => {
  async function fetchCharacter() {
    let url = data;
    let res = null;

    res = await fetch(url);
    data = await res.json();
    setCharacter(data.title);
    window.referencedHome = data.title;
    setLoading(false);
  }
  if (window.referencedHome == null)
    window.referencedHome = "";
  fetchCharacter();
  }, []);
  return (
    <p>{window.referencedHome}</p>
  );
}
