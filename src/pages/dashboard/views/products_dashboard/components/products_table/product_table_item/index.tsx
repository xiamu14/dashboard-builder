import ActiveTag from "@src/components/active_tag";
import Tag from "@src/components/tag";
import Trend from "@src/components/trend";
import { colors } from "@src/constant";
import clsx from "clsx";
import { MoreHorizontalFilled } from "maple-icons";
import React, { memo } from "react";
import { ProductDetail } from "../types";
import "./index.scoped.scss";

interface Props {
  detail: ProductDetail;
  isLast: boolean;
}

const ProductTableItem = memo((props: Props) => {
  const { detail, isLast } = props;
  return (
    <div className={clsx("product-table-item", { last: isLast })}>
      <div className="flex feature-item">
        <div className="title-box product-image-box">
          <img
            className="product-image"
            src={detail.product.image}
            alt="product image"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center">
            <p className="product-name flex-1">{detail.product.name}</p>
            <MoreHorizontalFilled
              color={colors["neutral-04"]}
              width={14}
              height={14}
            />
          </div>
          <div className="flex items-center">
            <Tag>{detail.price}</Tag>
            <p className="product-desc">{detail.product.desc}</p>
          </div>
        </div>
      </div>
      <div className="flex feature-item items-center">
        <div className="title-box">Status</div>
        <div className="flex-1">
          <ActiveTag isActive={detail.status.isActive} />
        </div>
      </div>
      <div className="flex feature-item items-center">
        <div className="title-box">Views</div>
        <div className="flex-1">
          <Tag>{detail.views}</Tag>
        </div>
      </div>
      <div className="flex feature-item items-center">
        <div className="title-box">Sales</div>
        <div className="flex-1">
          <Trend {...detail.sales} />
        </div>
      </div>
    </div>
  );
});

export default ProductTableItem;
