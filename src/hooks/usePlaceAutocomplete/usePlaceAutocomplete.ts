import { useState, useEffect } from "react";

interface Prediction {
  description: string;
  placeId: string;
  mainText: string;
  secondaryText: string;
}

const fakePredictions = [
  {
    description: "Paris, France",
    placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
    mainText: "Paris",
    secondaryText: "France",
  },
  {
    description: "Paris, TX, USA",
    placeId: "ChIJmysnFgZYSoYRSfPTL2YJuck",
    mainText: "Paris",
    secondaryText: "TX, USA",
  },
  {
    description: "Paris, TN, USA",
    placeId: "ChIJ4zHP-Sije4gRBDEsVxunOWg",
    mainText: "Paris",
    secondaryText: "TN, USA",
  },
  {
    description: "Paris, Brant, ON, Canada",
    placeId: "ChIJsamfQbVtLIgR-X18G75Hyi0",
    mainText: "Paris",
    secondaryText: "Brant, ON, Canada",
  },
  {
    description: "Paris, KY, USA",
    placeId: "ChIJsU7_xMfKQ4gReI89RJn0-RQ",
    mainText: "Paris",
    secondaryText: "KY, USA",
  },
];

export default function usePlaceAutocomplete() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const autocomplete = async (value: string) => {
    if (!value.trim()) {
      return setPredictions([]);
    }
    // call api here and update state
    // fetch(
    //   `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=geocode&key=${API_KEY}`
    // );
    const results = fakePredictions.filter((prediction) =>
      prediction.description.toLowerCase().includes(value.toLowerCase())
    );
    setPredictions(results);
  };

  return [predictions, autocomplete] as const;
}
