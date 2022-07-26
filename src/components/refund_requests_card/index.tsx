import Button from "@src/components/button";
import IconPlate from "@src/components/icon_plate";
import { colors } from "@src/constant";
import { BasketLight } from "maple-icons";
import React from "react";
import "./index.scoped.scss";

const RefundRequestsCard = React.memo(() => {
  return (
    <div className="refund-requests-card">
      <div className="requests-box w-full flex justify-start items-start">
        <IconPlate
          className="icon"
          circle
          style={{
            backgroundColor: colors["secondary-06"],
          }}
        >
          <BasketLight width={20} height={19} color={colors["primary-03"]} />
        </IconPlate>
        <p className="content flex-1">
          <span className="gray">You have</span> 52 open refund requests{" "}
          <span className="gray">to action. This includes</span> 8 new requests.
          👀
        </p>
      </div>
      <Button className="!w-full" plain>
        Review refund requests
      </Button>
    </div>
  );
});

export default RefundRequestsCard;
