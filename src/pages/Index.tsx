import { useState, useEffect } from "react";
import MenuHeader from "@/components/MenuHeader";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import { categories, menuSections } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuSections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <main className="container pb-16">
        {menuSections.map((section) => (
          <MenuSection
            key={section.id}
            id={section.id}
            title={section.title}
            subtitle={section.subtitle}
            items={section.items}
          />
        ))}
      </main>
      <footer className="bg-card border-t border-border py-8">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Spice Kitchen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Prices inclusive of all taxes. Images are for illustration purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
