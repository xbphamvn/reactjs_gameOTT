import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonPlayerOTT extends Component {
    render() {
        return (
            <div>
                <div className="speech__bubble p-1">
                    <div className="p-4 bg-light">
                        <img className="person__choosen" src={this.props.personChoosen.imgSrc} alt={this.props.personChoosen.value} />
                    </div>
                </div>
                <img className="playerAvatar" src="./images/game_oanTuTi/player.png" alt="player" />
                <button className="btn btn-light btn-sm mx-1" onClick={() => { this.props.personClicked('keo') }}>
                    <img className="person__choosen" src="./images/game_oanTuTi/keo.png" alt="img_lua_chon" />
                </button>
                <button className="btn btn-light btn-sm mx-1" onClick={() => { this.props.personClicked('bua') }}>
                    <img className="person__choosen" src="./images/game_oanTuTi/bua.png" alt="img_lua_chon" />
                </button>
                <button className="btn btn-light btn-sm mx-1" onClick={() => { this.props.personClicked('bao') }}>
                    <img className="person__choosen" src="./images/game_oanTuTi/bao.png" alt="img_lua_chon" />
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personChoosen: state.OanTuTiReducer.personChoosen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personClicked: (text) => {
            dispatch({
                type: 'OTT_PERSON_CLICKED',
                text
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonPlayerOTT);