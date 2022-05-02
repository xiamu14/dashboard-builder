import { colors } from "@src/constant";
import { randomColor } from "@src/utils/random_color";
import { Avatar } from "antd";
import { HeartLight, LinkLight, MessageLight } from "maple-icons";
import React, { memo } from "react";
import "./index.scoped.scss";

const comments = [
  {
    author: "Ethel",
    account: "@ethel",
    product: "Smiles – 3D icons",
    content: "Great work 😊",
    before: "1h",
  },
  {
    author: "Jazmyn",
    account: "@jaz.designer",
    product: "Fleet - Travel shopping",
    content: "I need react version asap!",
    before: "2h",
  },
  {
    author: "Ethel",
    account: "@ethel",
    product: "Smiles – 3D icons",
    content: "How can I buy only the design?",
    before: "30m",
  },
];

const Comments = memo(() => {
  return (
    <div className="w-full">
      {comments.map((item, index) => {
        return (
          <div
            key={index}
            className="comment-box flex w-full justify-start items-start"
          >
            <Avatar
              size={48}
              style={{
                backgroundColor: randomColor("secondary-0", 5),
              }}
              src={`https://joeschmoe.io/api/v1/random?t=${0}`}
            />
            <div className="flex-1 content-box">
              <div className="flex justify-between items-start">
                <div className="flex flex-col justify-start">
                  <div className="author">
                    {item.author}{" "}
                    <span className="account gray">{item.account}</span>
                  </div>
                  <div className="linked-product">
                    <span className="gray">On </span>
                    {item.product}
                  </div>
                  <div className="content">{item.content}</div>
                </div>
                <span className="before gray">{item.before}</span>
              </div>
              <div className="btn-group flex justify-between items-center">
                <MessageLight color={colors["neutral-shades-04-75"]} />
                <HeartLight color={colors["neutral-shades-04-75"]} />
                <LinkLight color={colors["neutral-shades-04-75"]} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Comments;
