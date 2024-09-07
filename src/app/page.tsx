import { isUserAuthenticated } from "@/utils/auth";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  return (
    <main className="m-auto max-w-[1440px]">
      {isUserAuthenticated ? (
        <LogoutLink>Logout</LogoutLink>
      ) : (
        <>
          <LoginLink>Login</LoginLink>
          <RegisterLink>Register</RegisterLink>
        </>
      )}
    </main>
  );
}
