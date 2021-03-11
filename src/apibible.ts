import axios, { AxiosResponse, AxiosError, AxiosInstance, AxiosPromise } from 'axios';


interface BibleProps {
    language?: string;
    abbreviation?: string;
    name?: string;
    ids?: string;
    "include-full-details"?: boolean;
}

interface BibleById {
    bibleId: string;
}

interface AudioBibles extends BibleProps {
    bibleId?: string;
}

interface AudioBibleById {
    audioBibleId: string;
}

interface Books extends BibleById {
    "include-chapters"?: boolean;
    "include-chapters-and-sections"?: boolean;
}

interface IBooksById extends BibleById, Books {
    bookId: string;
}

interface IAudioBooks extends AudioBibleById, Books { }

interface IAudioBooksById extends IAudioBooks { }

interface IChapters extends IBooksById { }

interface IChaptersById extends BibleById {
    chapterId: string;
    "content-type": string;
    "include-notes"?: boolean;
    "include-titles"?: boolean;
    "include-chapter-numbers"?: boolean;
    "include-verse-numbers"?: boolean;
    "include-verse-spans"?: boolean;
    parallels?: string[];

}

interface IAudioChapters extends AudioBibleById, Books { }

interface IAudioChaptersById extends IAudioChapters { }

interface ISections extends IChapters { }

interface ISectionsChapters extends IChapters { }

interface ISectionsById extends BibleById {
    sectionId: string;
}

interface IPassages extends IChaptersById {
    passageId: string;
    "use-org-id"?: boolean;
}

interface IVerses extends IChaptersById { }

interface IVerseById extends BibleById {
    verseId: string;
    "use-org-id"?: boolean;
}

interface ISearch extends BibleById {
    query?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    range?: string;
    fuzziness?: string;
}

type Meta = {
    fums: string;
    fumsId: string;
    fumsJsInclude: string;
    fumsJs: string;
    fumsNoScript: string;
}

enum ScriptDirection {
    LTR = 'LTR',
    RTL = 'RTL'
}

type Language = {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: ScriptDirection;
}

type Country = {
    id: string;
    name: string;
    nameLocal: string;
}

type AudioBibleSummary = {
    id: string;
    name: string;
    nameLocal: string;
    description?: string;
    descriptionLocal?: string;
}


type BibleSummary = {
    id: string;
    dblId: string;
    abbreviation: string;
    abbreviationLocal: string;
    language: Language;
    countries: Country[];
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
    relatedDbl: string;
    type: string;
    updateAt: string;
    audioBibles: AudioBibleSummary[];
}

type Bible = {
    id: string;
    dblId: string;
    abbreviation: string;
    abbreviationLocal: string;
    copywright?: string;
    language: Language;
    countries: Country[];
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
    info?: string;
    type: string;
    updatedAt: string;
    relatedDbl: string;
    audioBibles: AudioBibleSummary[];
}

type BibleTypes = {
    data: Bible[];
}

type ChapterSummary = {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    postion?: number;
    sections?: string[]
}
type BooksTypes = {
    data: {
    id: string;
    bibleId: string;
    abbreviation: string;
    name: string;
    nameLong: string;
    chapters: ChapterSummary[];
    }[]
}

type Chapter = {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    content: string;
    reference: string;
    verseCount: string;
    next: {
        id: string;
        bookId: string;
        number: string;
    }

    previous: {
        id: string;
        bookId: string;
        number: string;
    }

    copywright: string;
}

type Passage = {
    id: string;
    bibleId: string;
    orgId: string;
    content: string;
    reference: string;
    verseCount: string;
    copywright: string;
}

type Verse = {
    id: string;
    orgId: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    content: string;
    reference: string;
    verseCount: string;
    copywright: string;
    next: {
        id: string;
        bookId: string;
    }
    previous: {
        id: string;
        bookId: string;
    }
}

type SectionSummary = {
    id: string;
    bibleId: string;
    bookId: string;
    title: string;
    firstVerseId: string;
    lastVerseId: string;
    firstVerseOrgId: string;
    lastVerseOrgId: string;
}

type Section = {
    id: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    title: string;
    cotent: string;
    verseCount: string;
    firstVerseId: string;
    lastVerseId: string;
    firstVerseOrgId: string;
    lastVerseOrgId: string;
    copywright: string;
    next: {
        id: string;
        title: string;
    }
    previous: {
        id: string;
        title: string;

    }
}

type VerseSummary = {
    id: string;
    orgId: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    reference: string;
}

type SearchVerse = {
    id: string;
    orgId: string;
    bibleId: string;
    bookId: string;
    chapterId: string;
    text: string;
    reference: string;

}

type SearchResponse = {
    query: string;
    limit: string;
    offset: string;
    total: string;
    verseCount: string;
    verses: SearchVerse[];
    passages: Passage[];

}

type AudioBible = {
    id: string;
    dblId: string;
    abbreviation: null | string;
    abbreviationLocal: null | string;
    copyright: string;
    language: Language;
    countries: Country[];
    name: string;
    nameLocal: string;
    description: null | string;
    descriptionLocal: null | string;
    info: string;
    type: string;
    updatedAt: Date;
    relatedDbl: string;
}

type TimeCodes = {
    end: string;
    start: string;
    verseId: string;
}

type AudioChapter = {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    resourceUrl: string;
    timecodes: TimeCodes[];
    expiresAt: number;
    reference: string;
    next: {
        id: string;
        bookId: string;
        number: string;
    }
    previous: {
        id: string;
        bookId: string;
        number: string;
    }
    copyright: string;
}

export default class APIBible {
  

    private apiBible: AxiosInstance = axios.create({
        baseURL: 'https://api.scripture.api.bible/v1',   
    })

    constructor(private apikey: string) { 
        this.apiBible.defaults.headers.common['api-key'] = this.apikey;
    }
    
    getBibles = (params: BibleProps): AxiosPromise<BibleTypes> => {
      return this.apiBible.get<BibleTypes>('/bibles', {params})
    }
    

    getBiblesById = (params: BibleById): AxiosPromise<BibleTypes> => {
        return this.apiBible.get<BibleTypes>(`/bibles/${params.bibleId}`);
    }

    getAudioBibles = (params: AudioBibles): AxiosPromise<AudioBible> => {
        return this.apiBible.get<AudioBible>('/audio-bibles', { params });
    }

    getAudioBiblesById = (params: AudioBibleById): AxiosPromise<AudioBible> => {
        return this.apiBible.get<AudioBible>(`/audio-bibles/${params.audioBibleId}`)
    }

    getBooks = (params: Books): AxiosPromise<BooksTypes> => {
        return this.apiBible.get<BooksTypes>(`/bibles/${params.bibleId}/books`, {
            params: {
                "include-chapters": params['include-chapters'],
                "include-chapters-and-sections": params['include-chapters-and-sections']
            }});
    }

    getBooksById(params: object) {
        return;
    }

    getAudioBooks(params: object) {
        return;
    }

    getAudioBooksById(params: object) {
        return;
    }

    getChapters(params: object) {
        return;
    }

    getChaptersById(params: object) {
        return;
    }

    getAudioChapters(params: object) {
        return;
    }

    getAudioChaptersById(params: object) {
        return;
    }

    getSections(params: object) {
        return;
    }

    getSectionsByChapter(params: object) {
        return;
    }

    getSectionsById(params: object) {
        return;
    }

    getPassages(params: object) {
        return;
    }

    getVerses(params: object) {
        return;
    }

    getVersesById(params: object) {
        return;
    }

    search(params: object) {
        return;
    }

    setUrl(params: object) {

    }

}