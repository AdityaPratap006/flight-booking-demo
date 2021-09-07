import { flights } from "../data/localData";

export const getFlights = async ({ source, destination, travelDate }) => {
  const filteredFlights = flights.filter((flight) => {
    const sourceMatched = source === flight.source;
    const destMatch = destination === flight.destination;
    const available = flight.availability.some((window) => {
      const startDate = new Date(window.from);
      const endDate = new Date(window.to);

      return (
        new Date(travelDate) >= startDate && new Date(travelDate) <= endDate
      );
    });

    return sourceMatched && destMatch && available;
  });

  return filteredFlights;
};
