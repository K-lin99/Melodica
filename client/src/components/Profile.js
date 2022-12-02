import {useEffect, useState, useContext} from 'react';
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const Profile = () => {
    const {user} = useContext(ArtistsTracksContext);


    return (
        <h1>Profile</h1>
    )
};

export default Profile;