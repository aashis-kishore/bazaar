interface Admin {
  login: string
  findById: string
}

const admin: Admin = {
  login: '/users/find',
  findById: '/users/:id'
}

interface Endpoints {
  admin: Admin
}

const endpoints: Endpoints = {
  admin
}

export default endpoints
