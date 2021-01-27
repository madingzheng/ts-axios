import { AxiosRequestConfig } from './types'

const defaultsConfig: AxiosRequestConfig = {
  method: 'GET',

  timeout: 0,

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
  defaultsConfig.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
  defaultsConfig.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaultsConfig
