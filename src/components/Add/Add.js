import React from "react";
import "./Add.css";
import Dining from "../../assets/add_section/dining.webp";
import Bartender from '../../assets/add_section/bartender.webp'
import Markus from "../../assets/add_section/markus.webp";
import Hamburger from '../../assets/add_section/'


const Add = () => {
  return (
    <div className="barplay__add">
      <h1>AJANKOHTAISTA</h1>
      <div className="add__section">
        <div className="add__section-1">
          <img src={Dining}></img>
          <div className="add__dining-text">
            <h2>Anna lahjaksi matka makujenmailmaan</h2>
            <p>
              Ravintolalahjakortilla torjoat lahjansaajalle unohtumattomia
              makuja ja ikimuistoisia elämyksiä! Osta ravintolalahjakortti
              lähimmästä S-ravintolasta.
            </p>
            <a>Lue lisää</a>
          </div>
        </div>
        <div className="add__section-2">
          <div className="add__bartender">
            <img src={Bartender} alt="bartender" className="bartender"></img>
            <div className="bartender__text">
              <h2>Asiakasomistajan omat viinit ja samppanja</h2>
              <p>
                Hei viiniystävät! Vouden viinitilakierros on tehty-löysimme
                nautittavaksi erinomaiset asiakasomistajaviinit. Tervetuloa
                maistelemaan ja nauttimaan!
              </p>
              <a>Lue lisää</a>
            </div>
          </div>
          <div className="add__bartender">
            <img src={Markus} alt="bartender" className="markus"></img>
            <div className="bartender__text">
              <h2>Barplayn syyskuun S-mobiilitarjous - 0,5l Sandels 5,3%</h2>
              <p>
                Bar Play syyskuun S-mobiilietuna nautitaan jääkylmä 0.5L tuoppi
                Sandels 5,3% olutta hintaan 6,60€(norm.7,70€)
              </p>
              <a>Lue lisää</a>
            </div>
          </div>
          <div className="add__bartender">
            <img src={Markus} alt="bartender" className="markus"></img>
            <div className="bartender__text">
              <h2>Barplayn syyskuun S-mobiilitarjous - 0,5l Sandels 5,3%</h2>
              <p>
                Bar Play syyskuun S-mobiilietuna nautitaan jääkylmä 0.5L tuoppi
                Sandels 5,3% olutta hintaan 6,60€(norm.7,70€)
              </p>
              <a>Lue lisää</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
