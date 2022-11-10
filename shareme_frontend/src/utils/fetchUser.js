import axios from 'axios';
import jwtdecode from 'jwt-decode';

export const fetchUser = () => {
    const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

    return userInfo;
}

export const responseGoogle = (response) => {
  const decoded = jwtdecode(response.credential);
  console.log(decoded);
}