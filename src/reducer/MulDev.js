const iniitState=5;
const numberReducer2=(state=iniitState,action)=>{
    switch(action.type){
        case 'MUL': return state * action.payloadMultiply;

        case 'DEV': return state / 5;

        default : return state;
    }
}

export default numberReducer2;