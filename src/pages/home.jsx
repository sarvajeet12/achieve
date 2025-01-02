import React from "react";
import Style from "../components/home-comp/home.module.css";
import { cardList } from "../data/card";

import Card from "../components/home-comp/card";

const Home = () => {
    return (
        <div className={Style.homePage}>
            {cardList.map((item, index) => {
                return (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        path={item.path}
                    />
                );
            })}
        </div>
    );
};

export default Home;
