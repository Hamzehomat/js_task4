 async function getUser() {
         const urlparams = new URLSearchParams(window.location.search);
         const id = urlparams.get('id');
         const response= await fetch(`https://dummyjson.com/products/${id}`)
         console.log(response);
         const data = await response .json();
         const {title , thumbnail , price}=data;
         console.log(data);
         document.querySelector("h2").textContent=title;
         document.querySelector("img").src=thumbnail;
         document.querySelector("span").textContent=price;
            
    }
 getUser();       
