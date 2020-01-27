import React from 'react';
import { useDropzone } from 'react-dropzone';
import './AttachmentField.css';
import { blobsToUniqueFiles } from '../utils/files/general';
import { rotatedImageBlobsWithExif } from '../utils/files/images';

function AttachmentField(props) {
  const { input, files, setFiles, success, setSuccess } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      let rotatedBlobs = await rotatedImageBlobsWithExif(acceptedFiles);
      let rotatedUniqueFiles = blobsToUniqueFiles(rotatedBlobs);

      input.onChange(rotatedUniqueFiles.concat(files));
      setFiles(rotatedUniqueFiles.map(file => Object.assign(file, {
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
          alt="attachment preview thumbnail"
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