import React from "react";
import { Search } from ".";
import { fetchCars } from "@/utils";
import { CarCard } from ".";

export default async function BuyCars() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="p-6">
      <Search />
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          {/* <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          /> */}
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  );
}
