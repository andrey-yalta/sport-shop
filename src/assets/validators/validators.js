export const requiredField = value =>{
    if(value) return undefined
    return  "Заполните поле"
}


export const maxLengthCreator = (maxLength)=> (value)=>{
    if(value && value.length >maxLength) return `Максимальная длинна должна быть не больше${maxLength} символов`
    return  undefined
}
export const minLengthCreator = (minLength)=> (value)=>{
    if(value && value.length  < minLength) return `Минимальная длинна должна быть ${minLength} символов`
    return  undefined
}

export const maxLength25 = maxLengthCreator(25)
export const minLength3 = minLengthCreator(3)
