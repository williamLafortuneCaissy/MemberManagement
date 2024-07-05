import { MemberType } from "./MemberTypes"


export const memberFormActions = {
    updateInput: 'UPDATE_INPUT',
    clear: 'CLEAR',
}

export const memberFormInit = {
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    email: '',
}

type MemberFormType = Omit<MemberType, 'id' | 'created'>

type ActionType = {
    type: string, 
    payload?: { 
        name: string, 
        value: string 
    }
}

export const memberFormReducer = (state: MemberFormType, action: ActionType) => {
    switch (action.type) {
        case memberFormActions.updateInput:
            if (!action.payload) throw new Error(`Invalid action payload: ${action.payload}`)
            return { ...state, [action.payload.name]: action.payload.value }
        case memberFormActions.clear:
            return memberFormInit
        default:
            throw new Error(`Invalid action type: ${action.type}`)
    }
}