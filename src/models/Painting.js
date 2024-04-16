
export class Painting {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.color = data.color
        this.attribution = data.attribution
        this.smallImg = data.imgUrls.small
        this.fullImg = data.imgUrls.full
        this.slug = data.slug
    }
}