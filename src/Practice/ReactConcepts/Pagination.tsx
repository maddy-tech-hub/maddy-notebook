import { useState } from "react";

export function PaginationExample() {
  const items = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const [page, setPage] = useState(1);
  const pageSize = 2;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const currentItems = items.slice(start, end);

  return (
    <div>
      {currentItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <button
        disabled={end >= items.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}