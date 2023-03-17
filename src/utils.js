/* eslint-disable prettier/prettier */
const TOKEN_LOCATION = "token"

export function saveToken(token) {
   return localStorage.setItem(TOKEN_LOCATION, token);
}

export function readToken() {
    return localStorage.getItem(TOKEN_LOCATION)
}