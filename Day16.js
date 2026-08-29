//1

// fetch("https://dummyjson.com/quotes")
// .then(res=>{
//     if(res.ok){
//         return res.json()
//     }else{
//         console.log("data not get");
        
//     }
// }).then(data=>{
//     for(let i=0;i<data.quotes .length;i++){
//     console.log(data.quotes[i].id);
    
// }
// })

//2
const URL = "https://dummyjson.com/todos";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


