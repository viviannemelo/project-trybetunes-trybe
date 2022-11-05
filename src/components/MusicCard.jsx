import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { listColection } = this.props;
    return (
      <div>
        {
          listColection.map((colection) => (
            <div key={ colection.trackId }>
              <p>{ colection.trackName }</p>
              <audio data-testid="audio-component" src={ colection.previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                {' '}
                <code>audio</code>
                .
              </audio>
            </div>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  listColection: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MusicCard;
