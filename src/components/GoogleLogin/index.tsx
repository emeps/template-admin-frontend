import { jwtDecode } from 'jwt-decode';
import {GoogleLogin as Google} from '@react-oauth/google'

export const GoogleLogin = ()=>{
  return(
    <Google
      onSuccess={credentialResponse => {
        const token: string | undefined = credentialResponse.credential;
        if (token != null) {
          const userInfo = jwtDecode(token, {});
          console.log(userInfo);
        }
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      text={"signup_with"}
    />
  )
}