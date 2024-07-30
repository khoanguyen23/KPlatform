"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { getUserInfo, requestExpert } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";
import { IUser } from "@/database/user.model";
import { Audio, Blocks } from "react-loader-spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    invoice: "NHDTA-821",
    paymentStatus: "https://njavtv.com/vi/nhdta-821-uncensored-leak",
    totalAmount: "$250.00",
    paymentMethod: "Seino Ayaba",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Page = () => {
  const [isExpertRequested, setIsExpertRequested] = useState(false);
  const [isExpert, setIsExpert] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const fetchUserInfo = async () => {
        setLoading(true);
        const user = await getUserInfo({ userId });
        if (user) {
          setIsExpertRequested(user.expertRequest || false);
          setIsExpert(user.role === EUserRole.EXPERT);
          setIsAdmin(user.role === EUserRole.ADMIN);
          setUserInfo(user);
        }
        setLoading(false);
      };
      fetchUserInfo();
    }
  }, [userId]);

  const handleExpertRequest = async () => {
    if (userId) {
      try {
        await requestExpert({ clerkId: userId });
        setIsExpertRequested(true);
        alert("Expert request sent successfully.");
      } catch (error) {
        console.error(error);
        alert("Failed to send expert request.");
      }
    } else {
      alert("User ID is missing.");
    }
  };

  if (loading) {
    return (
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    ); // Hoặc bạn có thể sử dụng một spinner/loading indicator ở đây.
  }

  return (
    <div>
      {isAdmin ? (
        <div className="space-y-5">
          <h1 className="uppercase font-bold text-xl">
            xin chào <span className="text-red-700">{userInfo?.name}</span>
          </h1>
          {/* Nội dung dành riêng cho admin */}
          <h2>Admin Dashboard</h2>
          <div className="flex justify-between">
            <p>
              Welcome to the admin dashboard. Here you can manage users and
              roles.
            </p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">njav</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>
                    <Link
                      legacyBehavior
                      href={`${invoice.paymentStatus}`}
                      passHref
                    >
                      <a target="_blank">Link</a>
                    </Link>
                  </TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <div>
          {isExpert ? (
          <div className="border p-4 w-72 rounded-md flex items-center space-x-4">
            <p className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent text-2xl font-bold">You are an expert</p>
            <p>😎</p>
            </div>
          ) : isExpertRequested ? (
            <p className="border-2 p-2 w-72 border-dashed border-indigo-700">Your request to become an expert is <span className="font-bold">pending approval</span>.</p>
          ) : (
            <Button onClick={handleExpertRequest}>
              Request to become an Expert
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
