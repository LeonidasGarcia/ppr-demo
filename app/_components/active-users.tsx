import { connection } from "next/server";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function ActiveUsers() {
  await connection();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = randomBetween(120, 500);
  const pages = randomBetween(300, 800);

  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6">
      <h2 className="text-lg font-semibold text-green-800">Usuarios activos</h2>
      <p className="mt-1 text-3xl font-bold text-green-600">{users}</p>
      <p className="text-sm text-green-500">
        {pages} páginas vistas ahora
      </p>
    </div>
  );
}
