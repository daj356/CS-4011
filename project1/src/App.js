import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Characters from './components/Characters';
import Films from './components/Films';
import Planets from './components/Planets';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';

function App() {
  // Sets state variables: Character, Film, Planet
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetches the characters
    async function fetchCharacters() {
      let current_url = 'https://swapi.co/api/people/?format=json';
      const page = [];

      do {
        let resource = await fetch(current_url);
        let data = await resource.json();
        current_url = data.next;
        page.push(...data.results);
      }
      while (current_url)
        setCharacters(page);
        setLoading(false);
    }
    // fetches the films
    async function fetchFilms() {
      let res = await fetch('https://swapi.co/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }
    // fetches the planets
    async function fetchPlanets() { 
      let current_url = 'https://swapi.co/api/planets/?format=json';
      const page = [];

      do {
        let resource = await fetch(current_url);
        let data = await resource.json();
        current_url = data.next;
        page.push(...data.results);
      }
      while (current_url)
        setPlanets(page);
        setLoading(false);
    }

    fetchCharacters();
    fetchFilms();
    fetchPlanets();
  }, []);
  return (
    <>
      {/* explain */}
      <Router>
        {/* Passes the Navbar to the top of the screen */}
        <Navbar />
        {/* Container for the buttons (characters, films, planets) */}
        <Container>
          {/* If loading is true, show this loader, otherwise display the button ribbon */}
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              {/* Links the home button to the home page */}
              <Route exact path = '/'>
                <Home />
              </Route>
              {/* Links the Characters button to the characters page */}
              <Route exact path = '/characters'>
                <Characters data ={characters}/>
              </Route>
              {/* Links the Films button to the films page */}
              <Route exact path = '/films'>
                <Films data ={films}/>
              </Route>
              {/* Links the Planets button to the planets page */}
              <Route exact path = '/planets'>
                <Planets data ={planets}/>
              </Route>
          </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
