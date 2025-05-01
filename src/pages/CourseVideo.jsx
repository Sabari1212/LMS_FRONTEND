import React, { useEffect, useState,useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import course from '../assets/course.jpg'
import { useSelector } from "react-redux";
import { Getonevideo, Getvideodata} from "../SpringCourse";
import { Getlocalstorage } from "../localStroage";
import ReactPlayer from 'react-player';

const CourseVideo = () => {
  const users = useSelector((state) => state.userInfo.users)
  const [Allvideodata, setAllvideodata] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');

  const [showButton, setShowButton] = useState(false);

  // const playerRef = useRef(null);
  // const [aspectRatio, setAspectRatio] = useState(null);

  const handleVideoEnd = () => {
    setShowButton(true);
  };


  useEffect(() => {
    getrallcour()
  }, [])

  async function getrallcour() {


    var tocken = Getlocalstorage()
    var Core_name = users;
    var toc_and_videone = { tocken, Core_name }

    var getdatavideo = await Getvideodata(toc_and_videone);
    setAllvideodata(getdatavideo.data)
    console.log(getdatavideo.data)
  }

 async function Mapdata(id) {
    for (var i = 0; i < Allvideodata.length; i++) {
      if (Allvideodata[i].id === id) {
       
        const Tocken = Getlocalstorage()
       
        // var prefoldname=
        // var chalfoldname=
        // var url=
        // var getvideourl={prefoldname,chalfoldname,url,Tocken}

        var getUrl= Getonevideo()

        setVideoUrl(getUrl+`/public/Getvideo_data?parentFolderName=${Allvideodata[i].videoname}&childFolderName=${Allvideodata[i].childFolderName}&url=${Allvideodata[i].videourl}`,{headers: { Authorization: `Bearer ${Tocken}`},})
         // setVideoUrl(`http://localhost:8080/api/public/Getvideo_data?parentFolderName=${prefoldname}&childFolderName=${chalfoldname}&url=${url}` , {headers: { Authorization: `Bearer ${Tocken}`},});
      
       // 
       
         console.log(getUrl)
        //setVideoUrl(getUrl)
      }
    }
  }

  const groupedData=Allvideodata.reduce((acc,item)=>{
    if(!acc[item.childFolderName]){
      acc[item.childFolderName]=
      {
        childFolderName:item.childFolderName,videos:[]
      }
    }
      acc[item.childFolderName].videos.push({
        videoname:item.videoname,
        videoAtername:item.videoAtername,
        videourl:item.videourl,
        id:item.id

      });
      return acc;
    },{});
  const result=Object.values(groupedData)
  console.log(result)

  return (
    <div className='lg:flex justify-around'>

      <div className="mt-16">

        {videoUrl ? 
         <ReactPlayer url={videoUrl} controls  onEnded={handleVideoEnd}/>:
         <img className='h-[400px] w-[800px]' src={course}></img>
         }
        {showButton && (<div className="justify-self-end mt-8"><button className="bg-blue-600 p-2 px-4 font-bold text-white hover:scale-105 duration-500 rounded-md active:bg-blue-900" onClick={()=>setShowButton(false)}>Next</button></div>)}
      </div>
      <div>

        <div style={{ width: "600px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
          <h2 style={{ textAlign: "left", fontWeight: "bold", marginBottom: "10px" }}>{users[0].course_name}</h2>
          {result.map((module) => (
            // .filter(item => item.childFolderName!=="html2") 

            <Accordion  sx={{ backgroundColor: "#f9f9f9", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold", backgroundColor: "#fff" }}>
                <Typography variant="h6">{module.childFolderName}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: "10px 20px", backgroundColor: "#f9f9f9" }}>
                <List>
                  {Allvideodata.filter(item => item.childFolderName === module.childFolderName).map((lecture, index) => (
                    <ListItem key={index} sx={{ display: "f lex", justifyContent: "space-between", padding: "8px 0" }}>
                      <div style={{ display: "flex", alignItems: "center" }} onClick={() => Mapdata(lecture.id)} className="hover:cursor-pointer hover:scale-95 duration-500 active:hover:scale-100">
                        <ListItemIcon sx={{ minWidth: "30px", color: "#555" }} >
                          {"video" === "video" ? <VideoLibraryIcon /> : <DescriptionIcon />}
                        </ListItemIcon>
                        <Typography >{lecture.videourl}</Typography>
                      </div>
                      <Typography variant="body2" sx={{ color: "#666" }}>10:20</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

          ))}
        </div>

      </div>
    </div>
  )
  //
}

export default CourseVideo

// const modules = [
//     {
//       id: 1,
//       name: "Introduction",
//       lectures: [
//         { title:  "Join Our Online Classroom!", duration: "05:57", type: "document" },
//         { title: "Join Our Online Classroom!", duration: "04:01", type: "video" },
//         { title: "Exercise: Meet Your Classmates & Instructor", duration: "01:47", type: "document" },
//         { title: "ZTM Resources", duration: "04:23", type: "document" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Python Introduction",
//       lectures: [
//         { title: "What is Python?", duration: "10:30", type: "video" },
//         { title: "Setting up Python Environment", duration: "08:45", type: "video" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Python Basics",
//       lectures: [
//         { title: "Variables and Data Types", duration: "12:30", type: "video" },
//         { title: "Control Flow", duration: "15:10", type: "video" },
//         { title: "Functions in Python", duration: "20:45", type: "video" },
//       ],
//     },
//   ];