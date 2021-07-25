import React from "react";
import "./style.scss";

const Presentation = () => {
  return (
    <div className="Presentation">
      <img
        class="clip-svg"
        src="https://scontent.faep6-1.fna.fbcdn.net/v/t1.18169-9/18767615_10211380631344498_654244150846600549_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeEtqOz2tTISvidL-XJzDFD4m5kp53d3i7-bmSnnd3eLv07zR5cmQ-3tZqxxKu3FBqw&_nc_ohc=94pv0eeD5roAX9uWmX3&_nc_oc=AQkEK4hunwd8U1DXHWFHieFBnP4gsjOB9DqbQWz5G2SS34eWaZ6Nk884KqqN7RBXd-KuZ9GXfRjiqpI0ceBAj5-p&tn=ZwhkFbvTGquUkJi7&_nc_ht=scontent.faep6-1.fna&oh=3f77064cad34d4ded1bc5543f1152bde&oe=60C589D7"
        alt="Harry Potter"
      ></img>
      <div className="presentation-photo">
        <svg width="0" height="0">
          <defs>
            <clipPath id="myClip">
              <circle cx="100" cy="100" r="40" />
              <circle cx="60" cy="60" r="40" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="presentation-text">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    </div>
  );
};

export default Presentation;