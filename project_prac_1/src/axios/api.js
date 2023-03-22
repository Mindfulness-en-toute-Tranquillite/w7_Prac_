import axios from "axios";

export const apis = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {}
});

apis.interceptors.request.use(
    // 요청을 보내기 전 수행되는 함수
    function (config) {
        console.log("인터셉터 요청 성공!");
        return config;
    },
    // 오류 요청을 보내기 전 수행되는 함수
    function(error){
        console.log("인터셉터 요청 오류!")
        return Promise.recject(error);
    },
)

apis.interceptors.response.use(
    //응답을 내보내기 전 수행되는 함수
    function(response){
        console.log("인터셉터 응답 받았습니다!")
    },

    //오류 응답을 내보내기 전 수행되는 함수
    function(error){
        console.log("인터셉터 응답 오류 발생")
        return Promise.reject(error)
    }
);


export default apis;