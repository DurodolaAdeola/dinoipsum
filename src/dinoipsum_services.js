export default class DinoIpsum {
    static getIpsum(para, words) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://dinoipsum.com/api/?format=json&paragraphs=${para}&words=${words}`;
        request.onload = function () {      
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            };

            request.open("GET" , url , true);
            request.send();
        })
    };
}