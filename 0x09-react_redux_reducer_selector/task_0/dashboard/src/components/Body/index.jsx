'use client'

import Login from '@/components/Login';
import CourseList from '@/components/CourseList';
import { useAuth } from '@/contexts/AppContext.jsx';

import './Body.css';

export default function Body() {
    const { user, logIn } = useAuth();

    return (
        <div className="App-body">
            {user.isLoggedIn ? 
                <section className="App-body__section">
                    <h2>Course List</h2>
                    <CourseList />
                </section>
                :
                <section className="App-body__section">
                    <h2>Log in to continue</h2>
                    <Login onLogin={logIn} />
                </section>
            }
            <section className="App-body__section">
                <h2>News from the School</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia ea soluta? Officia ipsam nemo minima, deleniti quis voluptatem. Iste error cum quae ut accusamus vel ex voluptas facilis nam?</p>
            </section>
        </div>
    )
}