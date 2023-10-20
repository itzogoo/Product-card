import ProductPage from "./Components/Product/productPage";
import "./App.css";

const App = () => {
  const products = [
    {
      pname: "infinix",
      price: 200,
      image: "Images/phone 1.jpeg",
      description: "phone",
    },

    {
      pname: "motorola",
      price: 90,
      image: "Images/phone 2.jpeg",
      description: "phone",
    },

    {
      pname: "samsung",
      price: 240,
      image: "Images/phone 3.jpeg",
      description: "phone",
    },

    {
      pname: "nokia",
      price: 25000,
      image: "Images/phone 5.jpeg",
      description: "phone",
    },
    {
      pname: "acer",
      price: 90000,
      image: "public/Images/phone 7.jpeg",
      description: "phone",
    },
  
    {
      pname: "iphone",
      price: 40000,
      image: "public/Images/phone 9.jpeg",
      description: "phone",
    },
  ];

  return (
    <>
      <h1>Product Card</h1>
      <div className="grid">
        {products.map(({ pname, price, image, description }, index) => (
          <ProductPage
            key={index}
            pname={pname}
            price={price}
            image={image}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default App;
