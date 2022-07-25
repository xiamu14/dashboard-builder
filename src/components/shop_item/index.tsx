import AspectDiv from "@src/components/aspect_div";
import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import { ShopDetail } from "@src/model/shop";
import { randomColor } from "@src/utils/random_color";
import { StarFilled } from "maple-icons";
import React from "react";
import "./index.scoped.scss";

const ShopItem = React.memo(({ item }: { item: ShopDetail }) => {
  return (
    <div className="shop-item">
      <AspectDiv width="100%" height="65%">
        <img className="product-picture" src={item.cover} />
      </AspectDiv>
      <div className="product-info flex justify-between items-start">
        <div className="flex flex-col">
          <p className="title">{item.name}</p>
          <div className="flex justify-start items-center">
            <StarFilled color={colors["primary-05"]} width={19} height={18} />
            <p className="star-count">
              {item.stars} <span className="gray">({item.views})</span>
            </p>
          </div>
        </div>
        <div>
          <Tag color={randomColor("secondary-0", 5)}>{item.price}</Tag>
        </div>
      </div>
    </div>
  );
});

export default ShopItem;
