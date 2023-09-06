import React from "react";
import "./Info.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const Info = () => {
  return (
    <div className="barplay__info-section">
      {/* -----info text section------- */}
      <div className="barplay__info-and-schedule">
        <div className="barplay__info-text">
          <h1>MUKANA PELISSÄ!</h1>
          <p>
            Bar Play on kaupungin menevin sporttibaari! Meillä voit katsoa
            urheilua kolmelta jättiscreeniltä sekä kymmenesta muusta
            televisiosta! Lisäksi baaristamme löytyy keittiö, joka tarjoaa
            herkullista pubiruokaa joka päivä aina yöhön saakka. Juomaa
            luonnollisesti ihan jokaiseen makuun! Meillä voit myös pelata
            biljardia, lautapelejä tai vaikka Hohto Beer Pongia!
          </p>
          <br></br>
          <li>
            <a>Tutustu ruokalistaamme ja tee tilauksesi tästä!</a>
          </li>
          <br></br>
          <h2>Asiointi perheille</h2>
          <p>
            Play on viikonloppuisin (pe-su) ja suurten tapahtumien yhteydessä
            aina K18. Alaikäiset ovat kuitenkin tervetulleita vanhempien kanssa
            ruokailemaan ja limulle arkisin (ma-to) ennen klo 18.00.
          </p>
          <br></br>
          <h2>Tilavaraukset</h2>
          <br></br>
          <p>
            Tilavaraukset ja tarjouspyyynnöt myyntipalvelustamme
            sales.karelia@sokoshotels.fi
          </p>
          <br></br>
          <p>
            Muihin kyselyihin vastaamme viikon sisällä ja useimmin parissa
            päivässä parhaiten täältä barplay.joensuu@sok.fi
          </p>
          <br></br>
          <p>Lämpimästi tervetuloa!</p>
        </div>

        {/* -------- schedule info section ------- */}

        <div className="barplay__schedule-section">
          <div className="barplay__schedule-text">
            <h1>Bar play Joensuu</h1>
            {/* ---------clock-------- */}
            <div className="barplay__schedule-clock">
              <AiOutlineClockCircle className="barplay__schedule-icon-clock" />
              <div className="barplay__schedule-clock-p">
                <p>Tänään: 12:00 - 02:00</p>
                <p>Keittiö: 12:00 - 01:00</p>
              </div>
            </div>
            {/* ----------location-------- */}
            <div className="barplay__schedule-location">
              <div className="schedule__location-icon-text">
                <CiLocationOn className="barplay__schedule-icon-location" />
                <p>Kauppakatu 23 B, 80100 Joensuu</p>
              </div>
              <a href="#">Karta</a>
            </div>
            <br></br>
            {/* -------phone-------- */}
            <div className="barplay__schedule-phone">
              <div className="phone__icon-text">
              <BsTelephone className="barplay__schedule-icon-phone" />
              <a href="#">010 7623510</a>
              </div>
              <a href="#" id="soita">
                Soita
              </a>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
          {/* --------food list--------- */}
          <div className="barplay__ruoka-listat">
            <a href="#">Ruoka-ja juomalistat</a>
            <a href="#">Kaikki yhteistiedot</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
