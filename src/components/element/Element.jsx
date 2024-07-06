import { Field } from 'formik';
import React from 'react';

function Element({ data }) {
    return (
        <div className={`${data.class} flex justify-between items-center `}>
           
            <Field class={`${data.fieldClass} outline-none border-b-2 border-black/30   w-full h-10 mt-3 `}  name={data.name} type={data.type} placeHolder={data.text } />
        </div>

    );
}

export default Element;