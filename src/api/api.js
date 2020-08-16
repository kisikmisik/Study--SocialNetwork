import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d7b00a42-897a-4e8f-9782-45121810f4b8"
    }
})
export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(pageLimit, currentPage) {
        return instance.get(`users?count=${pageLimit}&page=${currentPage}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(loginData) {
        return instance.post(`auth/login`, {...loginData, rememberMe: false}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
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
    },
    updateUserStatus(statusText) {
        return instance.put(`profile/status`, {status: statusText})
    },
    getUserStatus(userID) {
        return instance.get(`profile/status/${userID}`).then(response => response.data)
    },
    changeProfilePhoto(photoFile) {
        return instance.put('profile/photo', photoFile, {headers: {'Content-type': 'multipart/form-data'}}).then(response => response.data)
    },
    saveProfileData(dataObject) {
        return instance.put('profile', dataObject).then(response => response.data)
    }
}

