import { useState } from "react";

export function SearchFilter() {
  const [search, setSearch] = useState("");

  const users = ["Madhava", "Ravi", "Suresh", "Kiran"];

  const filteredUsers = users.filter(function (user) {
    return user.toLowerCase().includes(search.toLowerCase());
  });
  
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Search name"
      />

      {filteredUsers.map(function (user, index) {
        return <p key={index}>{user}</p>;
      })}
    </div>
  );
}
