export function calculateSubtotal(items) {
  return items.reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity;
  }, 0);
}
