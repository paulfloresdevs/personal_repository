import React from 'react';
import Navbar from '@/components/main/navbar';
import Principal from '@/components/main/principal-page';

function HelloWorld() {
    return (
        <div className='justify-items-center text-center'>
            <Navbar />
            <Principal />
        </div>
    );
}

export default HelloWorld;
