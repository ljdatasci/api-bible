// export * from './apibible'
import APIBible from './apibible'

const apikey = 'a0d9be8c0c58709dfd7a430a27f5b532';
const params = {
    // language: 'eng',
    //abbreviation: 'engKJV',
    // name: 'Reina Valera 1909',
    //ids: 'de4e12af7f28f599-01,de4e12af7f28f599-02',
    bibleId: 'de4e12af7f28f599-01',
    //audioBibleId: '105a06b6146d11e7-01',
    //"include-full-details": true
    "include-chapters": true,
    "include-chapters-and-sections": true
}


const bible = new APIBible(apikey);

// bible.getBibles(params).then(res => console.log(res.data.data))
//                                   .catch(err => console.error(err));

// bible.getBiblesById(params).then(res => {
//             console.log(res)
//         })
//         .catch(err => console.log(err))

// async function getData(){
//     try {
//         let response = await bible.getBiblesById(params);
//         return response.data.data

//     }catch (err) {
//         console.error(err)
//     }
// }

// (async function(){
//     let bibles = await getData();
//     console.log(bibles);
//   })();

// bible.getAudioBibles(params).then(res => console.log(res.data)).catch(err => console.log(err))
// bible.getAudioBiblesById(params).then(res => console.log(res.data)).catch(err => console.log(err))
    const chapter = bible.getBooks(params).then(res => console.log(res.data.data[20].chapters[0])).catch(err => console.log(err))