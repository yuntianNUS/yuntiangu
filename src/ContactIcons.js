import { Icon } from '@rsuite/icons';
import { Grid, Row, Col } from 'rsuite';
import { IconButton, ButtonToolbar, ButtonGroup } from 'rsuite';
import * as faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
import * as faLinkedin from '@fortawesome/free-brands-svg-icons/faLinkedin';
import * as faGithub from '@fortawesome/free-brands-svg-icons/faGithub';
import * as faReact from '@fortawesome/free-brands-svg-icons/faReact';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

const FaSvgIcon = ({ faIcon, ...rest }) => {
    const { width, height, svgPathData } = faIcon;
    return (
        <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
            <path d={svgPathData}></path>
        </svg>
    );
};

const clickLinkedin = () => {
    window.open('https://www.linkedin.com/in/yuntiangu/', '_blank', 'noopener,noreferrer')
}

const clickGit = () => {
    window.open('https://github.com/yuntianNUS', '_blank', 'noopener,noreferrer')
}

// const clickEmail = () => {
//     window.open('mailto:yuntiangu@gmail.com', '_blank', 'noopener,noreferrer')
// }

function IconRow() {

    return (
        <ButtonToolbar>
            <ButtonGroup>
                <IconButton onClick={clickLinkedin} icon={<Icon as={FaSvgIcon} faIcon={faLinkedin} />} />
                <IconButton onClick={clickGit} icon={<Icon as={FaSvgIcon} faIcon={faGithub} />} />
                <a href="mailto:yuntiangu@gmail.com">
                    <IconButton icon={<Icon as={FaSvgIcon} faIcon={faEnvelope} />} />
                </a>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default IconRow;