import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import './AttachmentField.css';

function AttachmentField(props) {
  const { input, files, setFiles } = props;
  const portfolioData = useSelector((state) => state.portfolioReducer.portfolioData);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      input.onChange(acceptedFiles);
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
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

  useEffect(() => {
    console.log('worked');
  }, [portfolioData]);

  return (
    <div className="AttachmentField">
      <div { ...getRootProps({ className: "Dropzone" }) }>
        <input { ...getInputProps() } />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="thumbs-container">
        {thumbs}
      </aside>
    </div>
  );
}

export default AttachmentField;