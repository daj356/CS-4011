import React from 'react'
import {Card, Grid, Segment} from 'semantic-ui-react';
import GetHomeWorld from './getHomeWorld'
import GetFilm from './getFilm';

// Extracts the data props from: 
// https://swapi.co/api/people/?format=json
export default function Character({data}) {
    return (
        <>
            <h1>Character</h1>
            <Grid columns={3}>
                {data.map((character, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Segment inverted size={'mini'}>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>
                                            {character.name}
                                        </Card.Header>
                                        <Card.Description>
                                            <Segment color='yellow' size={'big'}>
                                                <strong>Gender:</strong>
                                                <p>{character.gender}</p>
                                                <strong>Height:</strong>
                                                <p>{character.height}</p>
                                                <strong>Homeworld:</strong>
                                                <p><GetHomeWorld data={character.homeworld}/></p>
                                                <strong>Films:</strong>
                                                <p>{character.films.map(s=> (<><GetFilm data={s}/></>))}</p>
                                            </Segment>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Segment>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </>
    );
}
