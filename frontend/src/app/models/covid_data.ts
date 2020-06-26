export interface CovidData {
    title: string;
    files: Array<CustomFile>;
}

export interface CustomFile {
    title: string;
    path: string;
}