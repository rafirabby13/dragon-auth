import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx/Home.jsx";
import NewsDetail from "../components/NewsDetail/NewsDetail.jsx";
import News from "../components/News/News.jsx";
import CategoryNews from "../components/CategoryNews/CategoryNews.jsx";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                children:[
                    {
                        path: '/',
                        element: <News/>
                    },
                    {
                        path: '/newsDetail/:id',
                        element: <NewsDetail/>,
                        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
                    },
                    {
                        path: '/news/category/:categoryId',
                        element: <CategoryNews/>,
                        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.categoryId}`)
                    }
                  
                ]
              
            },

            
           
        ],
        
    },
    
])