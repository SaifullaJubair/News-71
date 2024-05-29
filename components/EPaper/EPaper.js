import Link from "next/link";
import React, { useEffect, useState } from "react";

const EPaper = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-alias")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);
  return (
    <div className="max-w-[1440px] w-[95%] mx-auto">
      <div className="flex gap-4 flex-wrap my-16">
        {categories?.map((category) => (
          <div key={category?._id}>
            <Link
              href={`/e-paper/${category?._id}`}
              className="text-blue-500  px-3 py-2 rounded border"
            >
              {category?.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EPaper;
