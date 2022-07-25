import { useMobile } from "@src/hooks/use_responsive";
import { FacebookLight, LogoInstagram, TwitterLight } from "maple-icons";
import React from "react";
import "./index.scoped.scss";
const ShareBySocial = React.memo(() => {
  const isMobile = useMobile();
  return (
    <div className="share-by-social">
      <p className="desc">
        50% of new customers explore products because the author sharing the
        work on the social media network. Gain your earnings right now! 🔥
      </p>
      <div className="flex justify-between items-center">
        <div className="method flex justify-center items-center ">
          <FacebookLight width={24} height={24} />
          {!isMobile ? <span>Facebook</span> : null}
        </div>
        <div className="method flex justify-center items-center">
          <TwitterLight width={24} height={24} />
          {!isMobile ? <span>Twitter</span> : null}
        </div>
        <div className="method flex justify-center items-center">
          <LogoInstagram width={24} height={24} />
          {!isMobile ? <span>Instagram</span> : null}
        </div>
      </div>
    </div>
  );
});

export default ShareBySocial;
