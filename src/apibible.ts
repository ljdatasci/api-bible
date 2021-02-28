import axios, { AxiosResponse, AxiosError } from 'axios';

interface BibleProps {
    language?: string;
    abbreviation?: string;
    name?: string;
    ids?: string;
    "include-full-details"?: boolean;
}

interface IBibleById {
    bibleId: string;
}

interface IAudioBibles extends BibleProps {
    bibleId?: string;
}

interface IAudioBibleById {
    audioBibleId: string;
}

interface IBooks extends IBibleById {
    "include-chapters"?: boolean;
    "include-chapters-and-sections"?: boolean;
}

interface IBooksById extends IBibleById, IBooks {
    bookId: string;
}

interface IAudioBooks extends IAudioBibleById, IBooks { }

interface IAudioBooksById extends IAudioBooks { }

interface IChapters extends IBooksById { }

interface IChaptersById extends IBibleById {
    chapterId: string;
    "content-type": string;
    "include-notes"?: boolean;
    "include-titles"?: boolean;
    "include-chapter-numbers"?: boolean;
    "include-verse-numbers"?: boolean;
    "include-verse-spans"?: boolean;
    parallels?: string[];

}

interface IAudioChapters extends IAudioBibleById, IBooks { }

interface IAudioChaptersById extends IAudioChapters { }

interface ISections extends IChapters { }

interface ISectionsChapters extends IChapters { }

interface ISectionsById extends IBibleById {
    sectionId: string;
}

interface IPassages extends IChaptersById {
    passageId: string;
    "use-org-id"?: boolean;
}

interface IVerses extends IChaptersById { }

interface IVerseById extends IBibleById {
    verseId: string;
    "use-org-id"?: boolean;
}

interface ISearch extends IBibleById {
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

type Language = {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: string;
}

type Countries = {
    id: string;
    name: string;
    nameLocal: string;
}

type AudioBibleSummary = {
    id: string;
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
}


type BibleSummary = {
    id: string;
    dblId: string;
    abbreviation: string;
    abbreviationLocal: string;
    language: Language;
    countries: Countries[];
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
    countries: Countries[];
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

type ChapterSummary = {
    id: string;
    bibleId: string;
    number: string;
    bookId: string;
    reference: string;
}
type Books = {
    id: string;
    bibleId: string;
    abbreviation: string;
    name: string;
    nameLong: string;
    chapters: ChapterSummary[];
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
    abbreviation: string;
    abbreviationLocal: string;
    copyright: string;
    language: Language;
    countries: Countries[];
    name: string;
    nameLocal: string;
    description: string;
    descriptionLocal: string;
    info: string;
    type: string;
    updatedAt: string;
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

export class APIBible {
    private url: string = '';
    private baseUrl: string = 'https://api.scripture.api.bible/v1/bibles';

    constructor(private apikey: string) { }

    getBibles(params: BibleProps): void {
        let config = {
            params,
            headers: {
                'api-key': this.apikey
            }
        }
        axios.get<Bible>(this.baseUrl, config)
            .then((response: AxiosResponse<Bible>) => console.log(response.data))
            .catch((err: AxiosError) => console.log(err));
    }

    getBiblesById(params: object) {
        return;
    }

    getAudioBibles(params: object) {
        return;
    }

    getAudioBiblesById(params: object) {
        return;
    }

    getBoks(params: object) {
        return;
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