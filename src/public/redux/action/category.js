import axios from "axios";

const IP = 'http://servermobile.moewreview.press:3000';

export const getCategory = () => {
    return {
        type: "GET_CATEGORY",
        payload: axios.get(`${IP}/category`),
    };
};

export const postCategory = (data) => {
	return {
		type: 'POST_CATEGORY',
		payload: axios.post(`${IP}/category`, {
			category_name: data.category_name,
			image_url: data.image_url
		})
	}
}

// export const postCategory = (data) => {
//     return {
//         type: "POST_CATEGORY",
//         payload: insertNewCat({
//             category_name: data.category_name,
//             notes: [],
//             image_url: data.image_url,
//         })
//             .then()
//             .catch((error) => {
//                 alert(`Insert new todoList error ${error}`);
//             }),
//     };
// };

export const deleteCategory = (data) => {
    return {
        type: "DELETE_CATEGORY",
        payload: axios.delete(`${IP}/category/${data.category_id}`),
    };
};
