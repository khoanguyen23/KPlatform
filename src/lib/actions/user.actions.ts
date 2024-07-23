"use server";
import User, { IUser } from "@/database/user.model";
import { connect } from "../mongoose";
import { TCreateUserParams } from "@/types";
import { EUserRole } from "@/types/enums";

export async function createUser(user: TCreateUserParams) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo({ userId }: { userId: string }): Promise<IUser | null> {
  try {
    await connect();
    const user = await User.findOne({ clerkId: userId }).lean().exec() as IUser;
    return user ? JSON.parse(JSON.stringify(user)) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}




// New function for requesting expert status
export async function requestExpert({ clerkId }: { clerkId: string }) {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId },
      { expertRequest: true },
      { new: true }
    ).lean().exec();
    return user;
  } catch (error) {
    console.log(error);
  }
}

// New function for approving expert status
export async function approveExpert({ clerkId }: { clerkId: string }) {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId },
      { role: EUserRole.EXPERT, expertRequest: false },
      { new: true }
    ).lean().exec();
    return user;
  } catch (error) {
    console.log(error);
  }
}

// Function to get users with expert requests
export async function getUsersWithExpertRequests(): Promise<IUser[]> {
  try {
    await connect();
    const users = await User.find({ expertRequest: true }).lean().exec() as IUser[];
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}
