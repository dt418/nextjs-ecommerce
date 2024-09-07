import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { isAuthenticated, getUser, getAccessToken } = getKindeServerSession();

export const isUserAuthenticated = await isAuthenticated();
export const user = await getUser();
export const accessToken = await getAccessToken();
