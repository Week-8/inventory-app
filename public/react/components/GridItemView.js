import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { BiSearch } from "react-icons/bi";

export default function GridItemView({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [fitleredItems, setFilteredItems] = useState(null);

  function filter(items) {
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }

  useEffect(() => {
    filter(items);
  }, [searchTerm]);

  return (
    <div className="mt-4">
      <div className="relative mb-6">
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search items or categories..."
          className="pl-10 w-full border-2  py-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {fitleredItems?.length === 0 ? (
          <div className="col-span-full p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              No Items Found
            </h2>
            <p className="text-gray-600">
              No items match that criteria. Try adjusting your search or
              filters.
            </p>
          </div>
        ) : (
          <>
            {fitleredItems?.map((item) => (
              <ItemCard item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
