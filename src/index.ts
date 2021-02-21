interface IBibles {
    language?: string;
    abbreviation?: string;
    name?: string;
    ids?: string[];
    includeFullDetails?: boolean;
}

interface IBibleById {
    bibleId: string;
}

interface IAudioBibles extends IBibles {
    bibleId?: string;
}

interface IAudioBibleById {
    audioBibleId: string;
}

interface IBooks extends IBibleById {
    includeChapters?: boolean;
    includeChaptersAndSections?: boolean;
}

interface IBooksById extends IBibleById, IBooks {
    bookId: string;
}

interface IAudioBooks extends IAudioBibleById, IBooks { }

interface IAudioBooksById extends IAudioBooks { }

interface IChapters extends IBooksById { }

interface IChaptersById extends IBibleById {
    chapterId: string;
    contentType: string;
    includeNotes?: boolean;
    includeTitles?: boolean;
    includeChapterNumbers?: boolean;
    includeVerseNumbers?: boolean;
    includeVerseSpans?: boolean;
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
    useOrgId?: boolean;
}

interface IVerses extends IChaptersById { }

interface IVerseById extends IChaptersById {
    verseId: string;
    useOrgId?: boolean;
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
    constructor(private key: string) { }

    getBibles(options: object) {
        return;
    }

    getBiblesById(options: object) {
        return;
    }

    getAudioBibles(options: object) {
        return;
    }

    getAudioBiblesById(options: object) {
        return;
    }

    getBoks(options: object) {
        return;
    }

    getBooksById(options: object) {
        return;
    }

    getAudioBooks(options: object) {
        return;
    }

    getAudioBooksById(options: object) {
        return;
    }

    getChapters(options: object) {
        return;
    }

    getChaptersById(options: object) {
        return;
    }

    getAudioChapters(options: object) {
        return;
    }

    getAudioChaptersById(options: object) {
        return;
    }

    getSections(options: object) {
        return;
    }

    getSectionsByChapter(options: object) {
        return;
    }

    getSectionsById(options: object) {
        return;
    }

    getPassages(options: object) {
        return;
    }

    getVerses(options: object) {
        return;
    }

    getVersesById(options: object) {
        return;
    }

    search(options: object) {
        return;
    }

}