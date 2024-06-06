const Base_Url = "https://fakestoreapi.com/"; //URL link
export async function getData(endpoint){ //Give function a parameter
    try{
        const data = await fetch(`${Base_Url}${endpoint}`);
        const res = await data.json();

        return res;
    }catch (error){
        console.log("error", error)
    }
}