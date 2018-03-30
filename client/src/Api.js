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
            "Content-Type": "application/json"
        }
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
}

export default Api;
