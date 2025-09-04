"use client";
import { Card } from "./Card";
import { useReducer } from "react";

export default function CardPanel() {
  type Action =
    | { type: "set"; venue: string; rating: number | null }
    | { type: "remove"; venue: string };
  const initialRatings = new Map<string, number | null>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  function reducer(state: Map<string, number | null>, action: Action) {
    switch (action.type) {
      case "set": {
        const newState = new Map(state);
        newState.set(action.venue, action.rating);
        return newState;
      }
      case "remove": {
        const newState = new Map(state);
        newState.delete(action.venue);
        return newState;
      }
      default:
        return state;
    }
  }

  const [ratings, dispatch] = useReducer(reducer, initialRatings);

  return (
    <div>
      <div className="flex flex-row mx-auto pb-[15px] justify-evenly">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          rating={ratings.get("The Bloom Pavilion") ?? 0}
          onRatingChange={(r) =>
            dispatch({ type: "set", venue: "The Bloom Pavilion", rating: r })
          }
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          rating={ratings.get("Spark Space") ?? 0}
          onRatingChange={(r) =>
            dispatch({ type: "set", venue: "Spark Space", rating: r })
          }
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          rating={ratings.get("The Grand Table") ?? 0}
          onRatingChange={(r) =>
            dispatch({ type: "set", venue: "The Grand Table", rating: r })
          }
        />
      </div>
      <div className="text-xl">Venue List with Rating : {ratings.size}</div>
      <div className="mt-6 flex flex-col items-start gap-2 mb-4 pb-4">
        {[...ratings.entries()].map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            className="cursor-pointer px-4 py-2 border rounded w-fit hover:bg-gray-100 mx-10"
            onClick={() => dispatch({ type: "remove", venue })}
          >
            {venue}: {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
