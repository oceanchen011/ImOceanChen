import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapComponent extends Component {
    render() {
        return (
            <div className="map-area">
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: 47.444,
                        lng: -122.176
                    }}
                />
            </div>
        );
    }
}

MapComponent.propTypes = {
    google: PropTypes.object.isRequired // Ensure google prop is included and is required
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD1h9-GPF1h0MJUH6-B9fzUDeE7p7zCwHk'
})(MapComponent);
