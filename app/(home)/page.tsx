export const metadata = {
  title: "Home",
};

const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getLists() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const lists = await getLists();
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {JSON.stringify(lists)}
    </div>
  );
}
