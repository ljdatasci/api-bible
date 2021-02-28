// export * from './apibible'
import { APIBible } from './apibible'

const apikey = 'a0d9be8c0c58709dfd7a430a27f5b532';
const params = {
    language: 'spa',
    // abbrevation: 'NendNP03',
    // ids: 'de4e12af7f28f599-01,de4e12af7f28f599-02',
    "include-full-details": true
}
const bible = new APIBible(apikey);
bible.getBibles(params);