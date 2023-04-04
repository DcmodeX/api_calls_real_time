const form= document.getElementById('myForm');
form.addEventListener('sibmit',(event)=>{
    event.preventDefault;
    const formElements=Array.from(form.elements);
    const body={};
    formElements.forEach((el)=>{
        body[el.name]=value;
    })
})


