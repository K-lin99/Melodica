

const GetSongs = ({token}) => {
    const artistId = "";
    const getTracks = async (artistId) => {
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
    }

    getTracks("58lV9VcRSjABbAbfWS6skp")

}

export default GetSongs