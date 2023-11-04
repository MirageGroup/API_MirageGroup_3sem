import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './dropzone.scss';
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
    const [selectedFileURL, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className='dropzone'{...getRootProps()}>
      <input type='file' {...getInputProps()} />
      { selectedFileURL
        ? selectedFileURL
        : <p>
            <FiUpload/>
            Clique ou arraste arquivos para anexar evidencias
        </p>
      }
    </div>
  )
}

export default Dropzone;