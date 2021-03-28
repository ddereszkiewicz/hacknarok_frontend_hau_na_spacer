import { POSTS_SUCCESS } from "./types";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {

        case POSTS_SUCCESS: {
            return action.payload
        }

        default:
            return state;
    }
}
