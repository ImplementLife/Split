import axios from 'axios';

export default class UserAPI {
    async getAll () {
        return await axios( `http://ilfa.dp.ua:8080/`)
    }
}