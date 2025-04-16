import React, { useState } from "react";

export default function AnalysePubTF1() {
  const [videoURL, setVideoURL] = useState("");
  const [objectif, setObjectif] = useState("");
  const [cible, setCible] = useState("");
  const [resultat, setResultat] = useState(null);

  const analyserPub = () => {
    setResultat({
      breakthrough: 68,
      response: 68,
      mapping: "Mapping généré",
      scores: {
        message: 70,
        audio: 55,
        marque: 86,
        personnage: 35,
        scene: 60,
      },
      recommandations: [
        "Intégrer la marque plus tôt dans la vidéo",
        "Clarifier le message principal dès les premières secondes",
        "Renforcer la connexion émotionnelle avec le personnage principal"
      ]
    });
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ color: '#002A5C' }}>Analyse Publicitaire - TF1 PUB</h1>
      <input 
        type="text" 
        placeholder="Lien de la vidéo" 
        value={videoURL} 
        onChange={(e) => setVideoURL(e.target.value)} 
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />
      <input 
        type="text" 
        placeholder="Objectif de la campagne" 
        value={objectif} 
        onChange={(e) => setObjectif(e.target.value)} 
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />
      <input 
        type="text" 
        placeholder="Cible de la campagne" 
        value={cible} 
        onChange={(e) => setCible(e.target.value)} 
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />
      <button onClick={analyserPub} style={{ padding: 10, backgroundColor: '#002A5C', color: 'white' }}>
        Analyser
      </button>

      {resultat && (
        <div style={{ marginTop: 30 }}>
          <h2 style={{ color: '#002A5C' }}>Résultats</h2>
          <p><strong>Breakthrough :</strong> {resultat.breakthrough}</p>
          <p><strong>Response :</strong> {resultat.response}</p>
          <h3>Performance par thème</h3>
          <ul>
            {Object.entries(resultat.scores).map(([key, value]) => (
              <li key={key}><strong>{key} :</strong> {value}%</li>
            ))}
          </ul>
          <h3>Recommandations</h3>
          <ul>
            {resultat.recommandations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
