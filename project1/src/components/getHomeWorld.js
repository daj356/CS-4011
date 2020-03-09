import React, {useState, useEffect } from 'react';

export default function GetHomeWorld ({data}) {
  let [, setCharacter] = useState([]); 
  const [, setLoading] = useState(true);

  useEffect(() => {
  async function fetchCharacter() {
    let url = data;
    let res = null;

    res = await fetch(url);
    data = await res.json();
    setCharacter(data.results);
    window.referencedHome = data.name;
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