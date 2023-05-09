
import axios from 'axios';

export const bringCharacters = async () => {

    return await axios.get("https://rickandmortyapi.com/api/character/?page=25");
};

export const loginMeAgain = async (credenciales) => {

    // return await axios.post(`endpoint`)

    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE2NmEzZDUzMDYwODRlY2U1M2I5NCIsInJvbGUiOiJkZW50aXN0IiwiaWF0IjoxNjgzMDU2NDcyLCJleHAiOjE2ODMxNDI4NzJ9.Vl1QcuSy1D0FlgIhbDxFeoqm7eM6ZCdncjxdAJgAT38";
}