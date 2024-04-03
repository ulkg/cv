import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>Über mich</strong>
          </h6>
          <p className="grey-text">
            Informatiker mit akademischem Hintergrund und Erfahrung in der Entwicklung von
            Anwendungen in React.
            Fundierte Kenntnisse in der agilen Softwareentwicklung mit Scrum und den
            Arbeitsweisen in einem verteilten Team.
            Starkes Engagement für die Erfüllung der Kundenbedürfnisse mit innovativen und
            kostengünstigen Lösungen.
            Ständig bestrebt, durch die Teilnahme an Online-Kursen und das Lesen von Büchern
            neue Fähigkeiten zu erlernen und Erfahrungen mit neuen Technologien zu sammeln.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>Persönliche Informationen</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
            <p>
                <strong>Name: </strong> Ulrich
              </p>
              <p>
                <strong>Geburtsdatum: </strong> 28.03.
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Muttersprache: </strong> Deutsch
              </p>
              <p>
                <strong>Github: </strong> <a href="https://github.com/ulkg">ULKG</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
