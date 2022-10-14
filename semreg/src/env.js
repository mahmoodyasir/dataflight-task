export const domain = "http://127.0.0.1:8000";
export const userToken = window.localStorage.getItem("token")

export const header = {
    Authorization: `token ${userToken}`
}
