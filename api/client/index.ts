import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:3000/auth/signin',
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = '';
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  } else {
    delete config.headers["Authorization"]
  }
  return config
});

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config;
//     if (
//       error.response?.status === 401 &&
//       originalRequest &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const response = await getRefreshToken();

//         const { payload } = response;

//         useUserStore.setState({ user: { accessToken: payload.accessToken } });

//         originalRequest.headers.Authorization = `Bearer ${payload.accessToken}`;

//         return instance(originalRequest);
//       } catch (error) {
//         if (error instanceof AxiosError && error.response?.status === 403) {
//           useUserStore.getState().removeCredentials();
//           return;
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// )

export default apiClient;