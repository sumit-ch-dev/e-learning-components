import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { useParams, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";




const CourseDetails = () => {
    //   const { courseId } = useParams();

    const courseId = "1"
    // Demo data
    const courses = [
        {
            id: "1",
            title: "Web Development Fundamentals",
            description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
            category: "Programming",
            level: "Beginner",
            lessons: ["Introduction to HTML", "Styling with CSS", "JavaScript Basics"],
        },
        {
            id: "2",
            title: "Python Programming Masterclass",
            description: "Master Python programming language with hands-on projects and examples.",
            category: "Programming",
            level: "Intermediate",
            lessons: ["Python Basics", "Advanced Python", "Web Development with Django"],
        },
        // Add more courses as needed
    ];

    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 3 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    {course.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Category: {course.category}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Level: {course.level}
                </Typography>
                <Typography variant="body1" paragraph>
                    {course.description}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Lessons:
                </Typography>
                <ul>
                    {course.lessons.map((lesson, index) => (
                        <li key={index}>{lesson}</li>
                    ))}
                </ul>
                <Box sx={{ mt: 2 }}>
                    <Button>
                        Add Lesson
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default CourseDetails;
