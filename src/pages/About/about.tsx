import './about.scss';

import { ChevronRight } from '@mui/icons-material';
import { StringConstants } from '../../utils/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import MeetOurTeam from './components/meetOurTeam';

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
                        <LazyLoadImage src='/images/General/team.webp' alt='Team' className='icon' />
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
                <LazyLoadImage src='/images/General/socialMedia.webp' alt='Social Media' className='icon' />
                <div>
                    <h2>Social Media</h2>
                    <p>{StringConstants.SOCIAL_MEDIA_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <LazyLoadImage src='/images/General/dataSafety.webp' alt='Data Safety' className='icon' />
                <div>
                    <h2>Data Safety</h2>
                    <p>{StringConstants.DATA_SAFETY_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <LazyLoadImage src='/images/General/ratings.webp' alt='Ratings and Feedbacks' className='icon' />
                <div>
                    <h2>Ratings & Feedbacks</h2>
                    <p>{StringConstants.RATINGS_FEEDBACKS_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <LazyLoadImage src='/images/General/writeUs.webp' alt='Write Us' className='icon' />
                <div>
                    <h2>Write to us</h2>
                    <p>{StringConstants.WRITE_US_DESCRIPTION}</p>
                </div>
            </div>
            <div className='section d-flex flex-row align-items-center'>
                <LazyLoadImage src='/images/General/joinUs.webp' alt='Join Us' className='icon' />
                <div>
                    <h2>Join us</h2>
                    <p>{StringConstants.JOIN_US_DESCRIPTION}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
