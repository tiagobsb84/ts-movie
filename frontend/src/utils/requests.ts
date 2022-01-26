//process.env -> e para desenhar a variavel de ambiente para conversa com o heroku, REACT_APP_BACKEND e o nome da variável, os
//dois ponto de interrogação e caso não tive caminho na variável ira usar a do localhos mesmo.
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";