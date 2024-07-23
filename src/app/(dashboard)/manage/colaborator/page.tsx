"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { getUserInfo, requestExpert } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";


const Page = () => {
  const [isExpertRequested, setIsExpertRequested] = useState(false);
  const [isExpert, setIsExpert] = useState(false);

  const router = useRouter();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const fetchUserInfo = async () => {
        const user = await getUserInfo({ userId });
        setIsExpertRequested(user?.expertRequest || false);
        setIsExpert(user?.role === EUserRole.EXPERT);
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

  return (
    <div>
    <h1>Account Page</h1>
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
  );
};

export default Page;
