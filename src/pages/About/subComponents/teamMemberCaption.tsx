import './../about.scss';

import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Carousel } from 'react-bootstrap';
import { ITeamMemberCaptionProps } from '../model';

const TeamMemberCaption = ({ name, role, linkedInUrl, mailUrl, githubUrl }: ITeamMemberCaptionProps) => {
    return (
        <Carousel.Caption>
            <div className='name d-flex flex-row justify-content-center'>
                <h3>{name}</h3>
            </div>
            <div className='description d-flex flex-row justify-content-center'>
                <p>{role}</p>
            </div>
            <div className='social-links d-flex flex-row justify-content-center'>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <LinkedIn fontSize='small' className="github-icon" />
                </a>
                <a href={mailUrl} target="_blank" rel="noopener noreferrer">
                    <Mail fontSize='small' className="github-icon" />
                </a>
                {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize='small' className="github-icon" />
                </a>)}
            </div>
        </Carousel.Caption>
    );
};

export default TeamMemberCaption;
