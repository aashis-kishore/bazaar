import endpoints from './endpoints'

const ENDPOINT_BASE = 'http://localhost:2020'

interface AdminLogin {
  (): string
}

interface FindById {
  (id: string): string
}

interface Admin {
  login: AdminLogin
  findById: FindById
}

class StandardAdmin implements Admin {
  login: AdminLogin = () => ENDPOINT_BASE + endpoints.admin.login
  findById: FindById = (id) => ENDPOINT_BASE + endpoints.admin.findById
    .replace(/:id/, id)
}

interface EndpointManager {
  admin: Admin
}

class StandardEndpointManager implements EndpointManager {
  get admin() {
    return new StandardAdmin()
  }
}

export default new StandardEndpointManager()
