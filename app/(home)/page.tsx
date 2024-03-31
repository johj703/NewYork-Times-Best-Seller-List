import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const BASE_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBooks() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const books = await getBooks();
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {books.map((list) => (
        <li key={list.primary_isbn10}>
          <Link href={`/list/${list.primary_isbn10}`}>{list.list_name}</Link>
        </li>
      ))}
    </div>
  );
}
