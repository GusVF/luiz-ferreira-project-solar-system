import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section>
        <div
          data-testid="mission-card"
          className="missions"
        >
          <p data-testid="mission-name">
            {name}
          </p>
          <p data-testid="mission-year">
            {year}
          </p>
          <p data-testid="mission-country">
            {country}
          </p>
          <p data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
