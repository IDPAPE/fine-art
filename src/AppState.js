import { reactive } from 'vue'
import { Painting } from './models/Painting.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {Painting[]} */
  paintings: [],

  /**@type {Painting} */
  activePainting: null,

  currentPage: null,

  pageCount: null

})
