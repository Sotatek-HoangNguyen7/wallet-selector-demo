import React, { useEffect } from "react";
import "./App.css";
import Connect from "./components/connect";
import Sign from "./components/sign";
import Send from "./components/send";
// import Stake from "./components/stake";
import { useHasWalet } from "./hooks/useHasWalet";

function App() {
	useEffect(() => {
		localStorage.setItem("wallet", localStorage.getItem("wallet") || "MetamaskFlask");
	}, []);

	useHasWalet();

	return (
		<div className="App">
			<div className="container-fluid">
				<div className="row mt-5">
					<div className="col-4">
						<Connect />
					</div>
					<div className="col-4">
						<Sign />
						{/* <br /> */}
						{/* <Stake /> */}
					</div>
					<div className="col-4">
						<Send />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
