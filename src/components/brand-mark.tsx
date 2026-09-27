import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function BrandMark() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5 text-fg no-underline sm:gap-3">
      <img
        src="/images/logo.jpg"
        alt=""
        className="mark h-11 w-auto max-w-[96px] shrink-0 object-contain sm:h-12 sm:max-w-[120px]"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.06em] sm:text-xl">
          {SITE.shortName}
        </span>
        <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted sm:tracking-[0.2em]">
          Cakes N' Bags
        </span>
      </span>
    </Link>
  );
}
