Melodica

This application lets the user discover different styles of traditional music from around the world. The website generates a spotify playlist of 15 random tracks based 
on a selected geographical region. The user is able to select each track and add them to their favorites. The website also features search engines for geographical 
regions and available tracks. The profile page is where the user can view their favorite tracks and use them to create their own custom playlists.

The website makes heavy use of the Spotify API to fetch information about the tracks, the artists and the albums. The user has to login into their Spotify account 
to make use of this application. 

The Frontend uses JavaScript for the logic and React.js to render the different pages which are styled with HTML and CSS.

The Backend uses a Mongo DB database that stores the Spotify IDs of various artists. When a region is selected, the IDs of the artists corresponding to the selected 
region are used to fetch their top 10 tracks. 

SHOWCASE:

The exploration page allows the user to select a continent that they'd like to explore. Alternatively, they can type in a geographical region in the search bar and 
select it before they generate a playlist.

![Exploration](https://user-images.githubusercontent.com/73728907/219441567-b60a2e0a-0b87-4c61-aefa-0b0171768298.png)

After selecting a continent, the user will see all the available geographical regions that contain some information about what the
user can expect to find. The header will display the selected region and a "+playlist" button will appear which generates the
playlist. The user can also use the search bar to find any particular songs.

![Regions page](https://user-images.githubusercontent.com/73728907/219442138-6d8cc6ab-f26b-4229-84b1-e991b41da7d2.png)

After generating a playlist, the user can check the playlist, the album, the song and the artist on Spotify.

![Playlist-Site](https://user-images.githubusercontent.com/73728907/219442997-17788825-2561-455b-912a-2905b3bfd125.png)

The user can also check the track on the Melodica app which allows them to favorite or unfavorite the track.

![Track](https://user-images.githubusercontent.com/73728907/219443480-f2bffa5d-8422-45c2-ae80-be04c51bf27b.png)

The profile page displays the information of the user's Spotify account and can link them to their account on Spotify. The user can also create their own custom 
playlists and fill them with their favorited tracks.

![Profile](https://user-images.githubusercontent.com/73728907/219443642-8c1c55a5-d96b-48a5-9af3-5f4ce6d77b14.png)

![Playlist-Custom](https://user-images.githubusercontent.com/73728907/219444583-83ee4185-c9b2-4c2f-b7ee-02fe44a6e999.png)

All of the created playlists are available in the user's Spotify! 

![Playlist-Spotify](https://user-images.githubusercontent.com/73728907/219445807-3ea56e74-87e0-4a0f-a542-4c6d9dc19c80.png)



