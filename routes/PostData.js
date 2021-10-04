const axios = require('axios');
module.exports = {
    getPostData : async function(url){
        try {
            const res = await axios.get(url);
            return res.data;
            } catch (err) {
                return err;
            }
    }
}
