import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

const MenuItem = ({ name, description, price, image, isVeg }: MenuItemProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-menu hover:shadow-menu-hover transition-all duration-300 group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={cn(
          "absolute top-3 left-3 w-5 h-5 rounded-sm border-2 flex items-center justify-center",
          isVeg ? "border-veg bg-veg/20" : "border-nonveg bg-nonveg/20"
        )}>
          <div className={cn(
            "w-2 h-2 rounded-full",
            isVeg ? "bg-veg" : "bg-nonveg"
          )} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-card-foreground text-lg leading-tight mb-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-lg">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
