import utils from './Utils'

class Api {
    static apiBaseURL() {
        return 'http://localhost:8000/api/v1/';
    }

    static getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    static requestHeaders() {
        return {
            "X-CSRFToken": this.getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Token " + localStorage.token
        }
    }

    static postAuthSignIn(email, password) {
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        return fetch(`${this.apiBaseURL()}rest-auth/login/`, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static postAuthSignOut() {
        const request = new Request(`${this.apiBaseURL()}rest-auth/logout/`, {
            method: 'POST',
            credentials: "same-origin",
            headers: this.requestHeaders()
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getAuthDetails() {
        const request = new Request(`${this.apiBaseURL()}user/`, {
            method: 'GET',
            credentials: "same-origin",
            headers: this.requestHeaders()
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getEventList() {
        const request = new Request(`${this.apiBaseURL()}events/`, {
            method: 'GET',
            credentials: "same-origin",
            headers: this.requestHeaders()
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getUserList() {
        const request = new Request(`${this.apiBaseURL()}users/`, {
            method: 'GET',
            credentials: "same-origin",
            headers: this.requestHeaders()
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getUserEventList(userID, date = null) {
        if (date) {
            const request = new Request(`${this.apiBaseURL()}users/${userID}/events/${utils.formatDate(date)}/`, {
                method: 'GET',
                credentials: "same-origin",
                headers: this.requestHeaders()
            });

            return fetch(request).then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
        } else {
            const request = new Request(`${this.apiBaseURL()}users/${userID}/events/`, {
                method: 'GET',
                credentials: "same-origin",
                headers: this.requestHeaders()
            });

            return fetch(request).then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
        }
    }

    static postEvent(userID, date, hr) {
        const request = new Request(`${this.apiBaseURL()}users/${userID}/events/`, {
            method: 'POST',
            credentials: "same-origin",
            headers: this.requestHeaders(),
            body: JSON.stringify({
                "date": utils.formatDate(date),
                "time": utils.formatTime({ hr })
            })
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default Api;
