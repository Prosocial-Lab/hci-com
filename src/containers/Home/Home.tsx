import React, { useMemo } from 'react';
import { FeatureList } from './components';
import { MetaInfo } from '../../components';
import { RoutesConfig } from '../../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeatureInfoConfig, FeatureInfo } from '../../config/features.config';

const Home: React.FC = () => {
  const featureList = useMemo<FeatureInfo[]>(() => {
    return Object.keys(FeatureInfoConfig).map((key) => FeatureInfoConfig[key]);
  }, []);

  return (
    <div className='view-wrapper'>
      <MetaInfo {...RoutesConfig.Home.metaInfo} />
      
      <section className='container dashboard-content'>
      <div className='columns'>
          <div className='column'>
            <p className='title'>Lorem Ipsum</p>
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
          <div className = 'column'>
            <img src = 'https://miro.medium.com/max/2978/1*rmq7bd3GFjcwfXtkrBQaPQ.png'></img>
          </div>
        </div>
        <hr/>

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>Community Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/ZWMG58P.png'></img>
              </p>
              
            </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Average Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/W7ABxos.png'></img>
              </p>
            </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Average Downstream Audience</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/VWjwhus.png'></img>
              </p>
            </div>
          </div>
        </div>

        <hr />
        
        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>Follower Breakdowns</p>
              <div className='content'>
                <div className='columns'>
                  <div className = 'column'>
                    My Followers
                    <img src ='https://i.imgur.com/UuBv2ob.png'></img>
                  </div>
                  
                  <div className = 'column'>
                    My Downstream Audience
                    <img src = 'https://i.imgur.com/QJ04ATd.png'></img>
                  </div>
                </div>
              </div>
          </div>
          <div className='column'>
            <p className='subtitle'>Tweet Engagement</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
                <img src='https://i.imgur.com/tzr4R8C.png'></img>
              </p>
            </div>
          </div>
        
        </div>
        <hr />

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>My Tweets</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
              </p>
              
            </div>
          </div>
        </div>

        <hr/>

        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>My Followers</p>
            <div className='content'>
              <p>
                Insert Waffle Chart and info here
              </p>
              
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default Home;
