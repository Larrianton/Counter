import {ACTIONS_TYPE, CounterReducerType, RootStateType} from "./actions";

export const counterReducer = (state: RootStateType, action: CounterReducerType) => {
       switch (action.type) {
        case ACTIONS_TYPE.INCR_COUNTER : {
            if (state.counter < state.maxValue) {
                return {...state, counter: state.counter + 1}
            } else {
                return {...state, disabled: true}
            }
        }
        case ACTIONS_TYPE.RESET_COUNTER: {
            return {
                ...state,
                counter: 0,
                disabled: false,
            }
        }
        case ACTIONS_TYPE.CHANGE_MIN_VALUE  : {
            return {
                ...state,
                minValue: action.minValue
            }
        }
        case ACTIONS_TYPE.CHANGE_MAX_VALUE : {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case ACTIONS_TYPE.SET_SETTINGS : {
            return {
                ...state,
                counter: action.minValue,
            }
        }
        case ACTIONS_TYPE.RESET_SETTINGS : {
            return {
                ...state,
                minValue: 0,
                maxValue: 5,
            }
        }
    }
}
