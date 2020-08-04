import {SubmissionError} from "redux-form";

export const required = (fieldData) => {
    if (fieldData) return undefined
    return "This field is required"
}

export let maxLengthCreator = (maxLength) => {
    return (fieldData) => {
        if(fieldData.length > maxLength) return `Max length is ${maxLength + ' symbols'}`
        return undefined
    }
}

export const postSubmit = (values) => {
    if (!values.currentText) {
        throw new SubmissionError({
            currentText: 'There is nothing to post',
            _error: "You can't post nothing"
        })
    } else if (values.currentText.length > 100) {
        throw new SubmissionError({
            currentText: 'Too large, bro. Max is 100',
            _error: "Limit is 100 symbols"
        })
    }
}