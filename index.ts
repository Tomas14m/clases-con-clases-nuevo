class Banda {
    members: string[]
    albums: Album[]
    constructor(members: string[], albums: Album[]) {
        this.members = members;
        this.albums = albums;
    }
}

class Album {
    title: string
    songs: string[]
    constructor(title: string, songs: string[]) {
        this.title = title;
        this.songs = songs;
    }
}

// function main() {
//     const album1 = new Album("YHLQMDLG", ["YO PERREO SOLA", "CANCION2"])
//     const banda1 = new Banda(["tomas","alberto"], [album1]);
//     console.log(banda1)
// }
// main();

