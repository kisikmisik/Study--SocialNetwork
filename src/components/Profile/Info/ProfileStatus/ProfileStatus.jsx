import React from "react";
import s from './../Info.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.editMode !== this.state.editMode) {
            this.setState({
              userStatus: this.props.userStatus
            })
        }
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
        this.props.updateStatusThunk(this.state.userStatus)
    }

    onChangeInput = (e) => {
        this.setState({
            userStatus: e.currentTarget.value
        })

    }

    render() {
        return (
            <div className={s.status} onClick={this.activateEditMode} onBlur={this.deactivateEditMode}>
                {
                    this.state.editMode ?
                    <input onChange={this.onChangeInput} autoFocus={true} type="text"
                           value={this.state.userStatus}/> :
                    <span className={s.statusText}>{this.props.userStatus ? this.props.userStatus : "No status"}</span>
                }
            </div>
        )
    }
}

export default ProfileStatus