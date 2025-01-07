// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// // import CheckboxFive from '../../components/Checkboxes/CheckboxFive';
// // import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
// // import CheckboxOne from '../../components/Checkboxes/CheckboxOne';
// // import CheckboxThree from '../../components/Checkboxes/CheckboxThree';
// // import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
// // import SwitcherFour from '../../components/Switchers/SwitcherFour';
// // import SwitcherOne from '../../components/Switchers/SwitcherOne';
// // import SwitcherThree from '../../components/Switchers/SwitcherThree';
// // import SwitcherTwo from '../../components/Switchers/SwitcherTwo';
// // import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
// // import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
// // import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
// // import MultiSelect from '../../components/Forms/MultiSelect';
// import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
// // import Cattegoryadd from './Categoryadd';


import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';

const Cattegoryadd = () => {
    return (
        <>
            <Breadcrumb pageName="Category Add" />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 w-full">
                <div className="flex flex-col gap-9">
                    {/* Input Fields */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Category
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                            <label className=" flex sm:ml-70 text-black dark:text-white ">
                                    Category Name
                                </label>
                                <div className="flex justify-center items-center">
                             
                                    <input
                                        type="text"
                                        placeholder="Enter Category Name"
                                        className="sm:w-[60%] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-center text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <SelectGroupTwo />
                            <div className='w-[60%] flex justify-center items-center mx-auto'>

                            <button type="button" className="py-2.5 px-10 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cattegoryadd;

