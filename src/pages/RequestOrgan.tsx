import {useState,useContext, useEffect} from "react";
import CheckBox from "../component/Checkbox";
import QRCode from "react-qr-code";

import {
    doc,
    setDoc,
    serverTimestamp,
    updateDoc,  
    getDoc} from "firebase/firestore";
    import {db} from '../firebase'
import { AuthContext } from "../context/authContext";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const RequestOrgan: React.FC = () => {
  const [user,setUser]=useState({})
    const {currentUser} =useContext(AuthContext)

    useEffect(()=>{
      const unsub=async()=>{
await getDoc(doc(db, "users", currentUser.uid)).then((data)=>{
  setUser(data.data());
  
})
      }
      unsub()
    },[])

    console.log(user);
    

    const [data, setData] = useState({});
    const inputs = [
      {
        id: "First Name",
        label: "First Name",
        type: "text",
        placeholder: "John",
        required: true,
      },
      {
        id: "Last Name",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        required: true,
      },
      {
        id: "Date Of Birth(DD/MM/YYYY)*",
        label: "Date Of Birth(DD/MM/YYYY)*",
        type: "text",
        placeholder: "01/01/1980",
        required: true,
      },
      {
        id: "Age",
        label: "Age",
        type: "text",
        placeholder: "40",
        required: true,
      },
      {
        id: "Gender",
        label: "Gender",
        type: "text",
        placeholder: "Male",
        required: true,
      },
      {
        id: "Blood Group",
        label: "Blood Group",
        type: "text",
        placeholder: "A+",
        required: true,
      },
      {
        id: "Organ Needed",
        label: "Organ Needed",
        type: "text",
        placeholder: "Liver, Kidney, etc.",
        required: true,
      },
      {
        id: "Email",
        label: "Email",
        type: "text",
        placeholder: "john.doe@example.com",
        required: true,
      },
      {
        id: "Phone Number",
        label: "Phone Number",
        type: "text",
        placeholder: "+123456789",
        required: true,
      },
      {
        id: "Address",
        label: "Address",
        type: "text",
        placeholder: "123 Main St",
        required: true,
      },
      {
        id: "City",
        label: "City",
        type: "text",
        placeholder: "New York",
        required: true,
      },
      {
        id: "State",
        label: "State",
        type: "text",
        placeholder: "NY",
        required: true,
      },
      {
        id: "ZIP Code",
        label: "ZIP Code",
        type: "text",
        placeholder: "10001",
        required: true,
      },
      {
        id: "Doctor's Concern Certificate",
        label: "Doctor's Concern Certificate",
        type: "file",
        placeholder: "Upload Data",
        required: true,
      },
    ];
  
  

  const checkbox2 = [
   "I declare that I am a citizen of India and above 18 years of age.",
   "I agree to the privacy policy"
  ];

const [show,setShow] =useState(false)


  const handleInput = (e) => {
   
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });


  };

  const handleAdd = async(e: any) => {
    const date = new Date().getTime();
    
     
    e.preventDefault();
   
    

    const res = await setDoc(doc(db, "users", currentUser.uid), {
        request:{...data,},
        timeStamp: serverTimestamp(),
       
      },{merge:true}).then((data)=>{
window.alert("request Submited Successfully")

      }).catch((err)=>{
        console.log(err,"error");
        
      })
    console.log(res);
    
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className=" top flex justify-center items-center text-black">
          <h1 className=" font-bold text-2xl ">Request for Organ</h1>
        </div>
    <div className="bottom h-full flex justify-center items-center">
         { !user.request? (<div className="right">
            <form onSubmit={(e) => handleAdd(e)}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>

                  <input
                    id={input.id}
                    type={input.type}
                    
                    onChange={handleInput}
                    required
                  />
                </div>
              ))}
              
<div className="flex px-14 w-full justify-start items-start flex-col">
              {checkbox2.map((item, index) => (
                <CheckBox name={item} key={index}    />
              ))}
</div>
              <button type="submit">Submit</button>
            </form>
          </div>):(
           <div className="bg-white w-[60%] max-w-2xl shadow overflow-hidden sm:rounded-lg">
           <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div className="px-4 py-5 sm:px-6">
               <h3 className="text-lg leading-6 font-medium text-gray-900">
                   Your Request
               </h3>
               <p className="mt-1 max-w-2xl text-sm text-gray-500">
                   Details and informations about Patiant.
               </p>
               </div>
               <button className="px-2 py-2 sm:px-3 bg-[#EE619C] font-bold text-white rounded-full hover:bg-white hover:text-[#EE619C] hover:border hover:border-[#EE619C]">
Rewoke Request
               </button>
           </div>
           <div className="border-t border-gray-200" >
               <dl>
                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                       Full name
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                       {user?.request['First Name']}{user?.request['Middle Name']}{user?.request['Last Name']}
                       </dd>
                   </div>
                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                         Age
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {user?.request.Age}
                       </dd>
                   </div>
                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                           Email address
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {user?.request.Email}
                       </dd>
                   </div>
                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                       Blood Group
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.request["Blood Group"]}
                       </dd>
                   </div>
                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                       Gender
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.request["Gender"]}
                       </dd>
                   </div>
                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                       <dt className="text-sm font-medium text-gray-500">
                       Organ Needed
                       </dt>
                       <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {user?.request["Organ Needed"]}
                       </dd>
                   </div>
                  
               </dl>
           </div>
       </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default RequestOrgan;
