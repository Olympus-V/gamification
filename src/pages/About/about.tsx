import './about.scss';

import { ChevronRight } from '@mui/icons-material';
import { StringConstants } from '../../utils/constants';
import { useState } from 'react';
import MeetOurTeam from './subComponents/meetOurTeam';

const About = () => {

    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section: any) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className='container about-page d-flex flex-col'>
            <div className={`section d-flex flex-row align-items-center ${expandedSection === 'team' ? 'expanded' : ''}`}>
                {expandedSection !== 'team' ? (
                    <>
                        <img src={`${process.env.PUBLIC_URL}/images/General/team.svg`} alt='Team' className='icon' />
                        <div>
                            <h2>Team</h2>
                            <p>{StringConstants.MEET_TEAM_DESCRIPTION}</p>
                        </div>
                    </>
                ) : (
                    <MeetOurTeam />
                )}
                <ChevronRight fontSize='large' onClick={() => toggleSection('team')} className='chevron-icon' />
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/General/socialMedia.svg`} alt='Social Media' className='icon' />
                <div>
                    <h2>Social Media</h2>
                    <p>{StringConstants.SOCIAL_MEDIA_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/General/dataSafety.svg`} alt='Data Safety' className='icon' />
                <div>
                    <h2>Data Safety</h2>
                    <p>{StringConstants.DATA_SAFETY_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/General/ratings.svg`} alt='Ratings and Feedbacks' className='icon' />
                <div>
                    <h2>Ratings & Feedbacks</h2>
                    <p>{StringConstants.RATINGS_FEEDBACKS_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/General/writeUs.svg`} alt='Write Us' className='icon' />
                <div>
                    <h2>Write to us</h2>
                    <p>{StringConstants.WRITE_US_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/images/General/joinUs.svg`} alt='Join Us' className='icon' />
                <div>
                    <h2>Join us</h2>
                    <p>{StringConstants.JOIN_US_DESCRIPTION}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
