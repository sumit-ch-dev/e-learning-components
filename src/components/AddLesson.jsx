import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem, Input, FormHelperText } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const AddLessonComponent = () => {
  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    video: null,
    // Add other relevant fields here
  });

  const onDrop = (acceptedFiles) => {
    // Handle dropped video file
    setLessonData({ ...lessonData, video: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*', // Specify accepted file types (e.g., video files)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLessonData({ ...lessonData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of lessonData, e.g., send it to an API
    console.log('Lesson Data Submitted:', lessonData);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>
          Add a New Lesson
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Title"
                name="title"
                value={lessonData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                value={lessonData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="video">Video</InputLabel>
                <Input
                  {...getInputProps()}
                  error={!!lessonData.video}
                />
                <FormHelperText error={!!lessonData.video}>
                  {lessonData.video ? `Selected: ${lessonData.video.name}` : 'Drag and drop a video file here, or click to select a file'}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <div {...getRootProps()} style={{ marginTop: 20, border: '2px dashed #ccc', borderRadius: 4, padding: 20 }}>
            <input {...getInputProps()} />
            <p>Drag and drop a video file here, or click to select a file</p>
          </div>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
            Add Lesson
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddLessonComponent;
