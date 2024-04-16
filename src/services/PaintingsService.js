import axios from "axios"
import { AppState } from "../AppState.js"
import { Painting } from "../models/Painting.js"

const paintingApi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api/artworks'
})

class PaintingsService {

    async getPaintings() {
        const response = await paintingApi.get('')
        // console.log('getting paintings', response)
        AppState.paintings = response.data.artworks.map(painting => new Painting(painting))
        console.log(AppState.paintings)
        AppState.currentPage = response.data.page
        AppState.pageCount = response.data.pages
    }

    async getPaintingsByPageNumber(pageNumber) {
        const response = await paintingApi.get(`?page=${pageNumber}`)
        console.log(response)
        AppState.paintings = response.data.artworks.map(painting => new Painting(painting))
        console.log('changing to new page', AppState.paintings)
        AppState.currentPage = response.data.page
    }

    async getPaintingById(id) {
        AppState.activePainting = null
        const response = await paintingApi.get(`${id}`)
        // console.log(response.data)
        AppState.activePainting = new Painting(response.data)
        console.log('active painting', AppState.activePainting)
    }
}

export const paintingsService = new PaintingsService