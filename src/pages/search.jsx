import React from 'react';

import Layout from "../components/Layout/layout";
import SEO from '../components/seo';

import Search from '../components/Search/search'

const SearchPage = () => {
    return (
        <Layout>
            <SEO title="Search" />
            <Search />
        </ Layout>
    );
};

export default SearchPage;