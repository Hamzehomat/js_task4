async function getdata() {
        try {
      const response = await axios.get('https://dummyjson.com/products')
      const data=response.data;
      return data.products;
        }
        catch(error){
          console.error(error);
        }
      }
const displaydata = async()=> {
  const products = await getdata();
  console.log(products);
 const result= products.map (product => 
  `<div class class = "product"><h2>${product.title}</h2>
  <img src="${product.thumbnail}"/>
  <a href="details.html?id=${product.id}"> Details</a> </div>`
  ).join("");
  document.querySelector(".products").innerHTML += result;
}

    displaydata();
