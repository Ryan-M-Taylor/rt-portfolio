import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer (){
    return (
        <div className='mt-3'>
    <SocialIcon url="https://linkedin.com/in/ryan-michael-taylor" />
    <SocialIcon url="https://github.com/Ryan-M-Taylor" />
    <SocialIcon url="mailto:ryan.taylor1@yahoo.com" network="email" label="Send Ryan an email" />
    </div>
    )
}