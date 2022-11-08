import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  state = {
    isLoading: false,
    favorited: false,
  };

  componentDidMount() {
    this.getSong();
  }

  favoriteSongs = ({ target: { checked } }) => {
    const { music } = this.props;
    this.setState({ isLoading: true }, async () => {
      if (checked === true) {
        await addSong(music);
        this.setState({ isLoading: false, favorited: true });
      } else {
        await removeSong(music);
        this.setState({ isLoading: false, favorited: false });
      }
    });
  };

  getSong = () => {
    const { music } = this.props;
    this.setState({ isLoading: true }, async () => {
      const favoriteSongs = await getFavoriteSongs();
      favoriteSongs.forEach((song) => {
        if (song.trackId === music.trackId) {
          this.setState({ favorited: true });
        }
      });
    });
    this.setState({ isLoading: false });
  };

  render() {
    const { music, previewUrl, trackName } = this.props;
    const { isLoading, favorited } = this.state;
    return (
      <div>
        {
          isLoading ? <Loading /> : (
            <section>
              <p>{ trackName }</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                {' '}
                <code>audio</code>
                .
              </audio>
              <label htmlFor="checkBox">
                Favorita
                <input
                  data-testid={ `checkbox-music-${music.trackId}` }
                  id={ music.trackId }
                  type="checkbox"
                  onChange={ this.favoriteSongs }
                  checked={ favorited }
                />
              </label>
            </section>
          )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;
