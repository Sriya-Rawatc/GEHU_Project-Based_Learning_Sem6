import axios, { AxiosInstance } from "axios"

const pistonBaseUrl = "https://pbl-project-compiler-design-sever.onrender.com/api/piston"

const instance: AxiosInstance = axios.create({
    baseURL: pistonBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
