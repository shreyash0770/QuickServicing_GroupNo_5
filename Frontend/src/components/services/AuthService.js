import axios from 'axios'

const API_URL = 'http://localhost:8080'

class AuthService {
  login(email, password) {
    const fd = new FormData()
    fd.append('email', email)
    fd.append('password', password)

    return axios
      .post('http://localhost:8080/sloginl', fd)
      .then((response) => {
        if (response) {
          // console.log('RESPONSE.DATA', response.data)
         
          sessionStorage.setItem('user', JSON.stringify(response.data))
          debugger
          console.log(response.data)
        }
        return response
      })
  }

  logout() {
    sessionStorage.removeItem('user')
  }

  
}

export default new AuthService()
