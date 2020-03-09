import React, {useState, useEffect } from 'react';

export default function GetPlanet ({data}) {
  let [, setFilms] = useState([]); 
  const [, setLoading] = useState(true);

  useEffect(() => {
  async function fetchFilms() {
    let url = data;
    let res = null;

    res = await fetch(url);
    data = await res.json();
    setFilms(data.name);
    window.referencedHome = data.name;
    setLoading(false);
  }
  if (window.referencedHome == null)
    window.referencedHome = "";
  fetchFilms();
  }, []);
  return (
    <p>{window.referencedHome}</p>
  );
}