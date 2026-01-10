import MenuItem from "./MenuItem";

interface FoodItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

interface MenuSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  items: FoodItem[];
}

const MenuSection = ({ id, title, subtitle, items }: MenuSectionProps) => {
  return (
    <section id={id} className="py-8 scroll-mt-24">
      <div className="mb-6">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        )}
        <div className="h-1 w-16 bg-primary rounded-full mt-3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
