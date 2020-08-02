import React from "react";
import s from './FormsControls.module.css'
import classNames from 'classnames'

export const Textarea = (props) => {
    let hasError = props.meta.error && props.meta.touched;
    return (
        <div className={s.fieldWrapper}>
            <textarea {...props.input} {...props} className={hasError ? s.error : 'field'}/>
            {hasError && <span className={s.errorMessage}>{props.meta.error}</span>}
        </div>

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
