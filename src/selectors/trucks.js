/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */


export function findTruck(trucks, searchedSlug) {
  const truck = trucks.find((testedTruck) => {
    return testedTruck.slug.toLowerCase() === searchedSlug.toLowerCase();
  });
  return Truck;
}
