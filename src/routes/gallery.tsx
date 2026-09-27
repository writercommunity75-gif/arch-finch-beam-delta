import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import {
  CATEGORIES,
  isGalleryShelf,
  productsByCategory,
  type Category,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): { shelf: Category | "all" } => ({
    shelf: isGalleryShelf(search.shelf) ? search.shelf : "all",
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { shelf } = Route.useSearch();
  const navigate = Route.useNavigate();
  const items = productsByCategory(shelf);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Portfolio</p>
      <h1 className="mt-2 font-display text-5xl">Gallery</h1>
      <p className="mt-3 max-w-xl text-muted">
        Cakes, snacks, and bags in separate shelves. Filter, then tap Order. Starting
        prices are a floor. The WhatsApp quote is the real price.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
        {CATEGORIES.map((cat) => {
          const active = shelf === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => navigate({ search: { shelf: cat.id } })}
              className={cn(
                "h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                active
                  ? "bg-primary text-primary-fg"
                  : "bg-surface text-fg shadow-border hover:bg-surface-muted",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
