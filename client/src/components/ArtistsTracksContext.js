import { createContext, useEffect, useState } from "react";

export const ArtistsTracksContext = createContext(null);

export const ArtistsTracksProvider = ({children, token}) => {
    const [artists, setArtists] = useState([]);
    const [continent, setContinent] = useState("");
    const [region, setRegion] = useState("");
    const [tracks, setTracks] = useState([]);
    
    console.log(artists);
    console.log(continent);
    console.log(region);
    
    useEffect(() => {
        fetch(`/api/get-artists/${continent}/${region}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            setArtists(data.data.map((artist) => {
                return artist.id;
            }));
        })
        .catch((error) => {
            console.log(error);
        })
    },[region])



    useEffect(() => {
        artists.forEach((artistId) => {
            let tracksParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
            fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, tracksParameters)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
    },[artists])

    return (
        <ArtistsTracksContext.Provider value = {{setContinent, setRegion}}>
            {children}
        </ArtistsTracksContext.Provider>
    )
}