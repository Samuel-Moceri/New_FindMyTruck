import Arnaud from 'src/assets/images/equipe/Arnaud_clear_02.png';
import Julien from 'src/assets/images/equipe/Julien_clear.png';
import Ludo from 'src/assets/images/equipe/Ludo_clear.png';
import Samuel from 'src/assets/images/equipe/Samuel_clear_03.png';
import Vincent from 'src/assets/images/equipe/Vincent_clear_02.png';
import Anaglyph from 'src/assets/images/equipe/Anaglyph.png';
import Oakley from 'src/assets/images/equipe/Oakley_02.png';
import Synthwave from 'src/assets/images/equipe/synthwave.png';
import Julienhair from 'src/assets/images/equipe/Julien_clear_hair.png';
import ColonelVincent from 'src/assets/images/equipe/Vincent_clear_03.png';




import {IoLogoLinkedin, IoLogoGithub, IoMailSharp} from "react-icons/io5";

const Team = () => {
  
  return (
    
    <>

      <p className="team_card_title">- L'équipe derrière FIND MY TRUCK -</p>

      <div className="team">


        <div className="team_card team_card_1">
          <div className="team_card_circle color_1" />
          <img className="team_card_img" src={Arnaud} />
          <img id="synthwave_img" className="team_card_img_bonus" src={Synthwave} />
          <div id="synthwave_txt" className="team_card_text">
            <div className="team_card_name">Arnaud</div>
            <div className="team_card_role">Git Master</div>
            <div className="team_card_contact">
              <a className="team_card_contact_icon" href=""><IoLogoLinkedin /></a>
              <a className="team_card_contact_icon" href=""><IoLogoGithub /></a>
              <a className="team_card_contact_icon" href="toto@gmail.com"><IoMailSharp /></a>
            </div>

          </div>
        </div>

        <div className="team_card team_card_2">
          <div className="team_card_circle color_2" />
          <img className="team_card_img" src={Julien} />
          <img id="hair_img" className="team_card_img_bonus" src={Julienhair} />
          <div id="hair_txt" className="team_card_text">
            <div className="team_card_name">Julien</div>
            <div className="team_card_role">Lead Dev Back</div>
            <div className="team_card_contact">
              <a className="team_card_contact_icon" href=""><IoLogoLinkedin /></a>
              <a className="team_card_contact_icon" href=""><IoLogoGithub /></a>
              <a className="team_card_contact_icon" href="toto@gmail.com"><IoMailSharp /></a>
            </div>
          </div>
        </div>

        <div className="team_card team_card_3">
          <div className="team_card_circle color_3" />
          <img className="team_card_img" src={Ludo} />
          <img id="anaglyph_img" className="team_card_img_bonus" src={Anaglyph} />
          <div id="anaglyph_txt" className="team_card_text">
            <div className="team_card_name">Ludo</div>
            <div className="team_card_role">Lead Dev Front</div>
            <div className="team_card_contact">
              <a className="team_card_contact_icon" href=""><IoLogoLinkedin /></a>
              <a className="team_card_contact_icon" href=""><IoLogoGithub /></a>
              <a className="team_card_contact_icon" href="toto@gmail.com"><IoMailSharp /></a>
            </div>
          </div>
        </div>

        <div className="team_card team_card_4">
          <div className="team_card_circle color_4" />
          <img className="team_card_img" src={Samuel} />
          <img id="oakley_img" className="team_card_img_bonus" src={Oakley} />
          <div id="oakley_txt" className="team_card_text">
            <div className="team_card_name">Samuel</div>
            <div className="team_card_role">Product Owner</div>
            <div className="team_card_contact">
              <a className="team_card_contact_icon" href=""><IoLogoLinkedin /></a>
              <a className="team_card_contact_icon" href=""><IoLogoGithub /></a>
              <a className="team_card_contact_icon" href="toto@gmail.com"><IoMailSharp /></a>
            </div>
          </div>
        </div>

        <div className="team_card team_card_5">
          <div className="team_card_circle color_5" />
          <img className="team_card_img" src={Vincent} />
          <img id="colonel_img" className="team_card_img_bonus" src={ColonelVincent} />
          <div id="colonel_txt" className="team_card_text">
            <div className="team_card_name">Vincent</div>
            <div className="team_card_role">Project Manager</div>
            <div className="team_card_contact"></div>
            <div className="team_card_contact">
              <a className="team_card_contact_icon" href=""><IoLogoGithub /></a>
              <a className="team_card_contact_icon" href=""><IoLogoLinkedin /></a>
              <a className="team_card_contact_icon" href="toto@gmail.com"><IoMailSharp /></a>
            </div>
          </div>
        </div>

      </div>


      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="10" dy="-12" result="offsetblur"/>
          <feFlood floodColor="rgba(40,40,40,0.4)"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </svg>

  
    </>
  );
}

export default Team
