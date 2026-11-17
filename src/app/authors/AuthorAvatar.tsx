// src/app/authors/AuthorAvatar.tsx
import { authorInitials, type FeaturedAuthor } from "../data/authors";

const sizes = {
  sm: "h-12 w-12 text-sm",
  md: "h-20 w-20 text-xl",
  lg: "h-28 w-28 text-3xl",
  xl: "h-36 w-36 text-4xl",
};

const pixelSizes = {
  sm: 48,
  md: 80,
  lg: 112,
  xl: 144,
};

export default function AuthorAvatar({
  author,
  size = "md",
  ring = "",
}: {
  author: Pick<FeaturedAuthor, "name" | "photo">;
  size?: keyof typeof sizes;
  ring?: string;
}) {
  const dim = pixelSizes[size];
  return (
    <div
      className={`${sizes[size]} ${ring} relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#8d171c] to-[#4a0b0e] shadow-lg`}
    >
      {author.photo ? (
        <img
          src={author.photo}
          alt={author.name}
          width={dim}
          height={dim}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[center_15%]"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-black tracking-tight text-white">
          {authorInitials(author.name)}
        </span>
      )}
    </div>
  );
}
