import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Element from '../element/Element';
import Creator from '../creator/Creator';

function Wrapper(props) {
    const jsonData = {
        submit: () => alert(), buttonClass: "p-2 bg-blue-500  rounded-full ", buttonText: "submit", formStyle: {}, formClass: "mx-auto w-3/12 mt-28 ", button: { class: "block bg-green-200 text-red-700  ", text: "submit", class: "" }, type: "formik"
    }
    const [element, setElement] = useState([{ class: " ", text: "Name : " ,name:"hbkgvgvkfcgvfcvhcfi", type: "text", class: "", placeHolder: "pppppppp" }])
    switch (jsonData.type) {
        case "formik":
            return <div className='h-screen  bg-backGround bg-cover '>
                <Creator setElement={setElement} element={element} />
                <Formik>
                    <Form style={jsonData.formStyle} className={"borde r-black bord er  "}>
                        <div className='max-w-[550px] text-xl  bg-white/90 inset-0  m-auto p-10  my-auto mt-16   '>
                            <div className='mx-auto text-2 xl text-blue-500 font-bold    text-center text-3xl '>Form Creator </div>
                          
                            {
                                element?.map(el => <Element data={el} />)
                            }
                            <button type='submit' className={"bg-gradient-to-tr from-blue-800 hover:to-n eutral-700 hover:from-bl ue-400 hover:duration-300   to-neutral-400 text-2xl  text-white py-3 px-8 block mx-auto mt-3  rounded-full   "}>{jsonData.buttonText}</button>

                        </div>

                    </Form>
                </Formik>
               
            </div>
            break;
        case "normal":
            break;


    }
}

export default Wrapper;