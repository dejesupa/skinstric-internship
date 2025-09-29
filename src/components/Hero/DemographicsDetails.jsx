import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DemographicsDetails() {
  const location = useLocation();
  const { capturedImage } = location.state || {};
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (capturedImage) {
      axios
        .post(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          { image: capturedImage }
        )
        .then((res) => setResults(res.data.data))
        .catch((err) => console.error("Error:", err));
    }
  }, [capturedImage]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {!results ? (
        <p>Analyzing image...</p>
      ) : (
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Demographic Results</h2>
          {/* Race */}
          <div>
            <h3 className="font-semibold">Race</h3>
            {Object.entries(results.race)
              .sort((a, b) => b[1] - a[1])
              .map(([key, val]) => (
                <p key={key}>
                  {key}: {(val * 100).toFixed(2)}%
                </p>
              ))}
          </div>

          {/* Age */}
          <div>
            <h3 className="font-semibold">Age</h3>
            {Object.entries(results.age)
              .sort((a, b) => b[1] - a[1])
              .map(([key, val]) => (
                <p key={key}>
                  {key}: {(val * 100).toFixed(2)}%
                </p>
              ))}
          </div>

          {/* Gender */}
          <div>
            <h3 className="font-semibold">Gender</h3>
            {Object.entries(results.gender)
              .sort((a, b) => b[1] - a[1])
              .map(([key, val]) => (
                <p key={key}>
                  {key}: {(val * 100).toFixed(2)}%
                </p>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
