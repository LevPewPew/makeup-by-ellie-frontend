import React,{useCallback} from 'react';
import UploadForm from './UploadForm';

function Upload() {

  const submit = (values) => {
    console.log(values)
  }

  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <UploadForm onDrop={onDrop} onSubmit={submit}/>
    </div>
  )
}

export default Upload
