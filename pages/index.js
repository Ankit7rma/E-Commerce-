import { useSession, signIn, signOut } from "next-auth/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="text-center w-full ">
          <button onClick={() => signIn("google")}>Sign in</button>
        </div>
      </div>
    );
  }
  return (
    <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
