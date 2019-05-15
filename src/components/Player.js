import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        index: PropTypes.number,
        id: PropTypes.number,
        score: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isHighScore: PropTypes.bool
    }

    render() {

        const {
            name,
            score,
            id,
            index,
            removePlayer,
            changeScore,
            isHighScore
        } = this.props
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={this.props.isHighScore} />
                    { name }
                </span>
                <Counter 
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;