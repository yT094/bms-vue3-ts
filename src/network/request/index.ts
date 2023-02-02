import axios from "axios";
// 如果确定导入的是类型，可用 type 说明
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { ElLoading } from "element-plus";
import type { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

class JNRequest {
  instance: AxiosInstance;
  // 设置可选项，可避开 ts 的类型检查
  loading?: ILoadingInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        // 遮罩层
        this.loading = ElLoading.service({
          lock: true,
          text: "正在请求数据...",
          background: "rgba(0,0,0,0.5)",
        });
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // 关闭遮罩层
        this.loading?.close();
        // 处理响应数据
        const data = res.data;
        return data;
      },
      (err) => {
        // 关闭遮罩层
        this.loading?.close();
        return err;
      }
    );
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default JNRequest;
