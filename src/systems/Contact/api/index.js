import axios from 'axios'

export const contact = async body => {
  return axios.post('https://api.caracal.cloud/public/contact/', body)
}
