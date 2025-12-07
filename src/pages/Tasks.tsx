import { useState } from "react";
import { Search, Filter, MapPin, List, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TaskCard from "@/components/TaskCard";
<<<<<<< HEAD
import TaskMapView from "@/components/TaskMapView";
=======
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512

const Tasks = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", count: 24 },
    { id: "delivery", label: "Delivery", count: 8 },
    { id: "shopping", label: "Shopping", count: 6 },
    { id: "pickup", label: "Pickup", count: 5 },
<<<<<<< HEAD
    { id: "survey", label: "Survey", count: 5 },
=======
    { id: "survey", label: "Survey", count: 5 }
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
  ];

  const tasks = [
    {
      id: "1",
      title: "Deliver Coffee Order",
<<<<<<< HEAD
      description:
        "Pick up coffee from Starbucks on Brigade Road and deliver to Prestige Tech Park",
=======
      description: "Pick up coffee from Starbucks on Brigade Road and deliver to Prestige Tech Park",
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      location: "Brigade Road → Prestige Tech Park",
      distance: "0.8 km",
      duration: "15 min",
      commission: 85,
      category: "delivery" as const,
<<<<<<< HEAD
      difficulty: "easy" as const,
      lat: 12.9755,
      lng: 77.604,
=======
      difficulty: "easy" as const
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    },
    {
      id: "2",
      title: "Grocery Shopping List",
<<<<<<< HEAD
      description:
        "Buy groceries from Big Bazaar - detailed shopping list will be provided",
      location: "Forum Mall, Koramangala",
      distance: "1.2 km",
      duration: "25 min",
      commission: 120,
      category: "shopping" as const,
      difficulty: "medium" as const,
      lat: 12.9352,
      lng: 77.6266,
=======
      description: "Buy groceries from Big Bazaar - detailed shopping list will be provided",
      location: "Forum Mall, Koramangala",
      distance: "1.2 km", 
      duration: "25 min",
      commission: 120,
      category: "shopping" as const,
      difficulty: "medium" as const
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    },
    {
      id: "3",
      title: "Document Pickup",
      description: "Collect documents from law office and deliver to client's home",
      location: "UB City Mall → HSR Layout",
      distance: "3.5 km",
      duration: "35 min",
      commission: 180,
      category: "pickup" as const,
<<<<<<< HEAD
      difficulty: "hard" as const,
      lat: 12.9719,
      lng: 77.5963,
=======
      difficulty: "hard" as const
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    },
    {
      id: "4",
      title: "Restaurant Survey",
<<<<<<< HEAD
      description: "Complete a quick survey about service quality",
=======
      description: "Complete a quick survey about service quality at a nearby restaurant",
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      location: "Indiranagar, Multiple locations",
      distance: "0.5 km",
      duration: "10 min",
      commission: 50,
      category: "survey" as const,
<<<<<<< HEAD
      difficulty: "easy" as const,
      lat: 12.9718,
      lng: 77.6412,
=======
      difficulty: "easy" as const
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    },
    {
      id: "5",
      title: "Medicine Delivery",
<<<<<<< HEAD
      description:
        "Collect prescription from Apollo Pharmacy and deliver to elderly customer",
=======
      description: "Collect prescription from Apollo Pharmacy and deliver to elderly customer",
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      location: "Apollo Pharmacy → Jayanagar",
      distance: "2.1 km",
      duration: "20 min",
      commission: 95,
      category: "delivery" as const,
<<<<<<< HEAD
      difficulty: "easy" as const,
      lat: 12.925,
      lng: 77.5938,
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || task.category === selectedCategory;

=======
      difficulty: "easy" as const
    }
  ];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || task.category === selectedCategory;
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
    return matchesSearch && matchesCategory;
  });

  const handleTaskAccept = (taskId: string) => {
    console.log("Accepted task:", taskId);
<<<<<<< HEAD
  };

  return (
    <div className="min-h-screen bg-background pb-24">

      {/* 💜 Walksy Header */}
      <header className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Available Tasks</h1>
            <p className="text-sm md:text-base text-white/80">
              {filteredTasks.length} tasks near you
            </p>
          </div>

          {/* Toggle Buttons */}
=======
    // Handle task acceptance logic
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-primary-dark text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Available Tasks</h1>
            <p className="text-sm text-white/80">{filteredTasks.length} tasks near you</p>
          </div>
          
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="text-white border-white/20"
            >
              <List size={18} />
            </Button>
<<<<<<< HEAD

=======
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
            <Button
              variant={viewMode === "map" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="text-white border-white/20"
            >
              <MapPin size={18} />
            </Button>
          </div>
        </div>

<<<<<<< HEAD
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={20} />
=======
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
          <Input
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-11"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
=======
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
<<<<<<< HEAD
              className="whitespace-nowrap flex-shrink-0 text-white border-white/20 rounded-full"
=======
              className="whitespace-nowrap flex-shrink-0 text-white border-white/20"
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>
      </header>

<<<<<<< HEAD
      {/* ⚙️ Sorting Bar */}
=======
      {/* Filter Bar */}
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
      <div className="flex items-center justify-between p-4 bg-card border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal size={16} />
          <span>Sorted by: Distance</span>
        </div>
<<<<<<< HEAD

=======
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
        <Button variant="ghost" size="sm" className="text-primary">
          <Filter size={16} className="mr-1" />
          Filters
        </Button>
      </div>

<<<<<<< HEAD
      {/* 📋 LIST VIEW (GRID) */}
      {viewMode === "list" && (
        <div className="p-4 md:p-6">
          {filteredTasks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onAccept={handleTaskAccept} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/40 flex items-center justify-center">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">No tasks found</h3>
              <p className="text-muted-foreground text-sm">
                Try adjusting your search or filters
              </p>
=======
      {/* Task List */}
      {viewMode === "list" && (
        <div className="p-6 space-y-4">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onAccept={handleTaskAccept}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No tasks found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
            </div>
          )}
        </div>
      )}

<<<<<<< HEAD
      {/* 🗺️ MAP VIEW */}
      {viewMode === "map" && (
        <div className="p-4 md:p-6">
          <div className="rounded-xl overflow-hidden shadow-md border">
            <TaskMapView tasks={filteredTasks} />
=======
      {/* Map View Placeholder */}
      {viewMode === "map" && (
        <div className="p-6">
          <div className="card-clean h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Map View</h3>
              <p className="text-muted-foreground">Interactive map coming soon!</p>
            </div>
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
          </div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Tasks;
=======
export default Tasks;
>>>>>>> 84c7b38fc5b3b77518c7d3f86d2a240e4463b512
