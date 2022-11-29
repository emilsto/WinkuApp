//modal that holds the postbox

import React from 'react';
import PostBox from '../Posts/PostBox';

const Modal = ( user ) => {
    return (
        <>
        <div className='absolute w-full h-full z-50'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <PostBox user={user} />
            </div>
        </div>
        </>
    );
}

export default Modal;