import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './AttachmentField.css';

function AttachmentField(props) {
  const { input, files, setFiles } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      input.onChange(acceptedFiles);
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div className="thumb" key={file.name}>
      <div className="thumb-inner">
        <img
          src={file.preview}
        />
      </div>
    </div>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "Dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="thumbs-container">
        {thumbs}
      </aside>
    </section>
  );
}

export default AttachmentField;

// index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
//     in AttachmentField (at WorkForm.jsx:49)
//     in div (at WorkForm.jsx:48)
//     in div (at WorkForm.jsx:46)
//     in renderAttachmentField (created by ConnectedField)