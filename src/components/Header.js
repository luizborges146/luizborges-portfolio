import React from "react";
import NavTabs from "./NavTabs";
import '../style/App.css'

export default function Header ({currentPage, handlePageChange}) {
    return (
        <header className ="header">
            <h1>Luiz Borges</h1>
            <NavTabs currentPage = {currentPage} handlePageChange = {handlePageChange}></NavTabs>
        </header>
    )

}