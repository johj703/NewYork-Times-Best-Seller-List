"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const getList = async () => {
    const response = await fetch(
      "https://books-api.nomadcoders.workers.dev/lists"
    );
    const json = await response.json();
    setLists(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getList();
  });
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {isLoading ? "Loading!" : JSON.stringify(lists)}
    </div>
  );
}
