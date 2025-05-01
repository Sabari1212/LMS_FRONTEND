import { useEffect, useState } from "react";
import { Getpayonedata, GetpayonedataListofdata } from "../SpringCourse"
import { Getlocalstorage, Getlocalstorageusername } from "../localStroage"
import axios from "axios";


function Student_Certificates() {

    var tocken = Getlocalstorage();
    var email = Getlocalstorageusername();
    var id = 1;
    const [certificatess, setcertificates] = useState([]);

    // const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        GetPaydata()
    }, [])
    async function GetPaydata() {
        var data = { tocken, email }
        var response = await GetpayonedataListofdata(data);
        console.log(response.data);
        setcertificates(response.data);
    }

    console.log(certificatess);

  async function Getcertificate(id) {
        console.log(id);
                const email=Getlocalstorageusername();
                console.log(email);
                const response =await axios.get(`http://localhost:9090/api/public/certificate?email=${email}&courseId=1`,{responseType:'blob'});
                const url=window.URL.createObjectURL(new Blob([response.data]))
                  const link=document.createElement('a');
                  link.href=url;
                  link.setAttribute('download','Certificate.pdf');
                  document.body.appendChild(link);
                  link.click();
                  link.parentNode.removeChild(link);
                  window.URL.revokeObjectURL(url);
    }

    // async function downloadCertificate(){
    //     const email=Getlocalstorageusername()
    //     const response =await axios.get(`http://localhost:9090/api/public/certificate?email=${email}&courseId=${course.id}`,{responseType:'blob'});
    //     const url=window.URL.createObjectURL(new Blob([response.data]))
    //       const link=document.createElement('a');
    //       link.href=url;
    //       link.setAttribute('download','Certificate.pdf');
    //       document.body.appendChild(link);
    //       link.click();
    //       link.parentNode.removeChild(link);
    //       window.URL.revokeObjectURL(url);
  //  }


    return (
        <div className="p-6 bg-white">
            <h2 className="justify-self-center mt-5 text-xl font-semibold mb-4">Student Certificates</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg mt-5">
                    <thead className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                        <tr>
                            <th className="px-4 py-3">Course Name</th>

                            <th className="px-4 py-3">Training Partner</th>
                            <th className="px-4 py-3">Percentage</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-800">
                        {certificatess.filter(item => item.orderStatus === "PAYMENT_COMPLETED").map((cert, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 hover:bg-gray-50"
                            >
                                <td className="px-4 py-3">{cert.coursename}</td>

                                <td className="px-4 py-3">{cert.course_Provider}</td>
                                <td className="px-4 py-3">{cert.percentage}%</td>
                                <td className="px-4 py-3">
                                    {cert.certificateAvailable === true ?<button
                                        className={`px-4 py-1 rounded bg-gray-700 text-white hover:bg-gray-800`}
                                        onClick={() => Getcertificate(cert.courseId)}
                                    >
                                        Generate
                                    </button>
                                    :
                                     <button
                                        className={`px-4 py-1 font-bold text-red-500`}
                                        disabled
                                    >
                                       Painding This Course
                                    </button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export { Student_Certificates }