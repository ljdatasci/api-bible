// export * from './apibible'
import { APIBible } from './apibible'

const apikey = '';
const params = {
    language: 'spa',
    // abbrevation: 'NendNP03',
    // ids: 'de4e12af7f28f599-01,de4e12af7f28f599-02',
    "include-full-details": true
}
const bible = new APIBible(apikey);
bible.getBibles(params);