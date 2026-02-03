const MenuHeader = () => {
  return (
    <header className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Open Now
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Scan<span className="text-primary">Eats</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Authentic flavors, fresh ingredients, unforgettable taste
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span>🕐</span> 10 AM - 11 PM
            </span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span className="flex items-center gap-1">
              <span>📍</span> MG Road, Bangalore
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
