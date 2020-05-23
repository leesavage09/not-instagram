import axios from 'axios'

export function loginUser(username,password) {
  return axios.post('http://localhost:3000/api/session/', {
    user: {
      username: username,
      password: password
    }
  }, { withCredentials: true })
}

export function logoutUser() {
  return axios.delete('http://localhost:3000/api/session/',
    {},
    { withCredentials: true })
}

export function createUser(user) {
  return axios.post('http://localhost:3000/api/users/', { user: user })
}

export function updateUser(user) {
  return axios.patch(`http://localhost:3000/api/users/${user.id}`, { user: user })
}

export function getPresignedUrlForProfileImage() {
  return axios.get('http://localhost:3000/api/session/s3presigned')
}

export function findProfile(queryString) {
  return axios.get('http://localhost:3000/api/users?q='+encodeURI(queryString))
}

export function getProfile(id, page) {
  return axios.get('http://localhost:3000/api/users/'+encodeURI(id)+'/posts/'+encodeURI(page) )
}