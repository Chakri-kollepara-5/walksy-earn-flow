import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Wallet from "@/pages/Wallet";
import Leaderboard from "@/pages/Leaderboard";
<<<<<<< HEAD
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

import SignInPage from "@/pages/auth/SignIn";
import SignUpPage from "@/pages/auth/SignUp";

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("❌ Clerk publishable key missing. Add it in .env.local");
}

const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            {/* GUEST USERS */}
            <SignedOut>
              <Routes>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="*" element={<Navigate to="/sign-in" />} />
              </Routes>
            </SignedOut>

            {/* LOGGED IN USERS */}
            <SignedIn>
              <div className="relative min-h-screen pb-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>

                <Navigation />
              </div>
            </SignedIn>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
=======
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "home": return <Home />;
      case "tasks": return <Tasks />;
      case "wallet": return <Wallet />;
      case "leaderboard": return <Leaderboard />;
      case "profile": return <div className="p-6"><h1>Profile Coming Soon</h1></div>;
      default: return <Home />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative">
          {renderPage()}
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
  );
};

export default App;
