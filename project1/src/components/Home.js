import React from 'react'
import {Image} from 'semantic-ui-react'

export default function Home() {
    return (
        <div>
            <p>Welcome to the Star Wars API!</p>
            <p>None of the data on this website is mine! I am not claiming it, simply showing it off.</p>
            <p>Sometimes the data doesn't load properly, I apologize. Reloading seems to help.</p>
            <Image src = 'https://media.giphy.com/media/pvDp7Ewpzt0o8/giphy.gif' size='huge'/>
        </div>
    )
}
