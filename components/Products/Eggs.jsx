
import CustomCard from "../CustomCard/customCard";
function Eggs(){
   const productList = [
       { productName: "egg1", productPrice: 125 },
       { productName: "Lays", productPrice: 10 },
       { productName: "oranges", productPrice: 200 },
       { productName: "Apples", productPrice: 300 },
       { productName: "Biriyani", productPrice: 300 },
       { productName: "pizza", productPrice: 360 }
     ];
   
     return (
       <>
         <CustomCard productList={productList} />
       </>
     );
}

export default Eggs;