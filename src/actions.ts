export enum ACTIONS_TYPE {
    INCR_COUNTER = 'INCR_COUNTER',
    RESET_COUNTER = 'RESET_COUNTER',
    CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    SET_SETTINGS = 'SET_SETTINGS',
    RESET_SETTINGS = 'RESET_SETTINGS',
}


export type RootStateType = {
    counter: number,
    minValue: number,
    maxValue: number,
    disabled: boolean,
}
type INCR_COUNTER = {
    type: ACTIONS_TYPE.INCR_COUNTER
}
type RESET_COUNTER = {
    type: ACTIONS_TYPE.RESET_COUNTER
}
type CHANGE_MIN_VALUE = {
    type: ACTIONS_TYPE.CHANGE_MIN_VALUE
    minValue: number
}
type CHANGE_MAX_VALUE = {
    type: ACTIONS_TYPE.CHANGE_MAX_VALUE
    maxValue: number
}
type SET_SETTINGS = {
    type: ACTIONS_TYPE.SET_SETTINGS
    minValue: number

}
type RESET_SETTINGS = {
    type: ACTIONS_TYPE.RESET_SETTINGS
}
export type CounterReducerType = INCR_COUNTER | RESET_COUNTER | CHANGE_MAX_VALUE | CHANGE_MIN_VALUE |
    SET_SETTINGS | RESET_SETTINGS


export const incrCounter = (): CounterReducerType => {
    return {type: ACTIONS_TYPE.INCR_COUNTER}
}
export const resetCounter = (): CounterReducerType => {
    return {type: ACTIONS_TYPE.RESET_COUNTER}
}
export const setMinValue = (minValue: number): CounterReducerType => {
    return {type: ACTIONS_TYPE.CHANGE_MIN_VALUE, minValue}
}
export const setMaxValue = (maxValue: number): CounterReducerType => {
    return {type: ACTIONS_TYPE.CHANGE_MAX_VALUE, maxValue}
}
export const setSettings = (minValue: number): CounterReducerType => {
    return {type: ACTIONS_TYPE.SET_SETTINGS, minValue}
}
export const resetSettings = (): CounterReducerType => {
    return {type: ACTIONS_TYPE.RESET_SETTINGS}
}
