import GradientText from "../components/GradientText";
import Apple from "../assets/icons/company/Apple";
import Android from "../assets/icons/company/Android";
import Xbox from "../assets/icons/company/Xbox";
import PlayStation from "../assets/icons/company/PlayStation";
import Switch from "../assets/icons/company/Switch";
import Microsoft from "../assets/icons/company/Microsoft";
import style from "../assets/styles/pages/about/advirtizement.module.scss";
export const Gaming = () => {
  return (
    <div className={style.gaming}>
      <GradientText
        startColor="#ff3c8e "
        endColor="#a400f1 "
        deg={90}
        text="Gaming"
        fontWeight="600"
      />
      <ul className={style.statistics}>
        <li>
          <h2>45%</h2>
          <span>Mobile</span>
          <span>
            <Apple />
            <Android />
          </span>
        </li>
        <li>
          <h2>30%</h2>
          <span>Console</span>
          <span>
            <Xbox />
            <PlayStation />
            <Switch />
          </span>
        </li>
        <li>
          <h2>25%</h2>
          <span>PC</span>
          <span>
            <Microsoft />
          </span>
        </li>
      </ul>
    </div>
  );
};
export const Multinational = () => {
  return (
    <div className={style.multinational}>
      <GradientText
        startColor="#0057ff"
        endColor="#00c1db"
        deg={90}
        text="Multinational"
        fontWeight="600"
      />

      <h2>8 nationalities</h2>
      <div className={style.flags}>
        <img
          draggable="false"
          alt="🇺🇸"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1fa-1f1f8.svg"
        />
        <img
          draggable="false"
          alt="🇨🇦"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1e8-1f1e6.svg"
        />
        <img
          draggable="false"
          alt="🇦🇷"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1e6-1f1f7.svg"
        />
        <img
          draggable="false"
          alt="🇲🇽"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1f2-1f1fd.svg"
        />
        <img
          draggable="false"
          alt="🇮🇱"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ee-1f1f1.svg"
        />
        <img
          draggable="false"
          alt="🇬🇪"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1ec-1f1ea.svg"
        />
        <img
          draggable="false"
          alt="🇷🇺"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1f7-1f1fa.svg"
        />
        <img
          draggable="false"
          alt="🇨🇳"
          src="https://s.w.org/images/core/emoji/15.0.3/svg/1f1e8-1f1f3.svg"
        />
      </div>
    </div>
  );
};
export const Intergenerational = () => {
  return (
    <div className={style.intergenerational}>
      <GradientText
        startColor="#ff3c8e"
        endColor="#a400f1"
        deg={90}
        text="Intergenerational"
        fontWeight="600"
      />
      <ul className={style.statistics}>
        <li>
          <h2>20%</h2>
          <span>Gen X</span>
        </li>
        <li>
          <h2>50%</h2>
          <span>Gen Y</span>
        </li>
        <li>
          <h2>30%</h2>
          <span>Gen Z</span>
        </li>
      </ul>
    </div>
  );
};
export const Globally_distributed = () => {
  return (
    <div className={style.globally_distributed}>
      <GradientText
        startColor="#3cd0ff "
        endColor="#00c72c "
        deg={90}
        text="Globally distributed"
        fontWeight="600"
      />
      <h2>10 locations</h2>
      <p>
        Silicon Valley, San Diego, Los Angeles, New York, Richmond, Edmonton,
        Monterrey, Buenos Aires, Tel Aviv, Tbilisi
      </p>
    </div>
  );
};
export const Musical = () => {
  return (
    <div className={style.musical}>
      <GradientText
        startColor="#8000ff"
        endColor="#cc3dff"
        deg={90}
        text="Musical"
        fontWeight="600"
      />
      <ul className={style.statistics}>
        <li>
          <h2>69%</h2>
          <span>play</span>
          <span>
            <img
              draggable="false"
              alt="🎸"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3b8.svg"
            />
          </span>
        </li>
        <li>
          <h2>28%</h2>
          <span>play</span>
          <span>
            <img
              draggable="false"
              alt="🎹"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3b9.svg"
            />
          </span>
        </li>
        <li>
          <h2>5%</h2>
          <span>play</span>
          <span>
            <img
              draggable="false"
              alt="🎷"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3b7.svg"
            />
            <img
              draggable="false"
              alt="🔔"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f514.svg"
            />
          </span>
        </li>
        <li>
          <h2>25%</h2>
          <span>can’t hold</span>
          <span>a tune</span>
        </li>
      </ul>
    </div>
  );
};
export const Pet_loving = () => {
  return (
    <div className={style.pet_loving}>
      <GradientText
        startColor="#0057ff"
        endColor="#00c1db"
        deg={90}
        text="Pet loving"
        fontWeight="600"
      />
      <ul className={style.statistics}>
        <li>
          <h2>45%</h2>
          <span>have</span>
          <span>
            <img
              draggable="false"
              alt="🐱"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f431.svg"
            />
          </span>
        </li>
        <li>
          <h2>45%</h2>
          <span>have</span>
          <span>
            <img
              draggable="false"
              alt="🐶"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f436.svg"
            />
          </span>
        </li>
        <li>
          <h2>+2</h2>
          <span>guinea</span>
          <span>
            pigs
            <img
              draggable="false"
              alt="🐹"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f439.svg"
            />
          </span>
        </li>
        <li>
          <h2>+2</h2>
          <span>parakeets</span>
          <span>
            <img
              draggable="false"
              alt="🐦"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f426.svg"
            />
          </span>
        </li>
      </ul>
    </div>
  );
};