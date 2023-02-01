import axios from "axios";
// 如果确定导入的是类型，可用 type 说明
import type { AxiosInstance, AxiosRequestConfig } from "axios";

class JNRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default JNRequest;
