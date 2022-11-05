import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state = {
    listColection: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    this.setState({
      listColection: response.slice(1),
      infoColection: response[0],
    });
  }

  render() {
    const { listColection, infoColection } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {
          infoColection
            ? (
              <div>
                <h3 data-testid="artist-name">
                  {infoColection.artistName}
                </h3>
                <h4 data-testid="album-name">
                  {infoColection.collectionName}
                </h4>
                <MusicCard listColection={ listColection } />
              </div>
            )
            : (
              <p>nada</p>
            )
        }

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.shape,
    }).isRequired,
  }).isRequired,
};

export default Album;
