import axios from "axios";

export default class PostServices {
    static async getPosts(pager, domain, path, lang) {
        let url = domain + (lang === "en" ? "" : `/${lang}`) + path;
        const response = await axios.get(url, {
            params: {
                page: pager
            }
        });

        return response;
    }

    static async getPost(domain, path, lang) {
        let url = domain + (lang === "en" ? "" : `/${lang}`) + path;
        const response = await axios.get(url);

        return response;
    }

    static async sendRequestUrl(domain, path, lang) {
        let url = domain + (lang === "en" ? "" : `/${lang}`) + path;
        const response = await axios.get(url);

        return response;
    }

}

