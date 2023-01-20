

// getProfiles.js
export const getProfiles = () => {
    const getProfiles = this;
     fetch("http://localhost:10009/wp-json/data/v1/profiles/")
       .then((response) => {
         return  response.json();
       })
       .then((res) => {
        getProfiles.profiles = JSON.parse(JSON.stringify(res));
           return getProfiles.profiles;
       });
       return useState('profiles', () => profiles)
 }

