

export const Reducer = (state, action) =>{
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                auth: {
                    id: action.payload.uid,
                    username: action.payload.auth.displaName,
                    profile: action.payload.auth.photoURL,
                    email: action.payload.auth.email,
                },
                user: action.payload.user,
            };
        case"LOAD_USER":
        return {
            ...state,
            users: action.payload,
        }
        case "UPDATE_USERS":
            return {
                ...state,
                auth: {
                    username: action.payload.username,
                    profile: action.payload.profile?.url,
                    email: action.payload.email,
                },
                user: {
                    username: action.payload.username,
                    profile: action.payload.profile,
                    email: action.payload.email,
                }
            };
        case "LOGOUT":
            return {
                ...state,
                auth: null,
                user: null,
            };
        default:
            return state;
    };
};