import DescriptionPage from "../Description/descriptionPage";
import Image from "../ImagePic/ImagepicPage";
import Name from "../Name/namePage";
import Price from "../Price/pricePage";

const ProductPage = ({price, pname, image, description}) => {
  return (
    <div className="card">
        <Image imageUrl={image} altText={pname} />
        <div>
        <Name pname={pname} />
        <Price productPrice={price}/>
        <DescriptionPage productDescription={description}/>
        </div>  
    </div>
  );
};

export default ProductPage;