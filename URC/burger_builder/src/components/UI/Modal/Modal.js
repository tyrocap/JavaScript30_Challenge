import React from "react";
import "./Modal.css";
import Auxa from "../../../hoc/Auxa";
import Backdrop from "../Backdrop/Backdrop";

const model = (props) => (
	<Auxa>
		<Backdrop show={props.show} clicked={props.modalClose}/>
		<div
			className="Modal"
			style={{
				transform: props.show ? "translateY(0)" : "translateY(-100vh)",
				opacity: props.show ? "1" : "0",
			}}
		>
			{props.children}
		</div>
	</Auxa>
);

export default model;
