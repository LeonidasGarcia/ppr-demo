import { Suspense } from 'react';
import { PageHeader } from './_components/page-header';
import { ActiveUsers } from './_components/active-users';
import { RecentOrders } from './_components/recent-orders';
import { LiveStock } from './_components/live-stock';

async function getStockPrice(): Promise<{ value: number; change: number }> {
  await new Promise((resolve) => setTimeout(resolve, 2800));
  return {
    value: Math.floor(Math.random() * 200) + 300,
    change: Math.round((Math.random() * 10 - 5) * 100) / 100,
  };
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <PageHeader />

      <div className="grid gap-6 sm:grid-cols-2">
        <Suspense
          fallback={
            <div className="animate-pulse rounded-lg border border-gray-200 bg-gray-100 p-6">
              <div className="mb-2 h-5 w-32 rounded bg-gray-200" />
              <div className="h-8 w-20 rounded bg-gray-200" />
            </div>
          }
        >
          <ActiveUsers />
        </Suspense>

        <Suspense
          fallback={
            <div className="animate-pulse rounded-lg border border-gray-200 bg-gray-100 p-6">
              <div className="mb-2 h-5 w-36 rounded bg-gray-200" />
              <div className="space-y-3">
                <div className="h-12 rounded bg-gray-200" />
                <div className="h-12 rounded bg-gray-200" />
                <div className="h-12 rounded bg-gray-200" />
              </div>
            </div>
          }
        >
          <RecentOrders />
        </Suspense>

        <Suspense
          fallback={
            <div className="animate-pulse rounded-lg border border-gray-200 bg-gray-100 p-6">
              <div className="mb-2 h-5 w-24 rounded bg-gray-200" />
              <div className="h-8 w-28 rounded bg-gray-200" />
              <div className="mt-3 h-8 w-32 rounded bg-gray-200" />
            </div>
          }
        >
          <LiveStock pricePromise={getStockPrice()} />
        </Suspense>
      </div>

      <div className="mt-8 rounded-lg border border-purple-200 bg-purple-50 p-6">
        <h2 className="text-lg font-semibold text-purple-800">
          💡 ¿Qué está pasando aquí?
        </h2>
        <ul className="mt-2 space-y-1 text-sm text-purple-700">
          <li>
            <strong>Shell estático</strong> — El header y esta explicación se
            prerenderizaron en build time. Llegan instantáneamente.
          </li>
          <li>
            <strong>Active Users</strong> — Server Component. Se resuelve en ~2s
            y se stremea al cliente cuando está listo.
          </li>
          <li>
            <strong>Recent Orders</strong> — Server Component. Se resuelve en
            ~3.5s y se stremea independientemente.
          </li>
          <li>
            <strong>Live Stock</strong> — Client Component con{' '}
            <code className="rounded bg-purple-200 px-1">use()</code>. El
            servidor genera el precio, React stremea el HTML, y luego se hidrata
            con estado interactivo.
          </li>
          <li>
            Cada sección dinámica tiene su propio{' '}
            <code className="rounded bg-purple-200 px-1">{'<Suspense>'}</code>{' '}
            boundary con un skeleton como fallback.
          </li>
        </ul>
      </div>
    </div>
  );
}
