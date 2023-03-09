import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);
  const total: number = cVotes + vVotes + sVotes;
  const cPercent: string = ((cVotes / total) * 100).toFixed(2) + "%";
  const vPercent: string = ((vVotes / total) * 100).toFixed(2) + "%";
  const sPercent: string = ((sVotes / total) * 100).toFixed(2) + "%";
  return (
    <div className="Votes">
      <h2> Votes Here</h2>
      <div>
        <button onClick={() => setCVotes((prev) => prev + 1)}>Chocolate</button>
        <button onClick={() => setVVotes((prev) => prev + 1)}>Vanilla</button>
        <button onClick={() => setSVotes((prev) => prev + 1)}>
          Strawberry
        </button>
      </div>
      {total === 0 ? (
        <p>No Votes yet</p>
      ) : (
        <>
          {cVotes > 0 && (
            <div>
              <p>
                Chocolate: {cVotes} ({cPercent})
              </p>
              <div className="bar chocolate" style={{ width: cPercent }}></div>
            </div>
          )}
          {vVotes > 0 && (
            <div>
              <p>
                Vanilla: {vVotes} ({vPercent})
              </p>
              <div className="bar vanilla" style={{ width: vPercent }}></div>
            </div>
          )}
          {sVotes > 0 && (
            <div>
              <p>
                Strawberry:{sVotes} ({sPercent})
              </p>
              <div className="bar strawberry" style={{ width: sPercent }}></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Votes;
