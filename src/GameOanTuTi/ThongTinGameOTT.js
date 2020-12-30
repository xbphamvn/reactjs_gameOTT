import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinGameOTT extends Component {
    render() {
        return (
            <div>
                <p className="gameOTT__notice">{this.props.notice}</p>
                <p className="gameOTT__result">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></p>
                <p className="gameOTT__result">Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></p>
                <div className="text-center">
                    <button className="btn btn-success" onClick={() => { this.props.clickPlayBtn() }}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notice: state.OanTuTiReducer.notice,
        soBanThang: state.OanTuTiReducer.soBanThang,
        soBanChoi: state.OanTuTiReducer.soBanChoi
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickPlayBtn: () => {
            let count = 0;
            let random = setInterval(() => {
                dispatch({
                    type: 'CLICK_PLAY_BUTTON'
                });
                count++;
                if (count > 12) {
                    clearInterval(random);
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 150);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGameOTT);