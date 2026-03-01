"use client";

const brands = [
  "Toyota",
  "Honda",
  "Hyundai",
  "Kia",
  "Nissan",
  "Jeep",
  "Ford",
  "BMW",
  "Mercedes-Benz",
  "Porsche",
];

export default function BrandsStrip() {
  return (
    <section className="bg-white py-8 md:py-10 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex items-center gap-20 whitespace-nowrap w-max">
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="font-[family-name:var(--font-bebas-neue)] text-2xl md:text-3xl tracking-widest text-neutral-300 hover:text-neutral-800 transition-colors duration-300 cursor-default select-none uppercase"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
