import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    cartCount,
    cartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  useEffect(() => {
    if (!cartOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [cartOpen, closeCart]);

  return (
    <div
      className={`cart-layer ${
        cartOpen ? 'cart-layer--open' : ''
      }`}
      aria-hidden={!cartOpen}
    >
      <button
        className="cart-backdrop"
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="cart-drawer__header">
          <div>
            <span>Your selection</span>

            <strong>
              Cart ({cartCount})
            </strong>
          </div>

          <button
            type="button"
            onClick={closeCart}
          >
            Close
          </button>
        </div>

        <div className="cart-drawer__body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span>00</span>

              <h2>
                Your cart is empty.
              </h2>

              <p>
                Explore napkins, coasters and placemats
                developed for hospitality environments.
              </p>

              <Link
                to="/products"
                onClick={closeCart}
              >
                Explore collection
                <span>↗</span>
              </Link>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <article
                  className="cart-item"
                  key={item.cartKey}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                  />

                  <div className="cart-item__content">
                    <div className="cart-item__top">
                      <div>
                        <span>
                          {item.product.category}
                        </span>

                        <h3>
                          {item.product.name}
                        </h3>

                        <p>
                          {item.colour} · {item.size}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item.cartKey,
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>

                    <div className="quantity-control">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.cartKey,
                            item.quantity - 1,
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.cartKey,
                            item.quantity + 1,
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="cart-drawer__footer">
          <div>
            <span>
              Selected pieces
            </span>

            <strong>
              {cartCount}
            </strong>
          </div>

          <p>
            Prototype storefront — pricing and checkout
            can be connected later.
          </p>

          <a
            href="/#enquiry"
            onClick={closeCart}
          >
            Request an enquiry
            <span>↗</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
