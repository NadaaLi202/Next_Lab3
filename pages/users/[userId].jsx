// pages/users/[userId].js

import { useRouter } from "next/router";

const UserId = ({ user }) => {
  const router = useRouter();

  if (!user) {
    // If user is not found, return a 404 page
    return <div>Not Found</div>;
  }

  const handleClick = () => {
    router.push("/users");
  };

  return (
    <div>
      {user.name}, {user.email}
      <button onClick={handleClick} className="btn btn-success">
        {" "}
        go to users
      </button>
    </div>
  );
};

export default UserId;

export async function getStaticProps(context) {
  const { userId } = context.params;
  const res = await fetch(`http://localhost:3001/users/${userId}`);
  const data = await res.json();

  // Check if user data is empty or contains an error
  if (!data || data.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
    ],
    fallback: "blocking",
  };
}
