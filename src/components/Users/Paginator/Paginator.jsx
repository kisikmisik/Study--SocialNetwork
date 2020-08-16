import React, {useState} from "react";
import s from "../Paginator/Paginator.module.css";
import prevArrow from "./../../../assets/img/left-arrow.svg"
import nextArrow from "./../../../assets/img/right-arrow.svg"

let Paginator = (props) => {
    let totalPagesCount = Math.ceil(props.totalUsers / props.pageLimit);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }
    let pagesPortion = 15
    let portionsCount = Math.ceil(totalPagesCount / pagesPortion)

    let [currentPortion, changeCurrentPortion] = useState(1)
    let [currentRightBorder, changeRightBorder] = useState(pagesPortion)
    let [currentLeftBorder, changeLeftBorder] = useState(1)
    let nextPortion = () => {
        changeRightBorder(currentRightBorder += pagesPortion)
        changeLeftBorder(currentLeftBorder += pagesPortion)
        changeCurrentPortion(currentPortion += 1)
    }
    let prevPortion = () => {
        changeRightBorder(currentRightBorder -= pagesPortion)
        changeLeftBorder(currentLeftBorder -= pagesPortion)
        changeCurrentPortion(currentPortion -= 1)
    }
    return (
        <div className={s.paginatorWrapper}>
            {currentPortion > 1 ?
                <button className={s.prevArrow} onClick={prevPortion}>
                    <img src={prevArrow} alt="previous" width='60'/>
                </button> : <span></span>}

            <div className={s.pages}>
                {pages.filter((el => el <= currentRightBorder && el >= currentLeftBorder))
                    .map(p => <span key={p} onClick={() => props.onPageChanged(p)}
                                    className={props.currentPage === p ? s.currentPage : ''}>{p}</span>)}
            </div>
            {currentPortion < portionsCount ?
                <button className={s.nextArrow} onClick={nextPortion}>
                    <img src={nextArrow} alt="previous" width='60'/>
                </button> : <span></span>}
        </div>
    )
}
export default Paginator