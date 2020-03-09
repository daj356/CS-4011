import React from 'react'
import {Card, Grid, Segment, Image} from 'semantic-ui-react';

let movie_pics = [
    "https://i.ytimg.com/vi/sDMPTZ7y1lE/hqdefault.jpg",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7674047/star-wars-episode-ii-attack-of-the-clones-2.jpg?1478110337",
    "https://upload.wikimedia.org/wikipedia/en/0/01/The_Phantom_Menace_ost.jpg",
    "https://i.ytimg.com/vi/rDt3_11tHnY/hqdefault.jpg",
    "https://i.ytimg.com/vi/6C9ISCzfoAs/hqdefault.jpg",
    "https://i.ytimg.com/vi/cUtYuwnJsS0/hqdefault.jpg",
    "https://dvdcommentary.files.wordpress.com/2015/10/the-force-awakens-poster-e1445316019680.jpg?w=375"
];

// Extracts the data props from: 
// https://swapi.co/api/films/?format=json
export default function Films({data}) {
    return (
        <>
            <h1>Films</h1>
            <Grid columns={1}>
                {data.map((films, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Segment inverted size={'big'}>
                                <Card fluid color='black'>
                                    <Card.Content>
                                        <Card.Header>
                                            {films.title}
                                        </Card.Header>
                                        <Image src={movie_pics[i]} />
                                        <Card.Description>
                                            <Segment color='yellow' size={'big'}>
                                                <strong>Episode:</strong>
                                                <p>{films.episode_id}</p>
                                                <strong>Directed by:</strong>
                                                <p>{films.director}</p>
                                                <strong>Released:</strong>
                                                <p>{films.release_date}</p>
                                                <strong>Opening credits:</strong>
                                                <p>{films.opening_crawl}</p>
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