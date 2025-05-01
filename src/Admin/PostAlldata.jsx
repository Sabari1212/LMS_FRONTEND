import { useState } from "react";
import axios from "axios";
import { PostAllcourse } from "../SpringCourse";

function PostAllcou(){
    const [course_name, setcourse_name] = useState('');
    const [course_Provider, setcourse_Provider] = useState('');
    const [price, setprice] = useState('');
    const [deuration, setdeuration] = useState('');
    const [description, setdescription] = useState('');
    const [what_you_learn1, setwhat_you_learn1] = useState('');
    const [what_you_learn2, setwhat_you_learn2] = useState('');
    const [what_you_learn3, setwhat_you_learn3] = useState('');
    const [what_you_learn4, setwhat_you_learn4] = useState('');

    const [videoname, setvideoname] = useState('');
    const [childFolderName, setchildFolderName] = useState('');

    var [setImages, setImage] = useState([]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
          
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        var datasp = { course_name, course_Provider,
                       price ,deuration,description,what_you_learn1,
                       what_you_learn2,what_you_learn3,what_you_learn4}
        console.log(datasp)

        const formData = new FormData();

        formData.append("fail", setImages);
        formData.append(
            "Course",
            new Blob([JSON.stringify(datasp)], { type: "application/json" })
        );
        PostAllcourse(formData);
        // axios
        //     .post("http://localhost:8080/api/public/postCoruse_data", formData, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     })
        //     .then((response) => {
        //         console.log("Product added successfully:", response.data);
        //         alert("Product added successfully");
        //     })
        //     .catch((error) => {
        //         console.error("Error adding product:", error);
        //         alert("Error adding product");
        //     });
    }

    function Video_St(){

        var datasp = {videoname,childFolderName}
           const formData = new FormData();
       
               formData.append("fail", setImages);
               formData.append(
                   "Course",
                   new Blob([JSON.stringify(datasp)], { type: "application/json" })
               );
       
               axios
                   .post("http://localhost:8080/api/public/video_data", formData, {
                       headers: {
                           "Content-Type": "multipart/form-data",
                       },
                   })
                   .then((response) => {
                       console.log("Product added successfully:", response.data);
                       alert("Product added successfully");
                   })
                   .catch((error) => {
                       console.error("Error adding product:", error);
                       alert("Error adding product");
                   });
       }
    return(
        <div className="flex flex-col justify-between items-center gap-10 p-10">
        <div className="lg:w-1/2 flex flex-col gap-5 admin">
            <input type="text" placeholder="course_name" value={course_name} onChange={(e) => setcourse_name(e.target.value)} />
                <input  type="text" placeholder="course_Provider" value={course_Provider} onChange={(e) => setcourse_Provider(e.target.value)} />
                <input type="text" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                <input type="text" placeholder="deuration" value={deuration} onChange={(e) => setdeuration(e.target.value)} />
                <input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} />
                <input type="text" placeholder="what_you_learn1" value={what_you_learn1} onChange={(e) => setwhat_you_learn1(e.target.value)} />
                <input type="text" placeholder="what_you_learn2" value={what_you_learn2} onChange={(e) => setwhat_you_learn2(e.target.value)} />
                <input type="text" placeholder="what_you_learn3" value={what_you_learn3} onChange={(e) => setwhat_you_learn3(e.target.value)} />
                <input type="text" placeholder="what_you_learn4" value={what_you_learn4} onChange={(e) => setwhat_you_learn4(e.target.value)} />

                <input className="border-2 rounded-[3px] border-black" type="file" onChange={handleImageChange}></input>
                <button onClick={submitHandler} className="bg-blue-500 p-2 w-max mx-auto rounded-sm">Login</button>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-5 admin">
            <input type="text" placeholder="video_name" value={videoname} onChange={(e) => setvideoname(e.target.value)} />
            <input type="text" placeholder="video_namechalde" value={childFolderName} onChange={(e) => setchildFolderName(e.target.value)} />
            <input className="border-2 rounded-[3px] border-black" type="file" onChange={handleImageChange}></input>
            <button onClick={Video_St} className="bg-blue-500 p-2 w-max mx-auto rounded-sm">Login</button>
            </div>
            </div>
    )
}
export {PostAllcou}