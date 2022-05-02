import AspectDiv from "@src/components/aspect_div";
import Button from "@src/components/button";
import ContentBox from "@src/components/content_box";
import Tag from "@src/components/tag";
import { colors } from "@src/constant";
import { randomColor } from "@src/utils/random_color";
import { Avatar, Divider, Space } from "antd";
import {
  InstagramLight,
  PinterestLight,
  StarFilled,
  TwitterLight,
} from "maple-icons";
import React from "react";
import "./index.scoped.scss";

const bannerUrl =
  "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80";

export default function Shop() {
  return (
    <div className="shop-box w-full h-full">
      <ContentBox className="shop-wrapper overflow-y-scroll" banner={bannerUrl}>
        <div className="shop-content-box h-full max-h-full ">
          <div className="shopper-info flex justify-start justify-items-auto">
            <Avatar
              size={80}
              style={{
                backgroundColor: randomColor("secondary-0", 5),
              }}
              src="https://joeschmoe.io/api/v1/random"
            />
            <div className="user-info">
              <p className="nickname">Chelsie Haley</p>
              <p className="desc">Dream big. Think different. Do great!</p>
            </div>
            <div className="flex-1" />
            <Space size={30}>
              <TwitterLight width={20} height={20} />
              <InstagramLight width={20} height={20} />
              <PinterestLight width={20} height={20} />
              <Button className="btn-follow">Follow</Button>
            </Space>
          </div>
          <Divider />
          <div>
            <div className="product-list w-full flex flex-col justify-center items-center">
              <div className="col-item flex w-full justify-between items-center">
                <AspectDiv width="32%" height="80%">
                  <div className="item">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                    <div className="product-info flex justify-between items-start">
                      <div className="flex flex-col">
                        <p className="title">
                          Fleet - Travel shopping UI design kit
                        </p>
                        <div className="flex justify-start items-center">
                          <StarFilled
                            color={colors["primary-05"]}
                            width={19}
                            height={18}
                          />
                          <p className="star-count">
                            4.8 <span className="gray">(87)</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <Tag color={randomColor("secondary-0", 5)}>$64</Tag>
                      </div>
                    </div>
                  </div>
                </AspectDiv>
                <AspectDiv width="32%" height="80%">
                  <div className="item" />
                </AspectDiv>
                <AspectDiv width="32%" height="80%">
                  <div className="item" />
                </AspectDiv>
              </div>
              <div className="col-item flex w-full justify-between items-center">
                <AspectDiv width="32%" height="80%">
                  <div className="item">
                    <img
                      className="product-picture"
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    />
                    <div className="product-info flex justify-between items-start">
                      <div className="flex flex-col">
                        <p className="title">
                          Fleet - Travel shopping UI design kit
                        </p>
                        <div className="flex justify-start items-center">
                          <StarFilled
                            color={colors["primary-05"]}
                            width={19}
                            height={18}
                          />
                          <p className="star-count">
                            4.8 <span className="gray">(87)</span>
                          </p>
                        </div>
                      </div>
                      <Space direction="vertical" className="items-end">
                        <Tag color={randomColor("secondary-0", 5)}>$64</Tag>
                        <Tag className="delete">$164</Tag>
                      </Space>
                    </div>
                  </div>
                </AspectDiv>
                <AspectDiv width="32%" height="90%">
                  <div className="item w-full h-full" />
                </AspectDiv>
                <AspectDiv width="32%" height="80%">
                  <div className="item" />
                </AspectDiv>
              </div>
              <Button plain>Load more</Button>
            </div>
          </div>
        </div>
      </ContentBox>
    </div>
  );
}
