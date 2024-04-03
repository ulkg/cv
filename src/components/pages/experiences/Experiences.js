import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Berufserfahrung</strong>
          </h6>
          <div className="row mt-top ">
            <div className="col xl4 l4 m6 s12">
              <p className="brown darken-3 year_exp white-text" style={{ paddingLeft: "4px" }}>
                09/2020 bis jetzt
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad brow lighten-3">
                <h6 className="no-pad mt-bottom">
                  <strong>Full-Stack-Entwickler / DevOps-Engineer</strong>
                </h6>
                <p>
                  Konzeption von APIs zum Datenaustausch
                  zwischen Backend und Frontend. Entwicklung von React-Komponenten
                  basierend auf einem Design System. Durchführen von Datenmigrationen in
                  einer MongoDB und Hosting der Applikation in einer Azure Cloud Infrastruktur mittels Infrastructure as code (IaC).
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top ">
            <div className="col xl4 l4 m6 s12">
              <p className="brown darken-3 year_exp white-text" style={{ paddingLeft: "4px" }}>
                03/2020 bis 09/2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad brow lighten-3">
                <h6 className="no-pad mt-bottom">
                  <strong>Full-Stack-Entwickler</strong>
                </h6>
                <p>
                  Weiterentwicklung einer modularen Software Plattform für Mobilitätsservices auf Basis von Java-Technologien (Spring MVC, Spring
                  Security, etc.). Mitarbeit an Frontend Komponenten (HTML5, CSS3, AngularJS) und Systemen im DevOps-Umfeld in einem agilen Team.
                  Durchführen von Deployments mit Helm Charts und Wartung eines Kubernetes Cluster mit dem Tool K9s.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top ">
            <div className="col xl4 l4 m6 s12">
              <p className="brown darken-3 year_exp white-text" style={{ paddingLeft: "4px" }}>
                10/2018 – 03/2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad brow lighten-3">
                <h6 className="no-pad mt-bottom">
                  <strong>Java Entwickler</strong>
                </h6>
                <p>
                  Weiterentwicklung und Anpassung eines E-Commerce-Systems basierend auf SAP Hybris.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top ">
            <div className="col xl4 l4 m6 s12">
              <p className="brown darken-3 year_exp white-text" style={{ paddingLeft: "4px" }}>
                08/2017
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad brow lighten-3">
                <h6 className="no-pad mt-bottom">
                  <strong>Praktikum</strong>
                </h6>
                <p>
                  Detailkonfiguration einer Systemüberwachungssuite in Zabbix.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
