import styles from "@/styles/accordian.module.css";

export function Accordion() {
  return (
    <div className={styles.accordion}>
      <details name="accordion" id="boating" open>
        <summary>
          <span>🚤</span>
          <img
            draggable={false}
            src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/boat.webp"
            alt=""
          />
        </summary>
        <div className="details-content-wrapper">
          <h3>Boating</h3>
          <p>
            Port mutiny draught handsomely ye furl flogging line shrouds hulk.
            Spirits Plate Fleet code of conduct.
          </p>
        </div>
      </details>
      <details name="accordion" id="anchoring">
        <summary>
          <span>⚓️</span>
          <img
            draggable={false}
            src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/anchor.webp"
            alt=""
          />
        </summary>
        <div className="details-content-wrapper">
          <h3>Anchoring</h3>
          <p>
            Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp
            Privateer galleon. Booty boom yard boatswain quarter.
          </p>
        </div>
      </details>
      <details name="accordion" id="fishing">
        <summary>
          <span>🎣</span>
          <img
            draggable={false}
            src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/fishing.webp"
            alt=""
          />
        </summary>
        <div className="details-content-wrapper">
          <h3>Fishing</h3>
          <p>
            No prey, no pay heave down splice the main brace furl cable snow
            walk the plank chase guns piracy bucko.
          </p>
        </div>
      </details>
      <details name="accordion" id="lighthouses">
        <summary>
          <span>🔦</span>
          <img
            draggable={false}
            src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/lighthouse.webp"
            alt=""
          />
        </summary>
        <div className="details-content-wrapper">
          <h3>Lighthouses</h3>
          <p>
            Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair
            Arr mizzenmast.
          </p>
        </div>
      </details>
      <details name="accordion" id="reefs">
        <summary>
          <span>🪸</span>
          <img
            draggable={false}
            src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/reef.webp"
            alt=""
          />
        </summary>
        <div className="details-content-wrapper">
          <h3>Reefs</h3>
          <p>
            Keel yard poop deck brigantine gaff six pounders bring a spring upon
            her cable interloper lad pink.
          </p>
        </div>
      </details>
    </div>
  );
}
