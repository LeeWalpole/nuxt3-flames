// import { ref } from 'vue'


export function useProfiles() {

    const profiles = ref([])

    const load = async () => {
        try {
            let data = await fetch("http://localhost:10009/wp-json/data/v1/profiles/")
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profiles.value = await data.json()
        } catch (err) {

        }

    }

    return {
        profiles, load
        
    }

}

//    const {profiles, load} = useProfiles()

