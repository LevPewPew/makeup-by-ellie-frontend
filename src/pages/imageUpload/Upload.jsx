import React,{useCallback} from 'react';
import UploadForm from './UploadForm';

function Upload() {

  const submit = (values) => {
    console.log(values)
  }


  return (
    <div>
      <h1>Test</h1>
      <UploadForm onSubmit={submit}/>
    </div>
  )
}

export default Upload
