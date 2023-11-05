import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './dropzone.scss';
import { FiUpload } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Dropzone = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const { id } = useParams()
    const taskId = props.taskId

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setSelectedFile(file)
    }, [])

    const handleSubmit = async () => {
        // e.preventDefault()
        console.log('a');
        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            await axios.post(`http://localhost:8000/task/${id}/${taskId}/addevidence`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    return (
        <div className='dropzone'>
          <div {...getRootProps()}>
            <input type='file' required {...getInputProps()} />
                  <p>
                      <FiUpload />
                      Clique ou arraste arquivos para anexar evidencias
                  </p>
          </div>
          <div>
            <button type='submit' className='submit-btn' onClick={() => handleSubmit()}>Enviar Evidência</button>
            
          </div>
            
        </div>
    )
}

export default Dropzone;