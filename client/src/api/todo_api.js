import { fetch } from 'whatwg-fetch'


const URL = 'http://localhost:8080/api/todo'
 
export class TodoApi {

    static getTodos() {
        return fetch(URL)
        .then((res) => res.json())
    }

}