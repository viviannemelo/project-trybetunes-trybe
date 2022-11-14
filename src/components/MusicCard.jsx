import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../index.css';

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
      <div className="music-card-idividual">
        {
          isLoading
            ? (
              <Box sx={ { display: 'flex' } }>
                <CircularProgress />
              </Box>
            ) : (
              <section className="music-item">
                <p>{ trackName }</p>
                <audio src={ previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <Checkbox
                  id={ music.trackId }
                  icon={ <FavoriteBorder /> }
                  checkedIcon={ <Favorite /> }
                  type="checkbox"
                  onChange={ this.favoriteSongs }
                  checked={ favorited }
                />
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
