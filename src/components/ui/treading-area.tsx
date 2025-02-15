import { TreadingItem, TreadingItemSkeleton } from "./treading-item"

export const TreandingArea = () => {
  return(
  <div className="bg-gray-700 rounded-3xl">
    <h2 className="text-xl p-6">O que está acontecendo</h2>
    <div className="flex flex-col gap-4 p-6 pt-0">
      <TreadingItem label="React" count={1000} />
      <TreadingItem label="React" count={1000} />
      <TreadingItemSkeleton />
      <TreadingItemSkeleton />
    </div>
  </div>
  )
}