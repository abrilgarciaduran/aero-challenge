import ProductCard from "./ProductCard";
import callApi from "../../api";
import { useEffect } from "react";

export default function Products() {
  const hardcodedProducts = [
    {
      _id: "5a033eeb364bf301523e9b92",
      name: "Sandalia Pale Gold YSL",
      cost: 200,
      category: "Indumentaria",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        hdUrl:
          "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      },
    },
    {
      _id: "5a033f0f364bf301523e9b93",
      name: "iPhone 7 Case Sea-Blue",
      cost: 200,
      category: "Accesorios",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
        hdUrl:
          "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      },
    },
    {
      _id: "5a033eeb364bf301523e9b94",
      name: "Sandalia Pale Gold YSL",
      cost: 200,
      category: "Indumentaria",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        hdUrl:
          "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      },
    },
    {
      _id: "5a033f0f364bf301523e9b95",
      name: "iPhone 7 Case Sea-Blue",
      cost: 200,
      category: "Accesorios",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
        hdUrl:
          "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      },
    },
  ];

  useEffect(() => {
    console.log("useEffect");
    async function callApi() {
      try {
        const response = await fetch(
          "https://coding-challenge-api.aerolab.co/products",
          {
            headers: {
              "Authentication":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIyMjY4N2RiODdhYjAwMjExOTY4MDMiLCJpYXQiOjE2NDY0MDUyNTV9.ximr5ThnOHiqTP0KMeaxbhq_4u-QxwwYCi07gCMVlIo",
            },
          }
        );
        const result = await response.json();
        return result;
      } catch (error) {
        Promise.reject(error);
      }
    }
    callApi();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="has-text-left mb-6">
          <span className="brand-blue">Tech</span> Products
        </h2>
        <div className="filters-provisory my-6">Here go the filters</div>
      </div>
      <div className="container is-flex is-flex-wrap-wrap">
        {hardcodedProducts.map((item) => {
          return <ProductCard product={item} key={item._id} />;
        })}
      </div>
    </section>
  );
}
