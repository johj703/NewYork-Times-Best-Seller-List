import { BASE_URL } from "../../../api-path";

async function getBooks(name: string) {
  const response = await fetch(`${BASE_URL}/list?name=${name}`);
  return response.json();
}

export default async function BookDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  const books = await getBooks(name);
  return <h1>Book! {books.name}</h1>;
}
