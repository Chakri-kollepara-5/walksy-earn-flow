<<<<<<< HEAD
import { useState } from "react";
import { Wallet, TrendingUp, Clock, Star, Bell, Sparkles } from "lucide-react";
=======
import { useState, useEffect } from "react";
import { Wallet, TrendingUp, Clock, Star, Bell } from "lucide-react";
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
import StepCounter from "@/components/StepCounter";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";

const Home = () => {
<<<<<<< HEAD
  const [userData] = useState({
=======
  const [userData, setUserData] = useState({
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    name: "Alex Runner",
    steps: 7234,
    goal: 10000,
    calories: 432,
    distance: 5.8,
    earnings: 1250,
    level: 12,
<<<<<<< HEAD
    rank: 47,
  });

  const [quickTasks] = useState([
=======
    rank: 47
  });

  const [quickTasks, setQuickTasks] = useState([
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    {
      id: "1",
      title: "Deliver Coffee",
      description: "Pick up coffee from Starbucks and deliver to office building",
      location: "MG Road, Bangalore",
      distance: "0.8 km",
      duration: "15 min",
      commission: 85,
      category: "delivery" as const,
<<<<<<< HEAD
      difficulty: "easy" as const,
    },
    {
      id: "2",
=======
      difficulty: "easy" as const
    },
    {
      id: "2", 
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      title: "Grocery Shopping",
      description: "Buy groceries from local supermarket - list provided",
      location: "Forum Mall, Koramangala",
      distance: "1.2 km",
<<<<<<< HEAD
      duration: "25 min",
      commission: 120,
      category: "shopping" as const,
      difficulty: "medium" as const,
    },
=======
      duration: "25 min", 
      commission: 120,
      category: "shopping" as const,
      difficulty: "medium" as const
    }
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
  ]);

  const handleTaskAccept = (taskId: string) => {
    console.log("Accepted task:", taskId);
<<<<<<< HEAD
  };

  return (
    <div className="min-h-screen bg-background pb-24">

      {/* 🌟 Responsive Hero Section */}
      <section className="w-full text-center py-14 px-6 md:px-10 lg:px-16 bg-gradient-to-b from-[#f3e8ff] to-white">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-1 rounded-full 
                        text-sm font-medium text-purple-600 shadow-sm">
          <Sparkles size={16} />
          Now Live — Join 50K+ Walkers
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-purple-700 leading-snug">
          Walk Your Way to <br className="hidden md:block" /> Wellness
        </h1>

        {/* Subtext */}
        <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Track steps, earn rewards, compete with friends, and reach your fitness goals.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-8 py-5 
                             text-white rounded-xl text-lg shadow-md transition">
            Start Walking Today
          </Button>

          
        </div>

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">

          <div className="bg-white shadow-md rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-purple-700">2,820+</p>
            <p className="text-gray-600 text-sm">Active Users</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-purple-700">74,040+</p>
            <p className="text-gray-600 text-sm">Steps Today</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-purple-700">1,380+</p>
            <p className="text-gray-600 text-sm">KM This Week</p>
          </div>

        </div>
      </section>

      {/* Dashboard Content */}
      <div className="px-5 md:px-8 mt-6 space-y-8 max-w-3xl mx-auto">

        {/* Step Counter */}
        <StepCounter
=======
    // Handle task acceptance logic
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-primary-dark text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Good Morning</h1>
            <p className="text-lg text-white/90">{userData.name}!</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-white/90" />
            <div className="text-right">
              <div className="text-sm text-white/80">Total Earnings</div>
              <div className="text-xl font-bold">₹{userData.earnings}</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Wallet className="w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold">₹{userData.earnings}</div>
            <div className="text-xs text-white/80">Earned</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <TrendingUp className="w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold">#{userData.rank}</div>
            <div className="text-xs text-white/80">Ranking</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Star className="w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold">4.8</div>
            <div className="text-xs text-white/80">Rating</div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Step Counter */}
        <StepCounter 
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
          steps={userData.steps}
          goal={userData.goal}
          calories={userData.calories}
          distance={userData.distance}
        />

        {/* Daily Challenge */}
<<<<<<< HEAD
        <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 
                        border border-primary/20 shadow-sm">
          
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold">Daily Challenge</h3>
              <p className="text-sm text-muted-foreground">Complete 3 tasks before 6 PM</p>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/3"></div>
=======
        <div className="card-clean p-5 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">Daily Challenge</h3>
              <p className="text-sm text-muted-foreground mb-2">Complete 3 tasks before 6 PM</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/3 transition-all duration-300"></div>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
                </div>
                <span className="text-xs text-muted-foreground">1/3</span>
              </div>
            </div>
<<<<<<< HEAD

            <div className="text-right">
              <p className="text-2xl font-bold text-primary">₹200</p>
              <p className="text-xs text-muted-foreground">Bonus</p>
            </div>
          </div>

        </div>

        {/* Tasks Near You */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Tasks Near You</h2>
            <Button variant="ghost" className="text-primary">View All</Button>
          </div>

          <div className="space-y-4">
            {quickTasks.map((task) => (
              <TaskCard 
                key={task.id}
                task={task}
=======
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient">₹200</div>
              <div className="text-xs text-muted-foreground">Bonus</div>
            </div>
          </div>
        </div>

        {/* Quick Tasks */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Tasks Near You</h2>
            <Button variant="ghost" className="text-primary hover:text-primary-dark">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {quickTasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
                onAccept={handleTaskAccept}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button className="h-14 bg-primary text-white text-lg">Start Walking</Button>
          <Button variant="outline" className="h-14 border-primary text-primary text-lg">
            Find Tasks
          </Button>
        </div>

=======
        <div className="grid grid-cols-2 gap-4">
          <Button className="h-14 bg-primary hover:bg-primary-dark text-white font-medium">
            Start Walking
          </Button>
          <Button variant="outline" className="h-14 border-primary text-primary hover:bg-primary/10">
            Find Tasks
          </Button>
        </div>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
