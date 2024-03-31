import { BASE_URL } from "../../../api-path";

interface PageProps {
  name: string;
}

async function getBooks(name: PageProps) {
  const response = await fetch(`${BASE_URL}/${name}`);
  return response.json();
}

export default async function BookDetail(name: PageProps) {
  const books = await getBooks(name);
  return <h1>Book! {books.name}</h1>;
}
