import React,{useCallback} from 'react';
import {Field,reduxForm} from 'redux-form';
import {useDropzone} from 'react-dropzone';

// Dropzone component

function Dropzone() {

  const {getRootProps, getInputProps, isDragActive,acceptedFiles,rejectedFiles} = useDropzone({
    accept:'image/*'
  })

  
  return (
    <div style={{width:300,height:200,border:"2px dotted grey"}}>
    <h1>Header</h1>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    {acceptedFiles.length>0?<h4>{acceptedFiles[0].name}</h4>:''}
    </div>
  )
}



// Upload Form component

function UploadForm(props) {

  const {handleSubmit} = props;

  const renderField = ({input,type,label,meta:{touched,error,warning}}) => {
    return(
      <div>
        <label>{label}</label>
        <input {...input} type={type}/>
      </div>
    )
  }

  const renderDragField = ({input,type,label,meta:{touched,error,warning}}) => {
    return(
      <div>
        <Dropzone/>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Name"/>
      <Field name="dropzone" component={renderDragField} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({form:'Upload'})(UploadForm)
