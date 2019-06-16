import Traveler from 'the-traveler';    

const traveler = {
    getClanInfo: obj => {
        return new Promise((resolve, reject) => {
            const apiKey = "73c5ac355b584255a26cf3beaa8aa67c";
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://www.bungie.net/platform/GroupV2/3188288/", true);
            xhr.setRequestHeader("X-API-Key", apiKey);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    },
    getClanMember: obj => {
        return new Promise((resolve, reject) => {
            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
            });

            xhr.open("GET", "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/4/Gabke%2311851");
            xhr.setRequestHeader("x-api-key", "73c5ac355b584255a26cf3beaa8aa67c");
            xhr.setRequestHeader("User-Agent", "Destin 2 Clan/1.0.0/gab.wars2@outlook.com");

            xhr.send(data);
        });
    }
};

export { traveler };