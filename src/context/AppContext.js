import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import {useState} from 'react';

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[post,setPost]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);
    
    async function fetchBlogPost(page = 1){
        let url=`${baseUrl}?&page=${page}`;
        setLoading(true);
        try{
            const response=await fetch(url);
            const data=await response.json();
            setPost(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log('network error');
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }

    const value={
     loading,setLoading,post,setPost,page,setPage,totalPages,setTotalPages,fetchBlogPost,handlePageChange
   };
   
   return <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>
}