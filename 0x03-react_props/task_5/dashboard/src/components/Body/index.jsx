'use client'

import { useState } from 'react'
import Login from '@/components/Login';
import CourseList from '@/components/CourseList';

import './Body.css';

export default function Body() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login onLogin={handleLogin} />}
        </div>
    )
}