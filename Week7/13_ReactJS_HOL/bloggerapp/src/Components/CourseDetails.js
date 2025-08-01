import React from 'react';

const courses = [
    { id: 'c1', name: 'React Fundamentals', duration: '4 weeks' },
    { id: 'c2', name: 'Advanced React Patterns', duration: '6 weeks' },
    { id: 'c3', name: 'Full-Stack with MERN', duration: '8 weeks' },
];

export default function CourseDetails() {
    return (
        <div>
            <h2>Course Details</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <strong>{course.name}</strong> ({course.duration})
                    </li>
                ))}
            </ul>
        </div>
    );
}