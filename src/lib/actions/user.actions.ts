"use server";

import User, { IUser } from "@/database/user.model";
import { connect } from "../mongoose";
import { TCreateUserParams } from "@/types";

export async function createUser(user: TCreateUserParams) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo({ userId }: { userId: string }): Promise<IUser | null | undefined> {
  try {
    await connect();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log(error);
  }
}
