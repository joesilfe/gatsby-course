import React from 'react';
import Layout from "../components/Layout/layout";
import SEO from '../components/seo';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <h1>About Page</h1>
            <ul>
                <li>
                    <Link to="/" activeStyle={{ color: "red" }}>Home (Gatsby Link)</Link>
                </li>
                <li>
                    <Link to="/about" activeStyle={{ color: "red" }}>About (Gatsby Link)</Link>
                </li>
            </ul>
        </ Layout>
    );
};

export default AboutPage;