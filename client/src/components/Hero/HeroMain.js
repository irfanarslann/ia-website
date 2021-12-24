/* eslint-disable jsx-a11y/anchor-is-valid */
import Typed from 'react-typed';
import Image1 from '../../assets/ifo1.jpg';
import Image2 from '../../assets/ifo2.jpg';
import Image3 from '../../assets/ifo3.jpg';
import Image4 from '../../assets/ifo4.jpg';
const HeroMain = () => {
  return (
    <>
      <div className='flex-area'>
        <div className='f-100'>
          <div className='flex-area top-hero'>
            <div className='f-50'>
              <div className='content-left'>
                <h3>WELCOME!</h3>
                <div className='desc'>
                  <span>I am </span>
                  <Typed
                    className='typed'
                    strings={['Web Designer!', 'Web Developer!']}
                    typeSpeed={70}
                    backSpeed={60}
                    loop
                  />
                </div>
                <p>lorem10    </p>

                <ul className='social-links'>
                  <li>
                    <a
                      href='https://github.com/irfanarslann'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fa fa-github' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/irfanarslaann/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fa fa-linkedin' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/irfanarslaaan/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fa fa-instagram' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/samsepii0l'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fa fa-twitter' aria-hidden='true'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/Korp3Diem/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i class='fa fa-facebook' aria-hidden='true'></i>
                    </a>
                  </li>
                </ul>
                <div className='cv-button'>
                  <a href='#'>Download CV</a>
                </div>
              </div>
            </div>
            <div className='f-50'>
              <div className='content-right'>
                <img
                  src={Image4}
                  alt='image1'
                  style={{
                    marginLeft: '100px',
                    width: '300px',
                    marginTop: '100px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
