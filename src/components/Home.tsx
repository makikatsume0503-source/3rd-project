import React from 'react';
import { Hero } from './Hero';
import { LPCreationFlow } from './LPCreationFlow';
import { Problem } from './Problem';
import { Profile } from './Profile';
import { SpecialGift } from './SpecialGift';
import { Offer } from './Offer';
import { Conclusion } from './Conclusion';
import { FAQ } from './FAQ';
import type { ActionBoxProps } from './ActionBox';

export const Home: React.FC<ActionBoxProps> = (props) => {
    return (
        <>
            <Hero {...props} />
            <Problem />
            <LPCreationFlow />
            <Profile />
            <SpecialGift />
            <Conclusion />
            <FAQ />
            <Offer {...props} />
        </>
    );
};
