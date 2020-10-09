import React, { Component } from "react";
import Auxa from "../../hoc/Auxa";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerOpenedHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Auxa>
				<Toolbar drawerToggleClicked={this.sideDrawerOpenedHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className="Content">{this.props.children}</main>
			</Auxa>
		);
	}
}

export default Layout;
