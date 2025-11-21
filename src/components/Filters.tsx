"use client";

export default function Filters() {
  return (
    <section className="flex flex-wrap gap-3 items-center justify-between">
      <div className="flex flex-wrap gap-3">
        <select className="border bg-white px-3 py-2 rounded text-sm">
          <option>All statuses</option>
          <option>Active</option>
          <option>Paused</option>
        </select>

        <select className="border bg-white px-3 py-2 rounded text-sm">
          <option>Sort: None</option>
          <option>Sort by CTR</option>
          <option>Sort by Conversions</option>
        </select>
      </div>

      <input
        className="border bg-white px-3 py-2 rounded text-sm min-w-[220px]"
        placeholder="Search campaigns..."
      />
    </section>
  );
}
