import React from 'react';
import { useDropzone } from 'react-dropzone';
import './AttachmentField.css';

function AttachmentField(props) {
  const { input, files, setFiles, success, setSuccess } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      input.onChange(acceptedFiles.concat(files));
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })).concat(files));
      setSuccess(false);
    }
  });
  
  let thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div className="thumb-inner">
        <img
          src={file.preview}
        />
      </div>
    </div>
  ));

  return (
    <div className="AttachmentField">
      <div { ...getRootProps({ className: "Dropzone" }) }>
        <input { ...getInputProps() } />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="thumbs-container">
        {
          success ?
          <div>
            {'File Uploaded!'}
          </div> :
          thumbs
        }
      </aside>
    </div>
  );
}

export default AttachmentField;