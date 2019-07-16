import axios from 'axios'
import Nprogress from 'nprogress'
import notify from './notify'
import { API_URL, PARAMS } from '@/constants/OMDb'
import 'nprogress/nprogress.css'

/**
 * @param  {object} req - https://github.com/axios/axios#request-config
 * @return {Promise<any>}
 */
export default function ajax (req) {
  req.baseURL = API_URL

  req.params = {
    [PARAMS.API_KEY]: process.env.VUE_APP_OMDB_API_KEY,
    ...req.params
  }

  Nprogress.start()
  return axios(req)
    /** {object} res - https://github.com/axios/axios#response-schema */
    .then(res => {
      const resData = res.data
      if (resData.Response === 'False') {
        const err = new Error(resData.Error)
        err.response = res
        throw err
      }
      Nprogress.done()
      return resData
    })
    /** {object} err - https://github.com/axios/axios#handling-errors */
    .catch(err => {
      if (err.response) {
        const res = err.response // res.data - { Response: 'False', Error: <string> }
        notify(`[${res.status}] ${res.data.Error}`)
      } else {
        notify(err.message)
      }
      Nprogress.done(true)
      throw err
    })
}
