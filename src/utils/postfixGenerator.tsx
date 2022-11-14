import {PostfixType} from "../bll/types";


export const postfixGenerator = (value: number, postfixType: PostfixType) => {


    if (postfixType === "hour") {
        switch (value) {
            case 1: {
                return 'час'
            }
            case 2: {
            }
            case 3: {
            }
            case 4: {
                return 'часа'
            }
            default: {
                return 'часов'
            }
        }
    } else if (postfixType === "deg"){
        return '\u00b0C'
    } else if (postfixType === 'sec'){
        switch (value) {
            case 1: {
                return 'секунда'
            }
            case 2: {
            }
            case 3: {
            }
            case 4: {
                return 'секунды'
            }
            default: {
                return 'секунд'
            }
        }
    } else if (postfixType === 'min'){
        if (value === 1){return 'минута'}
        if (value > 1 && value < 5){return 'минуты'}
        if (value > 4 && value < 20){return 'минут'}
        if (value % 10 === 1){return 'минута'}
        if (value % 10 > 1 && value % 10 < 5){return 'минуты'} else
        {
            return 'минут'
        }
    } else if (postfixType === '%'){
        return '%'
    } else if (postfixType === 'cm'){
        return 'см'
    } else if (postfixType === 'g'){
        return 'г'
    }
}