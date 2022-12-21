import React from 'react'
import { About } from './About'
import { Home } from './Home'
import { Projects } from './Projects'
import { Contact } from './Contact';
import { Route, Routes } from 'react-router-dom';
import { Skills } from './Skills';
export const MainRoutes = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>


        </>
    )
}
