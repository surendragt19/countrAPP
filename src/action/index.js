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