import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleUserName = this.handleUserName.bind(this);
    this.handleSongArtist= this.handleSongArtist.bind(this);
    this.handleSongTitle = this.handleSongTitle.bind(this);
    this.handleSongNotes = this.handleSongNotes.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  handleUserName(e) {
    this.setState({userName: e.target.value});
  }

  handleSongArtist(e) {
    this.setState({songArtist: e.target.value});
  }

  handleSongTitle(e) {
    this.setState({songTitle: e.target.value});
  }

  handleSongNotes(e) {
    this.setState({songNotes: e.target.value});
  }

  // creating a function to call that will add to the list of songs
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  // fetch data and set state of songs
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  // render jsx
  render() {
    return (
      <form>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            name="userName"
            onChange={this.handleUserName}
            value={this.state.userName}
          />
        </div>
        <div>
          <label htmlFor="songArtist">Artist/Band: </label>
          <input
            type="text"
            name="songArtist"
            onChange={this.handleSongArtist}
            value={this.state.songArtist}
          />
        </div>
        <div>
          <label htmlFor="songTitle">Song Title: </label>
          <input
            type="text"
            name="songTitle"
            onChange={this.handleSongTitle}
            value={this.state.songTitle}
          />
        </div>
        <div>
          <label htmlFor="songNotes">Notes about Song: </label>
          <input
            type="text"
            name="songNotes"
            onChange={this.handleSongNotes}
            value={this.state.songNotes}
          />
        </div>
        <div>
          <input type="submit" value="Submit" onClick={this.addToList} />
        </div>
      </form>
    );
  }
}

export default PlayListForm;
