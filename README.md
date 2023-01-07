Melodica

This application lets the user discover different styles of traditional music from around the world. The website generates a spotify playlist of 15 random tracks based 
on a selected geographical region. The user is able to select each track and add them to their favorites. The website also features search engines for geographical 
regions and available tracks. The profile page is where the user can view their favorite tracks and use them to create their own custom playlists.

The website makes heavy use of the Spotify API to fetch information about the tracks, the artists and the albums. The user has to login into their Spotify account 
to make use of this application 

The Frontend uses JavaScript for the logic and React.js to render the different pages which are styled with HTML and CSS.

The Backend uses a Mongo DB database that stores the Spotify IDs of various artists which are used to fetch their top 10 tracks from the Spotify API when a region is 
selected by the user.


