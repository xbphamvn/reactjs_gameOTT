const defaultReducer = {
    personChoosen: {
        value: "keo",
        imgSrc: "./images/game_oanTuTi/keo.png"
    },
    computerChosen: {
        value: "keo",
        imgSrc: "./images/game_oanTuTi/keo.png"
    },
    notice: "I'm iron man, i love you 3000 !!",
    soBanThang: 0,
    soBanChoi: 0
}

const createRandomValue = () => {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return 'keo';
    } else if (num === 2) {
        return 'bua';
    } else if (num === 3) {
        return 'bao';
    }
}

const getWinner = (person, computer) => {
    if (person.value === 'keo' && computer.value === 'keo') {
        return { notice: 'bạn hòa', soBanThang: 0 };
    } else if (person.value === 'keo' && computer.value === 'bua') {
        return { notice: 'bạn thua sấp mặt luôn!!!', soBanThang: 0 };
    } else if (person.value === 'keo' && computer.value === 'bao') {
        return { notice: "I'm iron man, i love you 3000 !!", soBanThang: 1 };
    } else if (person.value === 'bua' && computer.value === 'keo') {
        return { notice: "I'm iron man, i love you 3000 !!", soBanThang: 1 };
    } else if (person.value === 'bua' && computer.value === 'bua') {
        return { notice: 'bạn hòa', soBanThang: 0 };
    } else if (person.value === 'bua' && computer.value === 'bao') {
        return { notice: 'bạn thua sấp mặt luôn!!!', soBanThang: 0 };
    } else if (person.value === 'bao' && computer.value === 'keo') {
        return { notice: 'bạn thua sấp mặt luôn!!!', soBanThang: 0 };
    } else if (person.value === 'bao' && computer.value === 'bao') {
        return { notice: 'bạn hòa', soBanThang: 0 };
    } else if (person.value === 'bao' && computer.value === 'bua') {
        return { notice: "I'm iron man, i love you 3000 !!", soBanThang: 1 };
    }
}

const OanTuTiReducer = (state = defaultReducer, action) => {
    switch (action.type) {
        case 'OTT_PERSON_CLICKED':
            state.personChoosen = {
                value: action.text,
                imgSrc: `./images/game_oanTuTi/${action.text}.png`
            };
            state = { ...state };
            return { ...state };
        case 'CLICK_PLAY_BUTTON':
            let random = createRandomValue();
            state.computerChosen = {
                value: `${random}`,
                imgSrc: `./images/game_oanTuTi/${random}.png`
            }
            state = { ...state };
            return { ...state };
        case 'END_GAME':
            let winner = getWinner(state.personChoosen, state.computerChosen);
            state.notice = winner.notice;
            state.soBanThang += winner.soBanThang;
            state.soBanChoi++;
            state = { ...state };
            return { ...state };

        default:
            return { ...state };
    }
}

export default OanTuTiReducer;