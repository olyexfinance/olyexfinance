import http from "../util/http"
export const getPriceApi =(data)=>http.get("/api/v3/ticker/price",data)