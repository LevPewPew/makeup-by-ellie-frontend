import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
 
function AttachmentField() {
  const [files, setFiles] = useState([]);

  function onDrop(files) {
    // console.log(files);
    setFiles(files);
  }

  function handleSubmit(event, values) {
    console.log(values);
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    // let fd = new FormData();

    // values.map((file) => {
    //   fd.append('File[]',file);
    // });

    // axios.post(`${ROOT_URL}/ImageUpload`, fd, config)
    //   .then((response) => {
    //     callback(response);
    //   })
    //   .catch(error => {
    //       errorResponse(error);
    //   })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
 
  return (
    <form className="WorkForm" onSubmit={props.handleSubmit}>
      <div { ...getRootProps() }>
        <input { ...getInputProps() } />
        {
          isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AttachmentField;