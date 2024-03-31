import { useEffect, useState } from "react";

export const metadata = {
  title: 'Home',
}

export default function Page() {
  const [movies, setMovies] = useState();
  const getList = async () => {
    fetch("")
  }
  useEffect(() => {
    getList();
  })
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
    </div>
  );
}
