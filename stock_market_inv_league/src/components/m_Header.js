import React from "react";
import Button from "@material-ui/core/Button";
import "./m_Header.css";

const m_Header = () => {
	return (
		<div className="m_Header">
			<Button style={{ flex: "2" }} color="inherit" size="medium">
				Stock Market Investment League
			</Button>
			<Button style={{ flex: "1" }} color="inherit" size="medium">
				My Portfolio
			</Button>
			<Button style={{ flex: "1" }} color="inherit" size="medium">
				Stocks
			</Button>
			<Button style={{ flex: "1" }} color="inherit" size="medium">
				League
			</Button>
			<Button style={{ flex: "1" }} color="inherit" size="medium">
				Leaderboard
			</Button>
			<Button style={{ flex: "2" }} color="inherit" size="medium">
				UserName
			</Button>
		</div>
	);
};

export default m_Header;
