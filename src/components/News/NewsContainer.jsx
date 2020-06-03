import React from "react";
import News from "./News";
import {compose} from "redux";
import {withAuthHoc} from "../../hoc/withAuthHoc";

class NewsContainer extends React.Component {
    render() {
        return <News {...this.props}/>
    }
}
export default compose(
    withAuthHoc
) (NewsContainer)