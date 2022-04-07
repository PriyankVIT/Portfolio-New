import React from 'react';
import { BsLinkedin, BsGithub,BsInstagram} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/priyank-kaushik-a0a63a193/" target='_blank'>
    <div>
    <BsLinkedin/>
    </div>
    </a>
    <a href="https://github.com/PriyankVIT" target='_blank'>
    <div>
      <BsGithub />
    </div>
    </a>
    <a href="https://www.instagram.com/priyank__kaushik/" target='_blank'>
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;
