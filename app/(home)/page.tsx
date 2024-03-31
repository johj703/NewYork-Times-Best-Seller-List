import Link from "next/link";

export const metadata = {
  title: "Home",
};

const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getLists() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const lists = await getLists();
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {lists.map((list) => (
        <li key={list.primary_isbn10}>
          <Link href={`/lists/${list.primary_isbn10}`}>{list.list_name}</Link>
        </li>
      ))}
    </div>
  );
}
