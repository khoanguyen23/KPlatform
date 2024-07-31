"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { getUserInfo, requestExpert } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";
import { IUser } from "@/database/user.model";
import {  Blocks } from "react-loader-spinner";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="flex justify-center items-center h-screen">
      <div>
        {isExpert ? (
          <>
          <div className="border p-4 w-72 rounded-md flex items-center space-x-4">
            <p className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent text-2xl font-bold">
              You are an expert
            </p>
            <p>😎</p>
          </div>
          <Button className="ml-12 mt-10 bg-gradient-to-r from-blue-600 to-violet-600">
            Go to Dashboard Expert
          </Button>
          </>
        ) : isExpertRequested ? (
          <p className="border-2 p-2 w-72 border-dashed border-indigo-700 text-center">
            Your request to become an expert is{" "}
            <span className="font-bold">pending approval</span>.
          </p>
        ) : (
          <Button onClick={handleExpertRequest}>
            Request to become an Expert
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;
