import Traveler from 'the-traveler';    

const traveler = {
    getClanInfo: obj => {
        return new Promise((resolve, reject) => {
            
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


            xhr.send(data);
        });
    }
};

export { traveler };