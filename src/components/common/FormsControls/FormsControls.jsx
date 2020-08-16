import React from "react";
import s from './FormsControls.module.css'
import classNames from 'classnames'

export class Textarea extends React.Component {
    render() {
        return (
            <>
                <textarea {...this.props.input} {...this.props}
                          className={this.props.meta.error && this.props.meta.touched ? s.error : 'field'}/>
                {this.hasError && <span className={s.errorMessage}>{this.props.meta.error}</span>}
            </>
        )
    }
}

export const Input = (props) => {
    return (
        <>
            <input {...props.input} {...props} className={classNames(props.meta.error && props.meta.touched ? s.error : 'field')}/>
            {props.meta.error && props.meta.touched && <span className={s.errorMessage}>{props.meta.error}</span>}
        </>

    )
}
