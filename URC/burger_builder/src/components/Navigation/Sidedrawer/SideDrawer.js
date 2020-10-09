import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxa from "../../../hoc/Auxa";

const sideDrawer = (props) => {
	let attachedClasses = ["SideDrawer", "Close"];
	if (props.open) {
		attachedClasses = ["SideDrawer", "Open"];
	}
	return (
		<Auxa>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<Logo height="11%" />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxa>
	);
};

export default sideDrawer;
