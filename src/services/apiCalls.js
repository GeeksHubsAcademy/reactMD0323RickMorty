
import axios from 'axios';

export const bringCharacters = async () => {

    return await axios.get("https://rickandmortyapi.com/api/character/?page=25");
};

export const loginMeAgain = async (credenciales) => {

    // return await axios.post(`endpoint`)

    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE2NmEzZDUzMDYwODRlY2U1M2I5NCIsInJvbGUiOiJkZW50aXN0IiwiaWF0IjoxNjgzMDU2NDcyLCJleHAiOjE2ODMxNDI4NzJ9.Vl1QcuSy1D0FlgIhbDxFeoqm7eM6ZCdncjxdAJgAT38";
}

export const bringUserProfile = async () => {

    //Id traida por Héctor...
    const id = '644a9914f0a74db254031ca5';

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhnaW5vcnlAZ21haWwuY29tIiwiaWQiOiI2NDRhOTkxNGYwYTc0ZGIyNTQwMzFjYTUiLCJyb2wiOiJDbGllbnRlIiwiaWF0IjoxNjgzNzE4ODkzfQ.zfVPRlNvTuMr2goLgaenIsIuAnrafJNxOiLMTsmm3ig';

    let config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
    };

    return await axios.get(`https://backendclinicadental-production.up.railway.app/user/${id}`, config);
}

export const bringDentists = async () => {

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhnaW5vcnlAZ21haWwuY29tIiwiaWQiOiI2NDRhOTkxNGYwYTc0ZGIyNTQwMzFjYTUiLCJyb2wiOiJDbGllbnRlIiwiaWF0IjoxNjgzNzkyODU4fQ.8eRYjmC0o1QjzqUo4qRj630jrTQOLVNKlc-HqVCbnSo';

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`https://dentistclinicbackend-production.up.railway.app/user/dentist`, config);
  
}