import React, { Component} from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {

    playerInput = React.createRef()

    static propTypes = {
        addPlayer: PropTypes.func
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset()
    }

    render() {
        console.log(this.playerInput)
        return(
            <form onSubmit={this.handleSubmit} >
                <input
                    type='text'
                    placeholder='Add Player Name'
                    ref={this.playerInput}
                />
                <input
                    type='submit'
                    value='Add Player'
                />
            </form>
        )
    }
}


export default AddPlayerForm;