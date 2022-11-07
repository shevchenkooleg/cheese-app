import {PostfixType} from "../bll/types";


export const postfixGenerator = (value: number, postfixType: PostfixType) => {


    if (postfixType === "hour") {
        switch (value) {
            case 1: {
                return 'час'
            }
                ;
            case 2: {
            }
                ;
            case 3: {
            }
                ;
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
                ;
            case 2: {
            }
                ;
            case 3: {
            }
                ;
            case 4: {
                return 'секунды'
            }
            default: {
                return 'секунд'
            }
        }
    }
}