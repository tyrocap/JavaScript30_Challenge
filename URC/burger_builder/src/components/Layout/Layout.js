import React from "react";
import Auxa from "../../hoc/Auxa";
import './Layout.css';
const layout = (props) => (
	<Auxa>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className="Content">{props.children}</main>
	</Auxa>
);

export default layout;