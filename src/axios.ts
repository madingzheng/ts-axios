import { AxiosInstance, AxiosRequestConfig } from './types/index'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaultsConfig from './defaultsConfig'

function createInstance(defaultsConfig: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(defaultsConfig)
  // 创建axios实例，request方法下面
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance(defaultsConfig)

export default axios
