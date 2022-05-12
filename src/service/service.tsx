import axios from 'axios';

//getting data from API
export const getPhotos = async () => {
    let data:any = [];
    await axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then(response => {
            data = response.data;
            // console.log(data);
        });
    return data;
}