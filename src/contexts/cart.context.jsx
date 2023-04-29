import { createContext, useState } from "react";

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
});

export function CartProvider({ children }) {
	const [isCartOpen, setIsCartOpen] = useState();

	return (
		<CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
			{children}
		</CartContext.Provider>
	);
}
