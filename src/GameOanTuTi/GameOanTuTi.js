import React, { Component } from 'react';
import './GameOanTuTi.css';
import ComputerPlayerOTT from './ComputerPlayerOTT';
import PersonPlayerOTT from './PersonPlayerOTT';
import ThongTinGameOTT from './ThongTinGameOTT';

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="gameOTT">
                <div className="row container mx-auto py-5 text-center">
                    <div className="col-3">
                        <PersonPlayerOTT />
                    </div>
                    <div className="col-6">
                        <ThongTinGameOTT />
                    </div>
                    <div className="col-3">
                        <ComputerPlayerOTT />
                    </div>
                </div>
            </div>
        )
    }
}
