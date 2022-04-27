import { ADD_COMMENT } from "./types/fakeBookAppType";



//action creator
export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment:userComment
    }
}
