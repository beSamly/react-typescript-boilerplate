import React from 'react';
import LogInButton from '../components/LogInButton/';
import { Child } from '../FunctionalComponentExample';
export default function MainPage() {
    return (
        <div>
            <Child />
            <LogInButton />
        </div>
    );
}
