interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryPill = ({ label, isActive = false, onClick }: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-soft"
          : "bg-card text-foreground border border-border hover:bg-muted hover:border-muted"
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryPill;
