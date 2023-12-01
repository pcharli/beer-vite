import urlApi from "./urls";

const beersList = async (nb=10) => {
    let res
    try{
        res = await fetch(`${urlApi}?per_page=${nb}`)
        res = await res.json()
    }
    catch(error) {
        console.log(error)
        res = {
            "message": "error serveur"
        }
    }
    return res
}

export default 
    beersList