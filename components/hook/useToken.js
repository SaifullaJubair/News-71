import { useEffect, useState } from "react";

const useToken = email => {
   const [token, setToken] = useState('')
   useEffect(() => {
      if (email) {
         fetch(`https://mobosell-server-a12.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
               if (data.accessToken) {
                  localStorage.setItem('accessToken', data.accessToken);
                  setToken(data.accessToken);
               }
            })
            .catch(error => console.log(error))
      }
   }, [email]);
   return [token];
}

export default useToken