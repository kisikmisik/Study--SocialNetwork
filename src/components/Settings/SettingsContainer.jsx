import React from "react";
import {compose} from "redux";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
    render() {
        return <Settings {...this.props}/> // не уверен, что работают пропсы
    }
}
export default compose(
    withAuthHoc
) (SettingsContainer)