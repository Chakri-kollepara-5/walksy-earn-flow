<<<<<<< HEAD
import { Home, ListTodo, Wallet, Trophy, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <Home size={22} /> },
    { path: "/tasks", label: "Tasks", icon: <ListTodo size={22} /> },
    { path: "/wallet", label: "Wallet", icon: <Wallet size={22} /> },
    { path: "/leaderboard", label: "Rank", icon: <Trophy size={22} /> },
    { path: "/profile", label: "Profile", icon: <User size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg py-3 z-50 flex justify-around">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs ${
              isActive ? "text-primary font-semibold" : "text-gray-500"
            }`
          }
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
=======
import { Home, MapPin, Wallet, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "tasks", icon: MapPin, label: "Tasks" },
    { id: "wallet", icon: Wallet, label: "Wallet" },
    { id: "leaderboard", icon: Trophy, label: "Ranking" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="flex items-center justify-around px-2 py-3">
        {tabs.map(({ id, icon: Icon, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={cn(
                "flex flex-col items-center space-y-1 p-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
export default Navigation;
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
