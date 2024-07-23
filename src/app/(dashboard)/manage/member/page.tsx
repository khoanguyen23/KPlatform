"use client";
import { IUser } from "@/database/user.model";
import { approveExpert, getUsersWithExpertRequests } from "@/lib/actions/user.actions";
import { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersWithRequests = await getUsersWithExpertRequests();
      setUsers(usersWithRequests);
    };
    fetchUsers();
  }, []);

  const handleApprove = async (clerkId: string) => {
    try {
      await approveExpert({ clerkId });
      setUsers(users.filter(user => user.clerkId !== clerkId));
    } catch (error) {
      console.error(error);
      alert('Failed to approve expert request.');
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.clerkId}>
            {user.username} - {user.email}
            <button onClick={() => handleApprove(user.clerkId)}>Approve as Expert</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
