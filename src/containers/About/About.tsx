import React from 'react';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC = () => (
  <div className='container view-wrapper'>
    <section className = 'container dashboard-content'>
    <MetaInfo {...RoutesConfig.About.metaInfo} />
    {/* { <div className='tile is-parent is-8 is-vertical is-notification-tile'>
      <div className='notification tile is-child is-primary pageSlideDown-animation'>
        <div>
          <FontAwesomeIcon icon='info-circle' size='2x' />
          <span className='title'>About Page</span>
        </div>
        <p className='subtitle'>Very interesting information may go here.</p>
      </div>
    </div> } */}
    <div className='columns'>
      <div className='column'>
        <p className='title'>About the Project</p>
        <div className='content'>
          Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis
          in. Nam inani malorum epicuri id, illud eleifend reformidans nec cu.
          Stet meis rebum quo an, ad recusabo praesent reprimique duo, ne
          delectus expetendis philosophia nam. Mel lorem recusabo ex, vim
          congue facilisis eu, id vix oblique mentitum. Vide aeterno duo ei.
          Qui ne urbanitas conceptam deseruisse, commune philosophia eos no.
          Id ullum reprimique qui, vix ei malorum assueverit contentiones. Nec
          facilis dignissim efficiantur ad, tantas tempor nam in. Per feugait
          atomorum ut. Novum appareat ei usu, an usu omnium concludaturque. Et
          nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum
          viderer ei. Porro essent eu per, ut tantas dissentias vim. Dicant
          regione argumentum vis id, adipisci accusata postulant at vix.
          Adipisci vituperata ea duo, eu summo detracto mei, et per option
          periculis. Eos laudem vivendo ex.
        </div>
      </div>
    </div>

    <hr/>
  
    <div className = 'columns'>
      <div className='column'>
      <p className = 'title'>About the Team</p>
      </div>
    </div>

    <div className='columns'>
      <div className='column'>
        <p className='subtitle'>Spencer Williams</p>
        <div className='content'>
          PhD Student <br/>
          UW Human Centered Design and Engineering
        </div>
      </div>
      <div className='column'>
        <p className='subtitle'>Gary Hsieh</p>
        <div className='content'>
          Associate Professor <br/>
          UW Human Centered Design and Engineering
        </div>
      </div>
      <div className='column'>
        <p className='subtitle'>Katharina Reinecke</p>
        <div className='content'>
         Associate Professor <br/>
         UW Computer Science and Engineering
        </div>
      </div>
      <div className='column'>
        <p className='subtitle'>Keri Mallari</p>
        <div className='content'>
          PhD Student <br/>
          UW Human Centered Design and Engineering
        </div>
      </div>
      <div className='column'>
        <p className='subtitle'>Carol Lei</p>
        <div className='content'>
          Undergraduate Student <br/>
          UW Human Centered Design and Engineering
        </div>
      </div>
    </div>
  </section>
  </div>
);

export default About;
