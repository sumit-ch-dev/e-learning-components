import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseDetails from './components/CourseDetails'
import StarRating from './components/StarRating'
import AddLessonComponent from './components/AddLesson'

function App() {

  const exampleRating = 3.6

  return (
    <>
      {/* <h1>Product Rating</h1>
      <StarRating rating={exampleRating} /> */}
      <AddLessonComponent/>
    </>
  )
}

export default App
