import ClientProviders from "@/components/Auth/client-providers";
import { SignupForm } from "@/components/Auth/signup-form";

export default function Home() {
  return (
    <ClientProviders>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-96">
          <SignupForm />
        </div>
      </div>
    </ClientProviders>
  );
}
