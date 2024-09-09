import Link from "next/link";
import React from "react";

const index = ({ users }) => {
  console.log(users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <th scope="row">{u.id}</th>
            <td>{u.name}</td>
            <td>
              <Link href={`users/${u.id}`}> seeMore</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // <div>
    //     {users.map((u)=><div key={u.id}>{u.name}</div>)}
    // </div>
  );
};

export default index;
export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();
  return { props: { users: data } };
}
