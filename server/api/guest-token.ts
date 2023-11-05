import axios from 'axios'

export default async function defineEventHandler(request, response) {
    var supersetHost = process.env.SUPERSET_HOST
    var supersetUser = process.env.SUPERSET_USER
    var supersetPassword = process.env.SUPERSET_PASSWORD

    console.log(supersetHost)

    const loginResponse = await axios.post(`${supersetHost}/api/v1/security/login`, {
        "password": supersetPassword,
        "provider": "db",
        "refresh": true,
        "username": supersetUser
      })

    const guestTokenResponse = await axios.post(`${supersetHost}/api/v1/security/guest_token/`, {
        "resources": [
          {
            "id": "45",
            "type": "dashboard"
          }
        ],
        "rls": [],
        "user": {
          "first_name": "guest",
          "last_name": "guest",
          "username": "guest"
        }
      }, {headers: {"Authorization": `Bearer ${loginResponse.data.access_token}`, "Content-Type": "application/json"}})
    return guestTokenResponse.data
}