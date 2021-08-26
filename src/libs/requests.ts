import axios from 'axios'
import endpointManager from '../libs/endpointManager'

interface AdminLoginReqData {
  email: string
  password: string
}

interface AdminLoginResData {
  isAdmin: boolean
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

interface AdminLogin {
  (adminLoginReqData: AdminLoginReqData): Promise<AdminLoginResData>
}

interface AdminFindByIdReqData {
  id: string
}

type AdminFindByIdResData = AdminLoginResData

interface AdminFindById {
  (adminFindByIdReqData: AdminFindByIdReqData): Promise<AdminFindByIdResData>
}

interface Admin {
  login: AdminLogin
  findById: AdminFindById
}

interface Requests {
  admin: Admin
}

class StandardAdmin implements Admin {
  login: AdminLogin = async (adminLoginReqData) => {
    const res = await axios({
      url: endpointManager.admin.login(),
      method: 'POST',
      data: adminLoginReqData,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await res.data
  }

  findById: AdminFindById = async (adminFindByIdReqData) => {
    const { id } = adminFindByIdReqData

    const res = await axios({
      url: endpointManager.admin.findById(id),
      method: 'GET'
    })

    return await res.data
  }
}

class StandardRequests implements Requests {
  get admin() {
    return new StandardAdmin()
  }
}

export default new StandardRequests()
