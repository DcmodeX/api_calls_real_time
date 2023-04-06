console.log('connected')
function getPetByStatus(){
    const select=document.getElementById('pet-status')
    console.log(select.name);
    let url="https://petstore.swagger.io/v2/pet/findByStatus";
    url=`${url}?${select.name}=${select.value} `
    console.log(url)
    fetch(url).then((res)=>res.json()).then((res)=>console.log(res))
}