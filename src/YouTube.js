import React, { Component } from 'react';

export default function YouTube(props){

    return (
        <div>
            <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/qjxxYoL7nSU"
                frameBorder={0}
                allowFullScreen>
            </iframe>
        </div>
    )
}