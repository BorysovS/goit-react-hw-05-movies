import { useSearchParams } from "react-router-dom"
import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


export const SearchBox = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('searchQuery') ?? '';

    const handleSubmit = e => {
    e.preventDefault();
        const searchQuery = e.target.elements.searchQuery.value.trim();

        if (!searchQuery) {
        toast.error('🦄 Please entry correct film name', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
      return;
    }

        setSearchParams({ searchQuery: searchQuery });
        e.currentTarget.reset();
    };


    return (
     <div>
        <form onSubmit={handleSubmit}>
                <input type="text" name="searchQuery" defaultValue={search} autoComplete="off" autoFocus placeholder="Search images and photos"/>
                <button type="submit">Search</button>
            </form>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
    </div>
    )
}