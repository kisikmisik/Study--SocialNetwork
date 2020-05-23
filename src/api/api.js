import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "62c59592-bd1c-491a-b1d5-806b63a3cad6"
    }
})

export const usersAPI = {
    getUsers(pageLimit, currentPage) {
        return instance.get(`users?count=${pageLimit}&page=${currentPage}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    checkAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const manageSubscribeAPI = {
    followUser(userID) {
        return instance.post(`follow/${userID}`).then(response => response.data)
    },
    unfollowUser(userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

