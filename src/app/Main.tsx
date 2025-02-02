import ProjectList from '@app/compontents/ProjectList';
import Blurb from '@app/compontents/Blurb';

import './main.css';

export interface MainProps {
    id: string,
}

export default function Main() {
    return (
        <div className='main-div'>
            <Blurb id={'page-1'} />
            <ProjectList id={'page-2'} />
        </div>
    )
}