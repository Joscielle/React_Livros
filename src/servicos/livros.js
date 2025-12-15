import axios from "axios";

const livrosAPI = axios.create({
  baseURL: "https://localhost:8000/livros"
});

function getLivros() {
  const response = livrosAPI.get('/');
  response.data;
}
 export{
  getLivros
 }