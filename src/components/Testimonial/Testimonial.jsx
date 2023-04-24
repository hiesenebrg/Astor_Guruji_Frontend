import React from "react";

import star from "../../assets/star.png";
import sun from "../../assets/carsouel/sun.png";
import banner from "../../assets/carsouel/banner.png";
import DotDark from "../../assets/header/BDot.png";
import BlankDot from "../../assets/header/lDot.png";

function Testimonial() {
	return (
		<div className="testimonial">
			<div className="content">
				<div className="heading">
					<img src={sun} alt="img" className="sun-img" />
					<div className="heading-part">
						<img src={star} alt="icon" />
						<h2 className="heading-secondary">User Testimonial</h2>
						<img src={star} alt="icon" />
					</div>
				</div>
				<div className="card-slider"></div>
			</div>

			<div className="banner-box">
				<img src={banner} alt="banner" className="banner" />

				<div className="dots">
					<img src={DotDark} alt="icon" />
					<img src={BlankDot} alt="icon" />
					<img src={BlankDot} alt="icon" />
					<img src={BlankDot} alt="icon" />
					<img src={BlankDot} alt="icon" />
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
