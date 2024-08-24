import { authenticateActions } from "../reducers/authenticateReducer";
function login(id, password) {
    return (dispatch, getState) => {
        console.log("login action");
        /* dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } }) */
        dispatch(authenticateActions.login({ id, password }))
    };
}
function logout() {
    return (dispatch, getState) => {
        console.log("logout action");
        /* dispatch({ type: "LOGOUT_SUCCESS" }) */
        dispatch(authenticateActions.logout())
    };
}
export const authenticateAction = { login, logout };
