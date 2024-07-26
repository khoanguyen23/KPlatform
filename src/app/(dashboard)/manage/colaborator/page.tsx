"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { getUserInfo, requestExpert } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";
import { IUser } from "@/database/user.model";
import {Spinner} from "@nextui-org/spinner";

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
    return  <Spinner color="primary"/>; // Hoặc bạn có thể sử dụng một spinner/loading indicator ở đây.
  }

  return (
    <div>
      {isAdmin ? (
        <div>
          <h1>xin chào {userInfo?.name}</h1>
          {/* Nội dung dành riêng cho admin */}
          <h2>Admin Dashboard</h2>
          <p>
            Welcome to the admin dashboard. Here you can manage users and roles.
          </p>
        </div>
      ) : (
        <div>
          {isExpert ? (
            <p>You are an expert.</p>
          ) : isExpertRequested ? (
            <p>Your request to become an expert is pending approval.</p>
          ) : (
            <button onClick={handleExpertRequest}>
              Request to become an Expert
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
