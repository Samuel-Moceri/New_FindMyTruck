import './style.scss';
import Arnaud from 'src/assets/images/equipe/Arnaud_clear.png';
import Julien from 'src/assets/images/equipe/Julien_clear.png';
import Ludo from 'src/assets/images/equipe/Ludo_clear.png';
import Samuel from 'src/assets/images/equipe/Samuel_clear.png';
import Vincent from 'src/assets/images/equipe/Vincent_clear.png';



const Team = () => {
  
  return (
    
    <>

      <p className="title">Les génies derrière ce magnifique projet</p>

      <div className="team">


        <div className="card card_1">
          <div className="circle color_1" />
          <img className="img" src={Arnaud} />
          <div className="text">
            <div className="name">Arnaud</div>
            <div className="role">Git Master</div>
          </div>
        </div>

        <div className="card card_2">
          <div className="circle color_2" />
          <img className="img" src={Julien} />
          <div className="text">
            <div className="name">Julien</div>
            <div className="role">Lead Dev Back</div>
          </div>
        </div>

        <div className="card card_3">
          <div className="circle color_3" />
          <img className="img" src={Ludo} />
          <div className="text">
            <div className="name">Ludo</div>
            <div className="role">Lead Dev Front</div>
          </div>
        </div>

        <div className="card card_4">
          <div className="circle color_4" />
          <img className="img" src={Samuel} />
          <div className="text">
            <div className="name">Samuel</div>
            <div className="role">Product Owner</div>
          </div>
        </div>

        <div className="card card_5">
          <div className="circle color_5" />
          <img className="img" src={Vincent} />
          <div className="text">
            <div className="name">Vincent</div>
            <div className="role">Project Manager</div>
          </div>
        </div>

      </div>

      {/* TEST: Shadow behing a clear png - HTML part  */}
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
