import React from "react";
import css from './FormsControls.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error; 
    return(
        <span className={css.formControl + ' ' +  (hasError ? css.error : '')}>
            <span>
                <input {...input} {...props}></input>
            </span>
            {
                hasError && <span>{meta.error}</span>
            }
        </span>
    )
}
