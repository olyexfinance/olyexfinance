import service from "@/util/request.js"
export default {
    get(url,data){
        service.get({url,params:data})
    },
    post(url,data){
        service.get({url,data})
    },
}
