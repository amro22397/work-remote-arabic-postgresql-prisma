'use client'

import React, { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { IoPerson } from 'react-icons/io5'
import { Button } from './ui/button'
import { useLocale, useTranslations } from 'next-intl'
import { Input } from './ui/input'



import { toast } from 'sonner'
import { storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { JobData } from '@/types/jobData'
import { LoaderCircle } from 'lucide-react'


// import { UploadButton } from '@/utils/uploadthing'

const ImageUpload = ({JobIconImage, name, formData, setFormData, id, wantShowContact, setWantShowContact}: { 
  JobIconImage: string, name: string, wantShowContact?: boolean
  formData: JobData, setFormData: (e: any) => void,
  id: string, setWantShowContact?: (value: boolean) => void
}) => {
    const [image, setImage] = useState<string>('');
    const fileInRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileLoading, setFileLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

    
    
    {/* const ImageUpload = async (e: any) => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'vxam2hsq');

      const res = await fetch(`https://api.cloudinary.com/v1_1/dqxwmu28k/image/upload`, {
        method: 'POST',
        body: data,
      })
    } 
      */}

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
          console.log(event.target.files[0]);
          setFile(event.target.files[0]);
    
          setFileType(event.target.files[0].type);
          setFileName(event.target.files[0].name);
        }
      };

      const handleUploadImage = async (e: any) => {
       
        e.preventDefault();

    setFileLoading(true);

    if (!file) {
      toast.error("No file selected");
      setFileLoading(false);
      return;
    }

    const fileRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL);
          setFileLoading(false);
          setImage(downloadURL);
          toast.success('File is uploaded');

          setFormData({
            ...formData,
            [id]: downloadURL,
          })
        });
        console.log(downloadURL);
      }
    );

      }

      useEffect(() => {
        if (wantShowContact === false) {
          setImage('');
        } else {
          setImage(downloadURL);
        }
      }, [wantShowContact]);


      console.log(image)
      console.log(formData)

      const addJobPage = useTranslations("AddJobPage");
        const locale = useLocale();

  return (
    <div className='flex flex-row items-start justify-center gap-4 w-full'>
    <div className={`w-32 bg-gray-200 rounded-md size-24 inline-flex items-center content-center justify-center`}>
                        {image ? (
                          <Image src={image} alt='image' width={1024} height={1024}
                          className='w-auto h-auto max-w-24 max-h-24' />
                        ) : JobIconImage ? (
                          <Image src={JobIconImage} alt='image' width={1024} height={1024}
                          className='w-auto h-auto max-w-24 max-h-24' />
                        ) : (
                            <IoPerson className={`${wantShowContact === false && 'text-gray-400'}`} />
                        )}

                    
                    </div>

                  <div className="flex justify-center items-start mt-2 w-full">

                  {/*}  <input type='file'
                    name='file'
                    ref={fileInRef}
                    className='hidden'
                    onChange={ImageUpload}
                    />

                    <Button
                    type='button'
                    onClick={() => fileInRef.current?.click()}
                    variant='soft' >
                      select file
                    </Button> */}
      
                    
                    <div className="flex flex-col gap-2 w-full">

                    <Input
                    type='file'
                    id={id}
                    accept='image/*'
                    className='w-68 file:mr-4 file:bg-gray-300 file:rounded-full
                    file:hover:bg-gray-700 file:active:scale-95 file:px-3 file:py-1
                    pt-1 pb-[33px] file:cursor-pointer'
                    dir='ltr'
                    disabled={wantShowContact === false}
                    onChange={handleFileChange}
                    />

                    <Button
                    type='button'
                    onClick={handleUploadImage}
                    disabled={wantShowContact === false}
                    className='text-center w-24 cursor-pointer
                    bg-blue-500 active:scale-95 text-white px-[10px] py-1 rounded-md'
                    >
                        {fileLoading ? <LoaderCircle className="animate-spin" /> : addJobPage("Add Image")}
                    </Button>

                    </div>


                  </div>
                  
                  
    </div>
  )
}

export default ImageUpload
