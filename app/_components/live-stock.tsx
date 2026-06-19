"use client";

import { use, useState } from "react";

type Price = { value: number; change: number };

export function LiveStock({ pricePromise }: { pricePromise: Promise<Price> }) {
  const price = use(pricePromise);
  const [refreshes, setRefreshes] = useState(0);

  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-orange-800">
            Acción NEXT
          </h2>
          <p className="text-xs text-orange-500">
            Client Component con PPR
          </p>
        </div>
        <span className="rounded bg-orange-200 px-2 py-0.5 text-xs font-medium text-orange-700">
          NASDAQ
        </span>
      </div>

      <p className="mt-2 text-3xl font-bold text-orange-600">
        ${price.value}
        <span
          className={`ml-2 text-sm font-medium ${
            price.change >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {price.change >= 0 ? "+" : ""}
          {price.change}%
        </span>
      </p>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => setRefreshes((c) => c + 1)}
          className="cursor-pointer rounded bg-orange-500 px-3 py-1 text-sm text-white transition hover:bg-orange-600"
        >
          Simular refresh ({refreshes})
        </button>
      </div>

      <p className="mt-3 text-xs text-orange-500 leading-relaxed">
        El precio se generó en el servidor y el HTML se stremeó con PPR.
        El botón es interactividad del Client Component que se hidrata
        después de recibir el stream.
      </p>
    </div>
  );
}
