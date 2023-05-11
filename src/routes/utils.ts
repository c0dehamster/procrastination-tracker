export  interface Media {
    id: string
    title: string
    tag: "Movie" | "Book" | "Article" | "Tutorial" | "Project"
    checked: boolean
}