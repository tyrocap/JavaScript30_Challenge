import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ChartComponent from './Chart/b_Chart';

const m_Body = () => {
	return (
		<div>
			<div style={{ width: "60%", marginLeft: "450px" }}>
				<TextField
					size="small"
					variant="outlined"
					placeholder="Enter ticker"
					fullWidth="true"
				/>
			</div>
			<div
				style={{
					width: "60%",
					marginLeft: "450px",
					backgroundColor: "lightgray",
				}}
			>
				<Button style={{ flex: "2" }} color="inherit" size="medium">
					Apple, Inc
				</Button>
			</div>
			<div
				style={{
					width: "60%",
					marginLeft: "450px",
					backgroundColor: "lightgray",
				}}
			>
				<p>All info goes here</p>
			</div>
			<div
				style={{
					width: "60%",
					height: "60vh",
					marginLeft: "450px",
					backgroundColor: "lightgray",
				}}
			>
				<ChartComponent />
			</div>
		</div>
	);
};

export default m_Body;
