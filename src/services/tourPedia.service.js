import axios from "axios"

class ApiServices{
    constructor(){
        this.api =  axios.create({
            baseURL: `http://tour-pedia.org/api`
        })
    }

    getRestaurantes(){
        return this.api.get("/getPlaces?category=restaurant&location=Berlin&name=La+Dolce+Vita")
    }
}


const serviciosDeRestaurantes = new ApiServices()

export default serviciosDeRestaurantes