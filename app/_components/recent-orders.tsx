function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function RecentOrders() {
  await new Promise((resolve) => setTimeout(resolve, 3500));

  const orders = Array.from({ length: 3 }, (_, i) => ({
    id: `#ORD-${String(randomBetween(1000, 9999))}`,
    product: ["Zapatillas Nike", "Auriculares Sony", "Mochila Jansport"][i],
    amount: `$${randomBetween(20, 200)}`,
    status: randomBetween(0, 2) === 0 ? "Envío" : "Entregado",
  }));

  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
      <h2 className="text-lg font-semibold text-blue-800">
        Pedidos recientes
      </h2>
      <ul className="mt-3 divide-y divide-blue-200">
        {orders.map((order) => (
          <li
            key={order.id}
            className="flex items-center justify-between py-2"
          >
            <div>
              <p className="font-medium text-blue-900">{order.product}</p>
              <p className="text-sm text-blue-600">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-800">{order.amount}</p>
              <span className="inline-block rounded-full bg-blue-200 px-2 py-0.5 text-xs text-blue-700">
                {order.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
