export const incNum=(num)=>{
    return{
        type:'INC',
        payload:num
    }
}

export const decNum=()=>{
    return{
        type:'DEC'
    }
}

export const mulNum=(number)=>{
    return {
        type:'MUL',
        payloadMultiply:number
    }
}

export const devNum=()=>{
    return {
        type:'DEV'
    }
}