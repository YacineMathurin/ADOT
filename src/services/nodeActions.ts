import { API } from "../constants";
import { IState } from "../interfaces/inidex";

export const addArticle = async (article: IState["currentDataType"]) => {
    const url = `${API}/articles`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
        return response.json();
    } catch (error: any) {
        throw new Error(error)
    } 
}

export const getArticles = async () => {
    const url = `${API}/articles`;
    try {
        const response = await fetch(url, {
            method: "GET"
        });
        return response.json();
    } catch (error) {
        
    }
}

export const updateArticles = async (article: IState["currentDataType"]) => {
    const url = `${API}/articles`;
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        });
        return response.json();
    } catch (error) {
        
    }
}

