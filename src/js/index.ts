import Axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

import {json2table100} from "./genericTable";

let BaseUri: string = "http://anbo-bookstorerest.azurewebsites.net/api/"
let contentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("table_content");
let AllBooks: JSON;



interface IBook {
   id: number,
   title: string,
   author: string,
   publisher: string,
   price: number,
}

 Axios.get(BaseUri + "Books").then(
     function(respone: AxiosResponse): void{
         console.log("getting books... v4");
         element.innerHTML = "<div class='spinner-border text-muted></div>";
         setTimeout(() => {  console.log("waited 5 sek"); }, 5000);
    let data: IBook[] = respone.data;
        console.log(data);
    let result: string = json2table100(data);
console.log(result);
    element.innerHTML = result;
        contentElement.innerHTML = JSON.stringify(respone.data);
     }
 )
 .catch(
     function(error: AxiosError): void{
        contentElement.innerHTML = error.message;
     }
 )




 




