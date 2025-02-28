import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/jiewenspage.css";

const JiewensPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "jiewens-corner") || {};

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Jiewen's Corner | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || "Default description"} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords ? currentSEO.keywords.join(", ") : "default, keywords"}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="jiewens-corner" />
                <div className="content-wrapper">
                    <div className="jiewenscorner-logo-container">
                        <div className="jiewenscorner-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="jiewenscorner-container">
                        <div className="title jiewenscorner-title">
                            Welcome to Jiewen's Corner
                        </div>

                        <div className="subtitle jiewenscorner-subtitle">
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.
                            Here you can find all my latest updates and projects.

                        </div>
                    </div>

                    <div className="socials-container">
                        <div className="jiewenscorner-socials">
                            <Socials />
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default JiewensPage;