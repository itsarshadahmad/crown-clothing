import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Navigation />}>
				<Route exact index element={<Home />} />
				<Route exact path="shop/*" element={<Shop />} />
				<Route exact path="auth" element={<Authentication />} />
				<Route exact path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
