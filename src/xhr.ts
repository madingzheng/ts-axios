import { AxiosRequestConfig } from './type'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'GET', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(name => {
    if (!data && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}

export default xhr
