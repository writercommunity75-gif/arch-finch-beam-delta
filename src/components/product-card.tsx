import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/catalog";
import { formatNairaFrom, productOrderMessage, waLink } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-border transition-[box-shadow] duration-150 ease-out hover:shadow-border-hover">
      <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="size-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-2xl font-medium">{product.name}</h3>
          <p className="mt-2 text-sm text-muted">{product.blurb}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-fg">{formatNairaFrom(product.fromNaira)}</p>
          <Button variant="whatsapp" size="sm" asChild>
            <a
              href={waLink(productOrderMessage(product.name))}
              target="_blank"
              rel="noreferrer"
            >
              Order
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
