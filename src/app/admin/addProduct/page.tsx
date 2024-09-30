"use client"
import { useState } from "react";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const Page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = ( result: any) => {
    console.log("Upload triggered");

    if (result.event === 'success') {
      console.log("Upload success imageurl" , result.info.secure_url);
      setImageUrl(result.info.secure_url); // Set the image URL after successful upload
    } else {
      console.log("upload failed" )
      setErrorMessage('Failed to upload image'); // Handle upload error
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      // If the image hasn't been uploaded, show an error
      setErrorMessage('Please upload an image before submitting.');
      return;
    }

    const newBlog = {
      title,
      description,
      imageUrl,
    };

    try {
      await axios.post('/api/blogs', newBlog);
      setTitle(''); // Reset form
      setDescription('');
      setImageUrl('');
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Error submitting the image:', error);
      setErrorMessage('Error submitting the form');
    }
  };

  return (
   <section className="h-[1200px]">
    <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl ">Upload thumbnail</p>
     
      <CldUploadWidget uploadPreset="gsvxhdlh" onSuccess={handleUpload}>
          {({ open }: {open:()=>void}) => (
            <button type="button" onClick={()=>
              open()
            } className="mt-2 px-2 py-2 rounded text-xl font-bold text-slate-100 bg-green-300">
              {imageUrl ? 'Change Image' : 'Upload Image'}
            </button>
          )}
        </CldUploadWidget>

        {/* Show the uploaded image or error */}
        <div className="bg-gray-400 w-[200px] h-[130px] relative mt-2 shadow-lg border border-blue-300">
        {imageUrl ? <Image layout="fill" objectFit="cover" src={imageUrl} alt="Uploaded" />:<Image layout="fill" objectFit="cover" src={"/upload_area.png"} alt="Upload"/>}
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}


      
       
      <p className="text-xl mt-4">Blog Title</p>
      <input className="w-full sm:w-[500px] mt-4 px-4 py-3 border" onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Blog Title Here" required />
      
      <p className="text-xl mt-4">Blog Description</p>
      <textarea className="w-full sm:w-[600px] mt-4 px-4 py-3 border" onChange={(e)=>setDescription(e.target.value)} value={description}  placeholder="Blog Desciption Here" rows={8} required />  
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-[#0066cc] text-white">ADD</button>   
      </form>
      
      
       </section>
  )
}

export default Page