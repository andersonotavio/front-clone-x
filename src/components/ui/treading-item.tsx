import Link from "next/link";

type Props = {
  label: string;
  count: number;
}

export const TreadingItem = ({label, count}: Props) => {
  return(
    <Link href={`/search?q=${encodeURIComponent(label)}`} className="group/item">
      <div className="group-hover/item:underline font-bold">{label}</div>
      <div className="text-sm text-gray-400">{count} Posts</div>
    </Link>
  )
}

export const TreadingItemSkeleton = () => {
  return(
    <div className="animate-pulse flex flex-col gap-1">
      <div className="bg-gray-600 h-5 rounded-3xl w-3/4"></div>
      <div className="bg-gray-600 h-5 rounded-3xl w-1/4"></div>
    </div>
  )
}