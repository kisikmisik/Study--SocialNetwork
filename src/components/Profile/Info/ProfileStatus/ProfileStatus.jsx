import React from "react";
import s from './../Info.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.userStatus
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.statusText)
    }

    onChangeInput = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })

    }

    render() {
        // console.log(this.state.statusText)
        return (
            <div className={s.status} onClick={this.activateEditMode} onBlur={this.deactivateEditMode}>
                {
                    this.state.editMode ?
                    <input onChange={this.onChangeInput} autoFocus={true} type="text"
                           value={this.state.statusText}/> :
                    <span className={s.statusText}>{this.props.userStatus ? this.props.userStatus : "No status"}</span>
                }
            </div>
        )
    }
}

export default ProfileStatus