import React from "react";
import "./App.css";
import {  SelectWallet, SendWallet, SignWallet } from "react-wallet-selector";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="container-fluid">
			<div className="row mt-5">
				<div className="col-4">
					<SelectWallet />
				</div>
				<div className="col-4">
					<SignWallet />
					<br />
					{/* <SendtTransactionZkapp /> */}
				</div>
				<div className="col-4">
					<SendWallet />
				</div>
			</div>
		</div>
	);
}

export default App;
