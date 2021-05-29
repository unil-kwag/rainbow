import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { API_URL } from "../constants";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("ko");

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = React.useState([]);
    React.useEffect(function () {
        axios
            .get(`${API_URL}/grab/${id}/`)
            .then(function (result) {
                // console.log(result.data);
                setProduct(result.data);
            })
            .catch(function (error) {
                console.error("에러 발생 : ", error);
            });
    }, []);
    if (product === null) {
        return <h1>상품 정보를 받고 있습니다...</h1>;
    }
    return (
        <div>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} />
            </div>
            <div id="profile-box">
                <img src={"/images/icons/avatar.png"} />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="creatAt">{dayjs(product.creatAt).fromNow()}</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}
export default ProductPage;
