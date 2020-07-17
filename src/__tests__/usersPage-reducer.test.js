import usersReducer, {followUser, setCurrentPage} from "../redux/usersPage-reducer";

let state = {
    users: [{id: 0, name: "Vitya", followed: false}],
    totalUsers: 100,
    currentPage: 1,
    pageLimit: 10,
    isFetching: false,
    isFollowInProgress: []
}

it('current page number should change to adjusted', () => {
    let action = setCurrentPage(2)
    let newState = usersReducer(state, action)
    expect(newState.currentPage).toBe(2)
});

it('user with adjusted id should be followed', () => {
    let adjustedID = 0;
    let action = followUser(0)
    let newState = usersReducer(state, action)
    expect(newState.users[adjustedID].followed).toBe(true)
});