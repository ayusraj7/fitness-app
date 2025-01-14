import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../core/shop/ProductCard";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../../pages/Loading";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userData, token } = useSelector((state) => state.user);
  const id = userData._id;
  const navigate = useNavigate();
  let url = "";
  if (userData?.accountType === "member") {
    url = process.env.REACT_APP_BACKEND_URL + `/api/member-products/${id}`;
  } else {
    url = process.env.REACT_APP_BACKEND_URL + `/api/products/${id}`;
  }
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const user = await axios.post(url, { token });
      if (userData?.accountType === "trainer") {
        setProductData(user?.data?.data);
      } else {
        setProductData(user?.data?.data?.product);
      }
      if (!user.data.success) {
        throw new Error(user.data.message);
      }
    } catch (error) {
      toast.error(`Products can't be fetched`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading text={"Products"} />;
  }

  return (
    <div>
      <div className="h-auto pb-8 relative flex sm:w-[80%] sm:px-10 px-3  mt-[80px] mx-auto flex-col ">
        <div className="flex gap-5 flex-wrap justify-center lg:justify-start ">
          {products &&
            products?.map((element, index) => (
              <ProductCard element={element} key={index} />
            ))}
        </div>

        {!products && userData.accountType === "member" && (
          <div className="text-white flex flex-col gap-8 items-center">
            <h1 className="text-4xl font-extralight text-center">
              No Classes Purchased
            </h1>
            <Button
              text={"Purchase Items"}
              css={`mt-[200px] border rounded-sm hover:bg-white hover:text-black`}
              onclick={() => navigate("/shop")}
            />
          </div>
        )}
        {products?.length < 1 && userData.accountType === "trainer" && (
          <div className="text-white flex flex-col gap-8 items-center">
            <h1 className="text-4xl font-extralight text-center">
              No Product Listed
            </h1>
            <Button
              text={"Create Item"}
              css={`mt-[200px] border rounded-sm hover:bg-white hover:text-black`}
              onclick={() => navigate("/dashboard/addProduct")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
