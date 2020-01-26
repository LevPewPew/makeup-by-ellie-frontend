import React from 'react';
import { useDropzone } from 'react-dropzone';
import './AttachmentField.css';
const fixRotation = require('fix-image-rotation')

function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = `${fileName}.${theBlob.type.split('/')[1]}`;
  return theBlob;
}

function AttachmentField(props) {
  const { input, files, setFiles, success, setSuccess } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {

      let ArrayOfFilesToBeRotated = acceptedFiles;
      let myRotationFunction = async function (ArrayOfFilesToBeRotated) {
        let blobOfArray = await fixRotation.fixRotation(ArrayOfFilesToBeRotated)
        return blobOfArray
      }
      acceptedFiles = await myRotationFunction(ArrayOfFilesToBeRotated);
      acceptedFiles = acceptedFiles.map((blob, index) => blobToFile(blob, `image-${index}`));

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