import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import '../index.css';

class Album extends Component {
  state = {
    data: 'data',
    musics: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const data = await getMusics(id);
    this.setState({
      data,
      musics: data.filter((music) => music.trackName),
    });
  }

  render() {
    const { data, musics } = this.state;
    const dataInfo = data[0];
    const { artistName, collectionName, artworkUrl100 } = dataInfo;

    return (
      <section>
        <Header />
        <div nameClass="Album-section">
          <div className="music-card">
            <img src={ artworkUrl100 } alt={ collectionName } />
            <h1 nameClass="artist-name">{ artistName }</h1>
            <h2 nameClass="album-name">{ collectionName }</h2>
            {musics.map((music) => (
              <MusicCard
                key={ music.trackName }
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
                trackId={ music.trackId }
                music={ music }
              />))}
          </div>
        </div>
      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Album;
