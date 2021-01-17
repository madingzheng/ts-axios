import { AxiosRequestConfig } from './type'

function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'GET', params } = config
  const request = new XMLHttpRequest()
  request.open(method, url, true)
  request.send(data)
}

export default xhr
