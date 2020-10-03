type friendsDataType = {
    id: number
    name: string
    img: string
}
let initialState = {
    friendsData: [
        {id: 1, name: "Sasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
        {id: 2, name: "Pasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
        {id: 3, name: "Masha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"}
    ] as Array<friendsDataType>
}

let navbarReducer = (state = initialState) => {
    return state
}
export default navbarReducer;