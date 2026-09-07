import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const addToCart = useCallback(
    (product, size, colour, quantity = 1) => {
      if (!product || !size || !colour) return;

      const safeQuantity = Math.max(1, Number(quantity) || 1);
      const cartKey = `${product.slug}-${size}-${colour}`;

      setCartItems((currentItems) => {
        const existing = currentItems.find(
          (item) => item.cartKey === cartKey,
        );

        if (existing) {
          return currentItems.map((item) =>
            item.cartKey === cartKey
              ? { ...item, quantity: item.quantity + safeQuantity }
              : item,
          );
        }

        return [
          ...currentItems,
          {
            cartKey,
            product,
            size,
            colour,
            quantity: safeQuantity,
          },
        ];
      });

      setCartOpen(true);
    },
    [],
  );

  const removeFromCart = useCallback((cartKey) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    );
  }, []);

  const updateQuantity = useCallback((cartKey, quantity) => {
    const safeQuantity = Number(quantity);

    if (!Number.isFinite(safeQuantity) || safeQuantity < 1) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.cartKey !== cartKey),
      );
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey
          ? { ...item, quantity: safeQuantity }
          : item,
      ),
    );
  }, []);

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      ),
    [cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartOpen,
      searchOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
      openSearch,
      closeSearch,
    }),
    [
      cartItems,
      cartCount,
      cartOpen,
      searchOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
      openSearch,
      closeSearch,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }

  return context;
}
