import axios from 'axios'

const client = axios.create({
  baseUrl: 'https://api.caracal.cloud',
})

export const contact = async body => {
  return client.post('/public/contact/', body)
}
