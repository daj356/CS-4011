import React from 'react'
import {Card, Grid, Segment, Modal, Button} from 'semantic-ui-react';
import GetHomeWorld from './getHomeWorld'
import GetFilm from './getFilm';

// Extracts the data props from: 
// https://swapi.co/api/people/?format=json
export default function Character({data}) {
    return (
        <>
            <h1>Character:</h1>
            <Grid columns={3} key={Grid.key}>
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
                                            <Segment color='black' size={'big'}>
                                                <strong>Gender:</strong>
                                                <p>{character.gender}</p>
                                                <strong>Height:</strong>
                                                <p>{character.height}</p>
                                                <strong>Homeworld:</strong>
                                                <p><GetHomeWorld data={character.homeworld}/></p>
                                                <strong>Films:</strong>
                                                <p>{character.films.map(s=> (<><GetFilm data={s}/></>))}</p>
                                                <Modal size='large' trigger={<Button>Show more</Button>}>
                                                    <Modal.Header>{character.name}</Modal.Header>
                                                    <Modal.Description>
                                                        <strong>Mass:</strong>
                                                        <p>{character.mass}</p>
                                                        <strong>Hair Color:</strong>
                                                        <p>{character.hair_color}</p>
                                                        <strong>Skin Color:</strong>
                                                        <p>{character.skin_color}</p>
                                                        <strong>Eye color:</strong>
                                                        <p>{character.eye_color}</p>
                                                        <strong>Birth Year:</strong>
                                                        <p>{character.birth_year}</p>
                                                    </Modal.Description>
                                                </Modal>
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
