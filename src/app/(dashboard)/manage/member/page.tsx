"use client";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Ensure you have these components from Shadcn UI
import { IUser } from "@/database/user.model";
import {
  approveExpert,
  getUsersWithExpertRequests,
} from "@/lib/actions/user.actions";
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
      setUsers(users.filter((user) => user.clerkId !== clerkId));
    } catch (error) {
      console.error(error);
      alert("Failed to approve expert request.");
    }
  };

  return (
    <div>
        <Heading className="mb-10 ml-2">Quản lý người dùng</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.clerkId}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button onClick={() => handleApprove(user.clerkId)}>
                  Approve as Expert
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
