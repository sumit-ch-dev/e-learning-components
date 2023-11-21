import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
  dropzone: {
    minHeight: 200,
    border: '2px dashed #ccc',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
}));

const VideoUpload = () => {
  const classes = useStyles();
  const [videoFile, setVideoFile] = useState(null);

  const handleDropzoneChange = (files) => {
    if (files && files.length > 0) {
      setVideoFile(files[0]);
    } else {
      setVideoFile(null);
    }
  };

  return (
    <div>
      <DropzoneArea
        acceptedFiles={['video/*']}
        dropzoneClass={classes.dropzone}
        dropzoneText="Drag and drop a video file here or click"
        onChange={handleDropzoneChange}
      />
      {videoFile && (
        <video controls>
          <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
        </video>
      )}
    </div>
  );
};

export default VideoUpload;
