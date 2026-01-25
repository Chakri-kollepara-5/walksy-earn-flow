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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="pt-12 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <Card className="p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-28 w-28 border-4 border-purple-300 shadow-md">
                <AvatarImage src="https://i.imgur.com/1whoCM3.jpeg" />
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>

              <h1 className="text-3xl font-extrabold mt-4 text-purple-700">
                {user.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>

              <Button className="mt-6 px-6 rounded-xl bg-purple-600 hover:bg-purple-700">
                Edit Profile
              </Button>
            </div>
          </Card>

          {/* STATS */}
          <Card className="lg:col-span-2 p-8 rounded-3xl shadow-lg">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">
              Weekly Performance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Stat label="Steps" value={user.stepsThisWeek} />
              <Stat label="Distance" value={`${user.totalKm} km`} />
              <Stat label="Rank" value={`#${user.rank}`} />
            </div>
          </Card>
        </div>

        <Separator className="my-10" />

        {/* BOTTOM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* WALLET */}
          <Card className="lg:col-span-2 p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-purple-50">
            <h2 className="text-xl font-semibold text-purple-700">
              Wallet Balance
            </h2>

            <p className="text-6xl font-extrabold text-green-600 mt-6">
              ₹{user.wallet}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Available balance
            </p>

            <Button
              onClick={() => setWithdrawOpen(true)}
              className="mt-8 bg-purple-600 hover:bg-purple-700 rounded-xl px-10 py-6 text-lg flex items-center gap-2"
            >
              <Wallet size={20} />
              Withdraw Money
            </Button>
          </Card>

          {/* ACTIONS */}
          <Card className="p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-purple-700">
                Account Actions
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Manage session & security
              </p>
            </div>

            <Button
              onClick={handleLogout}
              disabled={loggingOut}
              variant="destructive"
              className="mt-8 w-full flex items-center gap-2"
            >
              <LogOut size={20} />
              {loggingOut ? "Logging out..." : "Logout"}
            </Button>
          </Card>
        </div>
      </div>

      {/* WITHDRAW DIALOG */}
      <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
        <DialogContent className="rounded-2xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Withdraw Money</DialogTitle>
            <DialogDescription>
              Available balance: ₹{user.wallet}
            </DialogDescription>
          </DialogHeader>

          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-4"
          />

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

const Stat = ({ label, value }: { label: string; value: any }) => (
  <div className="bg-purple-50 rounded-2xl p-6 text-center shadow-sm">
    <p className="text-3xl font-bold text-purple-700">{value}</p>
    <p className="text-sm text-muted-foreground mt-1">{label}</p>
  </div>
);

export default Profile;
