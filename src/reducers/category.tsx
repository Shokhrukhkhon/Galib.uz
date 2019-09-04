import ICategory from "../interfaces/category";
import { ADD_CATEGORIES } from "../types/category";

export default (prevState:ICategory[] = [], action:any) => {

    switch (action.type) {
        case ADD_CATEGORIES: 
            return [
                ...prevState,
                ...action.categories
            ];
        default: 
            return prevState;
    }
}