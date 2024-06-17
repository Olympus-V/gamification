import './../about.scss';

import { Carousel } from 'react-bootstrap';
import TeamMemberCaption from './teamMemberCaption';

const MeetOurTeam = () => {
    return (
        <div className='container meet-our-team'>
            <h3>Meet Our Amazing Team</h3>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='team-member-image d-block mt-3'
                        src={`${process.env.PUBLIC_URL}/images/Team/deb.png`}
                        alt='First slide'
                    />
                   <TeamMemberCaption 
                        name='Deb Adarsh' 
                        role='Operations and Lead Developer'
                        linkedInUrl='https://www.linkedin.com/in/adarshh7'
                        mailUrl='mailto:devadarsh4900@gmail.com'
                        githubUrl='https://github.com/deb-sahu'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='team-member-image d-block mt-3'
                        src={`${process.env.PUBLIC_URL}/images/Team/satyajit.png`}
                        alt='Second slide'
                    />
                    <TeamMemberCaption 
                        name='Satyajit' 
                        role='Data Management and Lead Developer'
                        linkedInUrl='https://www.linkedin.com/in/satyajit-panigrahi-b7a425202'
                        mailUrl='mailto:satyapani999@gmail.com'
                        githubUrl='https://github.com/Satyajit99p'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='team-member-image d-block mt-3'
                        src={`${process.env.PUBLIC_URL}/images/Team/spruha.png`}
                        alt='Third slide'
                    />
                    <TeamMemberCaption 
                        name='Spruha' 
                        role='UX Research and Design'
                        linkedInUrl='https://www.linkedin.com/in/spruha-das-7a97bb1b2'
                        mailUrl='mailto:spruha08@gmail.com'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='team-member-image d-block mt-3'
                        src={`${process.env.PUBLIC_URL}/images/Team/raghu.png`}
                        alt='Second slide'
                    />
                   <TeamMemberCaption 
                        name='Raghu' 
                        role='Commercials and Lead Developer'
                        linkedInUrl='https://www.linkedin.com/in/balaboina-raghu-yadav-5710691a8'
                        mailUrl='mailto:b.raghuyadav23@gmail.com'
                        githubUrl='https://github.com/raghu0812199'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='team-member-image d-block mt-3'
                        src={`${process.env.PUBLIC_URL}/images/Team/Kant.png`}
                        alt='Third slide'
                    />
                   <TeamMemberCaption 
                        name='Soumyakant' 
                        role='Social Media and Marketing'
                        linkedInUrl='https://www.linkedin.com/in/soumya-kant-das-086004216'
                        mailUrl='mailto:soumyakantdas2222@gmail.com'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MeetOurTeam;
