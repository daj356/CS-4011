/*****************************/
/* Daniel Janis              */
/* Project 1 - Star Wars API */
/* Planets.js                */
/*****************************/

import React from 'react'
import {Card, Grid, Segment, Image, Modal, Button} from 'semantic-ui-react';
import GetFilm from './getFilm';

let planet_pics = [
    "https://media.mnn.com/assets/images/2014/06/alderaan.jpg.638x0_q80_crop-smart.jpg",
    "https://i.redd.it/ig9ectnjbgsz.jpg",
    "https://assets.vg247.com/current/2015/11/star_wars_battlefront_hoth-1.jpg",
    "https://i.kinja-img.com/gawker-media/image/upload/s--X-iEQp4v--/c_fill,fl_progressive,g_center,h_450,q_80,w_800/fuf7x2czccyh1x18djy7.gif",
    "https://i.ytimg.com/vi/X3v6TwosjIc/maxresdefault.jpg",
    "https://media.contentapi.ea.com/content/legacy/starwars-ea-com/en_US/starwars/battlefront/news-articles/the-star-wars-battlefront-planets--creating-endor/_jcr_content/body/image_2/renditions/rendition1.img.jpg",
    "http://media.comicbook.com/2017/06/naboo-1000278.jpg",
    "https://media.giphy.com/media/gzH0Ot4gJQuo8/giphy.gif",
    "http://img.lum.dolimg.com/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780",
    "http://vignette2.wikia.nocookie.net/starwars/images/3/3d/JediGeonosisArena.png/revision/latest?cb=20140722223459",
    "https://media.giphy.com/media/SwWArXxnlG6Bi/giphy.gif",
    "https://pa1.narvii.com/6411/f98f04c211a566d8dc1d341e0c076ff2591003fb_hq.gif",
    "https://i.ytimg.com/vi/1O9a014y4S8/maxresdefault.jpg",
    "http://vignette2.wikia.nocookie.net/starwars/images/d/d2/Polis_Massa_surface.jpg/revision/latest?cb=20151014200906",
    "https://i.ytimg.com/vi/5UEPJS0BeD0/maxresdefault.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/databank_felucia_01_169_2070e38e.jpeg?region=0%2C49%2C1560%2C780",
    "https://i.ytimg.com/vi/p1kEwsU9KFk/maxresdefault.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/databank_saleucami_01_169_3036720a.jpeg?region=0%2C49%2C1560%2C780",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4120ac2-ce94-4111-aff1-a53c7c2998bf/d21tbs0-ba4f662a-3465-4dc3-856b-696c4077cd91.jpg/v1/fill/w_1082,h_739,q_75,strp/night_by_vofff.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9lNDEyMGFjMi1jZTk0LTQxMTEtYWZmMS1hNTNjN2MyOTk4YmYvZDIxdGJzMC1iYTRmNjYyYS0zNDY1LTRkYzMtODU2Yi02OTZjNDA3N2NkOTEuanBnIiwid2lkdGgiOiI8PTEwODIiLCJoZWlnaHQiOiI8PTczOSJ9XV19.DKkcymtIM1HWqeg2_1mgI-PN_wHHgBfO9jXPCUK_CEc",
    "http://images4.wikia.nocookie.net/__cb20070814191912/swfanon/images/b/b3/Eriadu_Battle_3.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/corellia-main_b70b23a7.jpeg?region=0%2C0%2C1280%2C640",
    "https://lumiere-a.akamaihd.net/v1/images/databank_rodia_01_169_6f76b79d.jpeg?region=0%2C49%2C1560%2C780",
    "http://img2.wikia.nocookie.net/__cb20110913173731/swtor/images/b/b8/Hutta02.jpg",
    "http://images.wikia.com/starwars/images/4/41/Dantoo.jpg",
    "http://img3.wikia.nocookie.net/__cb20090821011616/swg/images/4/44/Bestine_hill.jpg",
    "https://fsr2n.files.wordpress.com/2013/10/ord-mantell.jpg",
    "",
    "https://i.ytimg.com/vi/_L5PCMmK0m0/hqdefault.jpg",
    "https://southwestdesertlover.files.wordpress.com/2012/07/balloon-festival-socorro-nm.jpg",
    "http://static2.wikia.nocookie.net/__cb20121121050443/starwars/images/5/50/BattleOfMonCalamari-SWBlog.png",
    "http://vignette3.wikia.nocookie.net/starwars/images/a/a1/Red-Reaper-Chandrila.png/revision/latest?cb=20150309175823",
    "http://vignette1.wikia.nocookie.net/battlefront/images/6/6d/Sullust_11.jpg/revision/latest/scale-to-width-down/2000?cb=20160726071054",
    "https://lumiere-a.akamaihd.net/v1/images/databank_toydaria_01_169_70b20e0e.jpeg?region=0%2C49%2C1560%2C780",
    "https://lumiere-a.akamaihd.net/v1/images/databank_malastare_01_169_59df245f.jpeg?region=0%2C49%2C1560%2C780",
    "https://lumiere-a.akamaihd.net/v1/images/databank_dathomir_01_169_304c5db2.jpeg?region=0%2C49%2C1560%2C780",
    "https://imperialtalker.files.wordpress.com/2017/08/ryloth_aftermath.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/databank_aleen_01_169_40bcb2df.jpeg?region=0%2C49%2C1560%2C780",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/010b592d-59bc-484c-a16f-b571ecf5927b/d2og39t-08b195d2-2f5f-46bf-a82e-c491c62f817f.jpg/v1/fill/w_900,h_675,q_75,strp/planet_vulpter___star_wars_by_oscarmiranda90.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wMTBiNTkyZC01OWJjLTQ4NGMtYTE2Zi1iNTcxZWNmNTkyN2IvZDJvZzM5dC0wOGIxOTVkMi0yZjVmLTQ2YmYtYTgyZS1jNDkxYzYyZjgxN2YuanBnIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9Njc1In1dXX0.j89KRHo7_RNg6UjWNpDcrSNzo4chKgoAiLFHqAJayT0",
    "https://vignette.wikia.nocookie.net/starwars/images/c/ce/Troiken.jpg/revision/latest?cb=20190503110140",
    "http://img3.wikia.nocookie.net/__cb20051102142339/starwars/images/4/4f/Tund.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bbec1902-7fe2-492e-8630-444ebdd206ba/d8btwwe-3b8d0356-a9d4-4bf2-a90b-531ce0fa2bf4.png/v1/fill/w_1024,h_576,q_75,strp/mahiyana_on_haruun_kal_by_crestfallencelestia-d8btwwe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9iYmVjMTkwMi03ZmUyLTQ5MmUtODYzMC00NDRlYmRkMjA2YmEvZDhidHd3ZS0zYjhkMDM1Ni1hOWQ0LTRiZjItYTkwYi01MzFjZTBmYTJiZjQucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTU3NiJ9XV19.qbrhNXnh5VJNEM8WOEpQ31efA8zuNRROdJJ7cq2zuQk",
    "http://img2.wikia.nocookie.net/__cb20090712174443/starwars/images/5/55/Cereawithcitadel.jpg",
    "http://img2.wikia.nocookie.net/__cb20140523184333/middleearthshadowofmordor7723/images/thumb/5/59/Minas_Morgul.jpg/1024px-Minas_Morgul.jpg",
    "http://pm1.narvii.com/6470/54a8ef25815e2fefd798550b1eab7de2c07542f9_00.jpg",
    "",
    "https://vignette.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png/revision/latest/scale-to-width-down/500?cb=20180501025533",
    "https://vignette.wikia.nocookie.net/starwars/images/2/29/Quermia_NEGAS.jpg/revision/latest/scale-to-width-down/500?cb=20070701083603",
    "http://vignette2.wikia.nocookie.net/fr.starwars/images/2/21/Dorin.jpg/revision/latest?cb=20150511120112",
    "http://static2.wikia.nocookie.net/__cb20061114221733/starwars/images/d/d7/Champala_NEGAS.jpg",
    "http://images1.wikia.nocookie.net/__cb20111020204117/swtor/de/images/d/d9/Mirialaner-01.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/databank_serenno_01_169_0541fc55.jpeg?region=0%2C49%2C1560%2C780",
    "https://vignette.wikia.nocookie.net/starwarsrebels/images/6/63/Concord_Dawn.jpeg/revision/latest?cb=20160128043219",
    "http://images2.wikia.nocookie.net/__cb20070701111502/starwars/images/6/66/Zolan.jpg",
    "https://starwarsrpg.pettycomp.net/Images/Planets/Ojom.jpg",
    "http://img.lum.dolimg.com/v1/images/Skako-Minor_5af1ee3b.jpeg?region=0%2C49%2C1560%2C780",
    "https://vignette.wikia.nocookie.net/es.starwars/images/c/c8/Muunilinst_10.PNG/revision/latest?cb=20081008125252",
    "https://lumiere-a.akamaihd.net/v1/images/databank_kiros_01_169_0251a718.jpeg?region=0%2C49%2C1560%2C780",
    "https://vignette.wikia.nocookie.net/swfanon/images/6/68/KaleeTemple.jpg/revision/latest?cb=20080728200619",
    "http://img4.wikia.nocookie.net/__cb20111022235608/starwars/images/d/d9/Umbarans-SWE.jpg",
    "https://a57.foxnews.com/images.foxnews.com/content/fox-news/science/2015/04/03/planets-like-tatooine-from-star-wars-may-exist/_jcr_content/par/featured-media/media-1.img.jpg/0/0/1444148389725.jpg?ve=1",
    "https://i.ytimg.com/vi/ZjzMufktVZ4/maxresdefault.jpg"

];

// Extracts the data props from: 
// https://swapi.co/api/planets/?format=json
export default function Planets({data}) {
    return (
        <>
            <h1>Planets:</h1>
            <Grid columns={2}>
                {data.map((planets, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Segment inverted size={'mini'}>
                                <Card fluid color='black'>
                                    <Card.Content>
                                        <Card.Header>
                                            {planets.name}
                                        </Card.Header>
                                        <Image src={planet_pics[i]}/>
                                        <Card.Description>
                                            <Segment color='black' size={'big'}>
                                                <strong>Climate</strong>
                                                <p>{planets.climate}</p>
                                                <strong>Terrain</strong>
                                                <p>{planets.terrain}</p>
                                                <strong>Population</strong>
                                                <p>{planets.population}</p>
                                                <strong>Films</strong>
                                                <p>{planets.films.map(s=> (<><GetFilm data={s}/></>))}</p>
                                                <Modal size='large' trigger={<Button>Show more</Button>}>
                                                    <Modal.Header>{planets.name}</Modal.Header>
                                                    <Modal.Description>
                                                        <strong>Rotation period:</strong>
                                                        <p>{planets.rotation_period}</p>
                                                        <strong>Orbital period:</strong>
                                                        <p>{planets.orbital_period}</p>
                                                        <strong>Diameter:</strong>
                                                        <p>{planets.diameter}</p>
                                                        <strong>Gravity:</strong>
                                                        <p>{planets.gravity}</p>
                                                        <strong>Surface water:</strong>
                                                        <p>{planets.surface_water}</p>
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