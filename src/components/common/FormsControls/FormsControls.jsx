import React from "react";
import s from './FormsControls.module.css'
import classNames from 'classnames'

export const Textarea = (props) => {
    let hasError = props.meta.error && props.meta.touched;
    return (
        <>
            <textarea {...props.input} {...props} className={hasError ? s.error : 'field'}/>
            {hasError && <span className={s.errorMessage}>{props.meta.error}</span>}
        </>

    )
}

export const Input = (props) => {
    let hasError = props.meta.error && props.meta.touched;
    return (
        <>
            <input {...props.input} {...props} className={classNames(hasError ? s.error : 'field')}/>
            {hasError && <span className={s.errorMessage}>{props.meta.error}</span>}
        </>

    )
}
