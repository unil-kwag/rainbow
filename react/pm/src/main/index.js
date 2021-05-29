import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index-1.css";
import { API_URL } from "../constants";

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(function () {
        axios
            .get(`${API_URL}/grab/`)
            .then(function (result) {
                const products = result.data;
                setProducts(products);
            })
            .catch(function (error) {
                console.error("에러 발생 :", error);
            });
    }, []);
    if (products.length === 0) {
        return <div>상품정보를 읽어오는 중 입니다...</div>;
    }
    return (
        <div>
            <main>
                <section>
                    <h1 className="blind">메인</h1>
                    <div id="main">
                        <section>
                            <h1 className="blind">배너</h1>
                            <div id="banner">
                                <div>
                                    <img src="images/banners/banner1.png" alt="배너" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <h1>판매되는 상품들</h1>
                            <div id="product-list">
                                {products.map(function (product, index) {
                                    return (
                                        <div className="product-card">
                                            <Link className="product-link" to={"/product/" + product.id}>
                                                <div>
                                                    <img
                                                        className="product-img"
                                                        src={`${API_URL}/${product.imageUrl}`}
                                                    />
                                                </div>
                                                <div className="product-contents">
                                                    <span className="product-name">{product.name}</span>
                                                    <span className="product-price">{product.price}원</span>
                                                    <div className="product-seller">
                                                        <img className="product-avatar" src="images/icons/avatar.png" />
                                                        <span>{product.seller}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MainPage;
