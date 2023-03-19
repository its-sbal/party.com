import EventOptionCard from "../cred/EventOptionCard";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import "./birthday.css";
import musicImg from "../images/birthday1.png";

import { Button } from "@cred/neopop-web/lib/components";

function Birthday() {
  return (
    <div>
      <HorizontalSpacer n={1} />
      <img
        src="https://busestoconcerts.com/wp-content/uploads/2017/11/concert-banner.jpg"
        style={{ height: "300px", width: "100%" }}
      />
      <HorizontalSpacer n={1} />
      <div className="searchbar"></div>
      <HorizontalSpacer n={2} />

      <div className="flex-event">
        <div>
          <EventOptionCard
            title="Decoration"
            image="https://png.pngtree.com/png-clipart/20221014/ourmid/pngtree-fresh-wedding-decoration-png-image_6150196.png"
          />
        </div>
        <div>
          <EventOptionCard
            title="Catering"
            image="https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-hand-drawn-cartoon-gourmet-catering-chef-decorative-pattern-hand-drawn-cartoon-png-image_362717.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Garlands"
            image="https://png.pngtree.com/png-vector/20220114/ourmid/pngtree-marigold-flower-door-garland-decoration-png-image_4297585.png"
          />
        </div>
        <div>
          <EventOptionCard
            title="Cakes"
            image="https://png.pngtree.com/element_our/20190524/ourmid/pngtree-cartoon-birthday-cake-free-element-image_1105574.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Wedding Hall"
            image="https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-hotel-express-hotel-png-image_2813157.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Entertainment"
            image="https://png.pngtree.com/png-vector/20220423/ourmid/pngtree-a-man-wearing-vr-headset-floating-in-cyberspace-simulation-of-the-png-image_4552793.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Birthday;
