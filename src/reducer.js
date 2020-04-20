const initialState = {
    nilai: 0
}

const TAMBAHNILAI = 'TAMBAHNILAI';
const KURANGNILAI = 'KURANGNILAI';
const RESETNILAI = 'RESETNILAI';

export { TAMBAHNILAI, KURANGNILAI, RESETNILAI }

export default (state = initialState, action = {}) => {
    console.log('reducer');
    console.log(action.type)
    switch (action.type) {
        case TAMBAHNILAI:
            state.nilai++                   //nilai + 1
            break;
        case KURANGNILAI:
            state.nilai--                   //nilai - 1
            break;
    
        default:
            console.log('default')
            state.nilai = 0                 //nilai = 0
            break;
    }
    console.log(state)
    return Object.assign({}, state);
}