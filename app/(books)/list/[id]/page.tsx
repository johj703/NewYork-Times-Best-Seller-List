import { BASE_URL } from "../../../api-path";

async function getBooks(name: string) {
  const response = await fetch(`${BASE_URL}/${name}`);
  return response.json();
}

export default async function BookDetail({ name }: { name: string }) {
  const books = await getBooks(name);
  return <h1>Book! {books.name}</h1>;
}
