const initialState = {
    Authorization: sessionStorage.getItem("token"),
    user: JSON.parse(sessionStorage.getItem("user"))
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH":
            sessionStorage.setItem("token", `${action.payload.token_type} ${action.payload.access_token}`);
            sessionStorage.setItem("user", JSON.stringify(action.payload.user));

            return {
                ...state,
                Authorization: `${action.payload.token_type} ${action.payload.access_token}`,
                user: action.payload.user
            }

        default: return state;
    }
}

export default Auth;
