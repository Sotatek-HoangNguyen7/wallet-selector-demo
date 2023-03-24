import React from "react";
import "./App.css";
import { SelectWalet, SendWalet, SignWalet } from "react-wallet-selector";

function App() {

	return (
		<div>
			<div className="container-fluid">
				<div className="row mt-5">
					<div className="col-4">
						<SelectWalet />
					</div>
					<div className="col-4">
						<SignWalet />
					</div>
					<div className="col-4">
						<SendWalet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
