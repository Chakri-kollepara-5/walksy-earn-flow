import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { LogOut, Wallet } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Profile = () => {
  const { signOut } = useClerk();
  const { toast } = useToast();

  const [loggingOut, setLoggingOut] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const user = {
    name: "Chakri",
    email: "chakri@example.com",
    stepsThisWeek: 18340,
    totalKm: 27.4,
    rank: 12,
    wallet: 155,
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    toast({
      title: "Logging out",
      description: "Ending your session securely…",
    });
    await signOut();
    window.location.href = "/";
  };

  const handleWithdraw = () => {
    const withdrawAmount = Number(amount);

    if (!withdrawAmount || withdrawAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Enter a valid withdrawal amount.",
        variant: "destructive",
      });
      return;
    }

    if (withdrawAmount > user.wallet) {
      toast({
        title: "Insufficient balance",
        description: "You don’t have enough money to withdraw.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Withdrawal initiated 💸",
      description: `₹${withdrawAmount} will be processed shortly.`,
    });

    setWithdrawOpen(false);
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <div className="pt-12 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Avatar className="h-28 w-28 shadow-lg border-4 border-purple-200">
              <AvatarImage src="https://i.imgur.com/1whoCM3.jpeg" />
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>

            <h1 className="text-3xl font-extrabold mt-4 text-purple-700">
              {user.name}
            </h1>
            <p className="text-muted-foreground text-sm">{user.email}</p>

            <Button className="mt-5 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
              Edit Profile
            </Button>
          </div>

          {/* STATS */}
          <Card className="lg:col-span-2 p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl font-semibold mb-6 text-purple-700">
              Weekly Performance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-purple-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-purple-700">
                  {user.stepsThisWeek}
                </p>
                <p className="text-sm text-muted-foreground">Steps</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-purple-700">
                  {user.totalKm} km
                </p>
                <p className="text-sm text-muted-foreground">Distance</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-purple-700">
                  #{user.rank}
                </p>
                <p className="text-sm text-muted-foreground">Rank</p>
              </div>
            </div>
          </Card>
        </div>

        <Separator className="my-10" />

        {/* BOTTOM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* WALLET */}
          <Card className="lg:col-span-2 p-6 md:p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-purple-700">
              Wallet Balance
            </h2>

            <p className="text-5xl font-bold text-green-600 mt-4">
              ₹{user.wallet}
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Your total earnings
            </p>

            <Button
              onClick={() => setWithdrawOpen(true)}
              className="mt-6 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white py-3 px-10 rounded-xl text-lg flex items-center gap-2"
            >
              <Wallet size={20} />
              Withdraw Money
            </Button>
          </Card>

          {/* ACTIONS */}
          <Card className="p-6 md:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                Account Actions
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Manage your account
              </p>
            </div>

            <Button
              onClick={handleLogout}
              disabled={loggingOut}
              variant="destructive"
              className="mt-6 w-full flex items-center gap-2"
            >
              <LogOut size={20} />
              {loggingOut ? "Logging out..." : "Logout"}
            </Button>
          </Card>
        </div>
      </div>

      {/* WITHDRAW POPUP */}
      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Withdraw Money</DialogTitle>
            <DialogDescription>
              Available balance: ₹{user.wallet}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setWithdrawOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleWithdraw}>
              Confirm Withdrawal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
