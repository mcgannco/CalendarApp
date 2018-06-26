# Calendar App

A 2018 Calendar implementation that allows you to create, update and delete events

Live version [here](http://soundtown.herokuapp.com/#/).

## Functionality

## Front End Specs

Must Have Specs  
•The UI should have one month hard coded view (Pick any month)
•Ignore users/login, just have one hardcoded user
•Click on a day box, and be able to create a new event on that day which gets sent to the backend on clicking submit.
 ◦The form should have start time, end time, description and submit.
 ◦Once submit is clicked the form should disappear.
 ◦Event should now appear in that day’s box.
 ◦Events cannot span multiple days. Must start and end the same day.
•Show all events the user has on their calendar.
•The UI should have 4 rows of 7 boxes (simple case of a 28 day month).
•The application should communicate with an API backend using JSON. Don’t spend a lot of time on the UI making it look beautiful; just make it functional.can comment on any track, and delete and of their own comments on any given track

Dynamic Search
  * Users can search for songs using a custom built dynamic search bar

# Front End Optional Specs:
![Optional Text](./app/assets/images/cal.png)
The app features two different audio playing React components, the audio footer playbar and the album cover player.  The audio footer player is present on every page, which allows for continuous audio playback, and is which built off of HTML 5s audio tag. The audio player is built in sync with other custom built audio players throughout the site by transferring the audio's play / pause state through the redux state.  The audio element associated with the audio footer is updated through the global slice of state for play, pause, a change in the point of the song, and volume.

```javascript
{ currentSong:
 { song: {id: 23, user_id: 5, title: "SongTitle", etc...}
   isPlaying: False
 }
}
```

# Back End Specs (Minimum Required API):
![Optional Text](./app/assets/images/cal.png)
User have the ability to comment on any songs uploaded to SoundTown, as well as delete any comment that they write.  Comments are associated with the song they belong to and are rendered on each song show page in descending order

# Back End Specs (Optional):
![Optional Text](./app/assets/images/cal.png)
User have the ability to search for songs through a dynamic search bar.  When users type into the search bar, the SearchBar React component input value state is set to the letters typed by the users.  Subsequently, an AJAX request is fired off with the given search criteria, and returns all songs that meet the input values given by the user.

```javascript
componentDidMount() {
  this.props.searchSongs(this.state.inputVal);
}

handleInput(event) {
 this.setState({inputVal: event.currentTarget.value});
}
```

# Future Features:
* Waveforms
* Likes and Follows
* Playlists
* Additional views to help with discovering music
