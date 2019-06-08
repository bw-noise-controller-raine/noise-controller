import { ADDING_START, ADDING_SUCCESS, ADDING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from '../actions';

import {DELETE_FAILURE,DELETE_START,
    DELETE_SUCCESS,} from '../actions/Delete'

const initialState = {
    classes: [],
    addingClasses: false,
    error: null,
    fetchingClassrooms: false,
    deletingClass: false
}

export const addclassReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_START:
            return {
                ...state,
                addingClass: true
            }
        case ADDING_SUCCESS:
           
            return {
                ...state,
                addingclass: false,
                classes: [...state.classes, action.payload]
            }
        case ADDING_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingclass: false
            }
        case DELETE_START:
            return {
                ...state,
                deletingClass: true,
                error: null
            }

        case DELETE_SUCCESS:
            return {
                ...state,
                deleteingClass: false,
                classrooms: state.classrooms.filter(classroom => classroom.id !== action.payload)
            }
        case DELETE_FAILURE:
            return {
                ...state,
                deletingClass: false,
                error: action.payload
            }
        case FETCHING_START:
            return {
                ...state,
                fetchingclassrooms: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                error: '',
                errorStatusCode: null,
                fetchingClassrooms: false,
                classes: action.payload
            }

        default:
            return state;

    }
}