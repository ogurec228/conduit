import {createStore} from 'vuex'

import articles from "@/store/modules/articles";
import tags from "@/store/modules/tags";
import auth from "@/store/modules/auth";
import article from "@/store/modules/article";
import profile from "@/store/modules/profile";



export default createStore({
    modules: {
        articles,
        tags,
        auth,
        article,
        profile,
    }
})
