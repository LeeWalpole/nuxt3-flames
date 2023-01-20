import jsonData1 from '~/static/json/profile-1.json'
import jsonData2 from '~/static/json/profile-2.json'

export default {
    async asyncData({ $route }) {
        const id = $route.params.id
        const profile2 = await import(`~/static/json/${id}.json`)
        return { profile2 }
    },

}