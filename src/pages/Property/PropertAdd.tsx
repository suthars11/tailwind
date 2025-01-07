// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// // import CheckboxFive from '../../components/Checkboxes/CheckboxFive';
// // import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
// // import CheckboxOne from '../../components/Checkboxes/CheckboxOne';
// // import CheckboxThree from '../../components/Checkboxes/CheckboxThree';
// // // import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
// // import SwitcherFour from '../../components/Switchers/SwitcherFour';
// // import SwitcherOne from '../../components/Switchers/SwitcherOne';
// // import SwitcherThree from '../../components/Switchers/SwitcherThree';
// // import SwitcherTwo from '../../components/Switchers/SwitcherTwo';
// // import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
// // import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
// // import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
// // import MultiSelect from '../../components/Forms/MultiSelect';
// import Checkbox from '../../components/Checkboxes/Checkbox';

// const PropertyAdd = () => {
//   return (
//     <>
//       <Breadcrumb pageName="Property" />

//       <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
//         <div className="flex flex-col gap-9">
//           {/* <!-- Input Fields --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Property Details
//               </h3>
//             </div>
//             <div className="flex flex-col gap-5.5 p-6.5">
//               <div>
//                 <label className="mb-3 block font-medium text-black dark:text-white">
//                   Property Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder=" Enter Your Property Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Category of Property
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Category Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Construction of Status
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter  Your Construction Status"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Price
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Price Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white ">
//                   Typs of Patta
//                 </label>
//                 <div className="flex mx-4 space-x-4">
//                   <Checkbox label="Patta" />
//                   <Checkbox label="Society" />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Property Gov. Photo
//                 </label>
//                 <input
//                   type="file"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Types Of BHK
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Types of BHK"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Numbers Of Washroom
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Numbers of Washroom"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Number of Balcony
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Number of Balcony"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Default textarea
//                 </label>
//                 <textarea
//                   rows={6}
//                   placeholder="Default textarea"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 ></textarea>
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Numbers of Storage dropdown
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block font-medium text-black dark:text-white">
//                   Disabled label
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Disabled label"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-9">
//           {/* <!-- Textarea Fields --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Textarea Fields
//               </h3>
//             </div>
//             <div className="flex flex-col gap-5.5 p-6.5">
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Developed By
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Near By
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Property Facing
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Image(more image)
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Property Summary
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   How Many Landmrks
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Types of landmarks
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Name of Landmarks
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white"></label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Built-up Area
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Super Built-up Area
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Carpet Area
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Brochures
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Attached Road
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Road Unit
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Corner Plot or Not
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Video
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Floor Plans
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Animaties
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Property Image
//                 </label>
//                 <input
//                   type="file"
//                   placeholder="Default Input"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="mb-3 block text-black dark:text-white">
//                   Animaties
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Poperty Name"
//                   className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* <!-- Checkbox and radio --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Checkbox and radio
//               </h3>
//             </div>
//             <div className="flex flex-col gap-5.5 p-6.5">
//               {/* <CheckboxOne />

//               <CheckboxThree />
//               <CheckboxFour />
//               <CheckboxFive /> */}
//             </div>
//           </div>

//           {/* <!-- Select input --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Select input
//               </h3>
//             </div>
//             {/* <div className="flex flex-col gap-5.5 p-6.5">
//               <SelectGroupTwo />
//               <MultiSelect id="multiSelect" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PropertyAdd;

import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Checkbox from '../../components/Checkboxes/Checkbox';

// Tabs Component
const Tabs = ({ activeTab, setActiveTab, children }) => {
  return (
    <div>
      <div className="flex space-x-4 border-b">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 ${
              activeTab === index
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
            }`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

// Tab Component
const Tab = ({ label, children }) => {
  return <div>{children}</div>;
};

// Main Form Component
const PropertyAdd = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    // Add your form submission logic here
  };

  return (
    <>
      <Breadcrumb pageName="Property" />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab label="Property Details">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Property Details
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  {/* Property Details Form Fields */}
                  <div>
                    <label className="mb-3 block font-medium text-black dark:text-white">
                      Property Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Property Name"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Construction of Status
                    </label>
                    <input
                      type="text"
                      placeholder="Enter  Your Construction Status"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Price Name"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white ">
                      Typs of Patta
                    </label>
                    <div className="flex mx-4 space-x-4">
                      <Checkbox label="Patta" />
                      <Checkbox label="Society" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Property Gov. Photo
                    </label>
                    <input
                      type="file"
                      placeholder="Enter Your Poperty Name"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Types Of BHK
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Types of BHK"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Numbers Of Washroom
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Numbers of Washroom"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Number of Balcony
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Number of Balcony"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  {/* Next Button for the first tab */}
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleNext}
                      className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab label="Property List">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Property List
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  {/* Property List Form Fields */}
                  <div>
                    <label className="mb-3 block font-medium text-black dark:text-white">
                      Developed By
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Property Name"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Default textarea
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Default textarea"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>

                  {/* Navigation Buttons for the second tab */}
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab label="Amenities">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Amenities
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  {/* Amenities Form Fields */}
                  <div>
                    <label className="mb-3 block font-medium text-black dark:text-white">
                      Property Image
                    </label>
                    <input
                      type="file"
                      placeholder="Default Input"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block font-medium text-black dark:text-white">
                      Disabled label
                    </label>
                    <input
                      type="text"
                      placeholder="Disabled label"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                    />
                  </div>

                  {/* Navigation Buttons for the third tab */}
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handlePrevious}
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default PropertyAdd;
