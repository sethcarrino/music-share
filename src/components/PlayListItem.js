import React, { Component } from 'react';

class PlayListItem extends Component {
  render() {
    let cards = this.props.songs.map( song => {
      return (
          <ul className="card song-card" key={song._id}>
            <li>
              <span className="desc">User:</span> {song.userName}
            </li>
            <li>
              <span className="desc">Artist/Band:</span> {song.songArtist}
            </li>
            <li>
              <span className="desc">Title:</span> {song.songTitle}
            </li>
            <li>
              <span className="desc">Notes:</span> {song.songNotes}
            </li>
          </ul>
        );
      });
      return (
        <div className="cards">
          {cards}
        </div>
      );
    }
  }

export default PlayListItem;
