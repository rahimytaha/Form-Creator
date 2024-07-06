import { Field, Form, Formik } from 'formik';
import React from 'react';

function Creator({setElement,element}) {
    return (
        <div className='flex'>
            {/* <Formik initialValues={{password: "" }} onSubmit={e => console.log(e)} >
                <Form className='max-w-[550px] text-xl  w-[550px] bg-white/90 p-10 mt-16   mx-auto   '>
                <Field name='nameAccount' placeHolder="Name" className='border-b-[2px]  outline-none pb-3  h-8 w-10/12 ' />
                    <div className='mx-auto text-2 xl text-blue-500 font-bold    text-center text-2xl '> Creator </div>
                    {/* <Field name="text" placeHolder="Input Text" class="outline-none border-b-2 border-black/30   w-full h-10 mt-3 " /> 
                    <Field type="password" name='password' placeHolder="Input Type" class="outline-none border-b-2 border-black/30   w-full h-10 mt-3 " />
                    <button type='submit' className={"bg-gradient-to-tr from-blue-800 hover:to-n eutral-700 hover:from-bl ue-400 hover:duration-300   to-neutral-400 text-xl  text-white py-3 px-8 block mx-auto mt-3  rounded-full   "}>Create</button>

                </Form>
            </Formik> */}
            <Formik onSubmit={(e) => setElement([...element,e])} initialValues={{ text: "",type:"" }}>

                <Form className='max-w-[550px] text-xl  w-[550px] bg-white/90 p-10 mt-16   mx-auto   '>
                  
                    <div className='mx-auto text-2 xl text-blue-500 font-bold    text-center text-2xl '> Creator </div>
                    <Field name="text" placeHolder="Input Text" class="outline-none border-b-2 border-black/30   w-full h-10 mt-3 " />
                    <Field  name='type' placeHolder="Input Type" class="outline-none border-b-2 border-black/30   w-full h-10 mt-3 " />
                    <button type='submit' className={"bg-gradient-to-tr from-blue-800 hover:to-n eutral-700 hover:from-bl ue-400 hover:duration-300   to-neutral-400 text-xl  text-white py-3 px-8 block mx-auto mt-3  rounded-full   "}>Create</button>

                </Form>
            </Formik>

        </div>
    );
}

export default Creator;