export class Movie {
    public id: number;
    public name: string;
    public director: string;
    public imageUrl: string;
    public duration: number;
    public releseDate: Date;
    public genres: any[];

    constructor(id, name, director, imageUrl, duration, releseDate, genres) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.releseDate = releseDate;
        this.genres = genres;
    }
}
