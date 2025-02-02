import ProjectList from '@src/app/compontents/main/ProjectList';
import Blurb from '@src/app/compontents/main/Blurb';

import Experience from '@app/compontents/main/Experience';

import '@app/compontents/main/main.css';

export interface MainProps {
    id: string,
}

export default function Main() {
    return (
        <div className='main-div'>
            <Blurb id={'page-1'} />
            <Experience id={'page-2'} />
            <ProjectList id={'page-3'} />
        </div>
    )
}