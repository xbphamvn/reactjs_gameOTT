import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComputerPlayerOTT extends Component {
    render() {
        const keyFrame = `@keyframes computerChoosen${Date.now()} {
            0% {
                transform: translateY(-35px) rotate(120deg);
                opacity: 0;
            }
            25% {
                transform: translateY(-20px) rotate(120deg);
                opacity: 1;
            }
            50% {
                transform: translateY(0) rotate(120deg);
                opacity: 1;
            }
            75% {
                transform: translateY(15px) rotate(120deg);
                opacity: 1;
            }
            100% {
                transform: translateY(25px) rotate(120deg);
                opacity: 1;
            }
        }`;

        return (
            <div>
                <div className="speech__bubble p-1">
                    <div className="p-4 bg-light">
                        <img className="computer__choosen" style={{ animation: `computerChoosen${Date.now()} .15s` }} src={this.props.computerChosen.imgSrc} alt={this.props.computerChosen.value} />
                        <style>
                            {keyFrame}
                        </style>
                    </div>
                </div>
                <img className="playerAvatar" src="./images/game_oanTuTi/playerComputer.png" alt="player" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computerChosen: state.OanTuTiReducer.computerChosen
    }
}

export default connect(mapStateToProps)(ComputerPlayerOTT);