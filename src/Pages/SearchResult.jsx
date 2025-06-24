import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

function SearchResult() {
    let [Recipe, SetRecipe] = useState([]);
    let [loading, setLoading] = useState(true);


    let query = useLocation().search.split("=")[1]
    async function fetch() {
        try {
            await axios.get(`https://dummyjson.com/recipes/search?q=${query}`).then((response) => {
                console.log(response.data);
                SetRecipe(response.data["recipes"]);
            })
    } catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetch();
    }, []);

    if (loading) {
        return (
            <>
                <div style={{ width: "100%", height: "100vh" }}>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div>
            <div className="uk-section uk-section-default uk-padding-remove-top">
                <div className="uk-container">
                    <div data-uk-grid>
                    </div>
                    <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
                        {Recipe.map((value) => {
                            return (
                                <div>
                                    <div className="uk-card">
                                        <div className="uk-card-media-top uk-inline uk-light">
                                            <img className="uk-border-rounded-medium" src={value.image} alt="Course Title" />
                                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                                            <div className="uk-position-xsmall uk-position-top-right">
                                                <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative" data-uk-icon="heart" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">{value.name}</h3>
                                            <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                                    <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7" />
                                                    <span className="uk-margin-xsmall-left">{value.rating}</span>
                                                    <span>(73)</span>
                                                </div>
                                                <div className="uk-width-expand uk-text-right">{value.mealType[0]}</div>
                                            </div>
                                        </div>
                                        <a href="/Recipe" className="uk-position-cover" />
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                    <div className="uk-margin-large-top uk-text-small">
                        <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                            <li><a href="#"><span data-uk-pagination-previous /></a></li>
                            <li><a href="#">1</a></li>
                            <li className="uk-disabled"><span>...</span></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li className="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#"><span data-uk-pagination-next /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
                <div className="uk-offcanvas-bar">
                    <a className="uk-logo" href="index.html">Kocina</a>
                    <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2" />
                    <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="recipe.html">Recipe</a></li>
                        <li className="uk-active"><a href="search.html">Search</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="sign-in.html">Sign In</a></li>
                        <li><a href="sign-up.html">Sign Up</a></li>
                    </ul>
                    <div className="uk-margin-medium-top">
                        <a className="uk-button uk-width-1-1 uk-button-primary" href="sign-up.html">Sign Up</a>
                    </div>
                    <div className="uk-margin-medium-top uk-text-center">
                        <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex-center">
                            <div>
                                <a href="https://twitter.com/" data-uk-icon="icon: twitter" className="uk-icon-link" target="_blank" />
                            </div>
                            <div>
                                <a href="https://www.facebook.com/" data-uk-icon="icon: facebook" className="uk-icon-link" target="_blank" />
                            </div>
                            <div>
                                <a href="https://www.instagram.com/" data-uk-icon="icon: instagram" className="uk-icon-link" target="_blank" />
                            </div>
                            <div>
                                <a href="https://vimeo.com/" data-uk-icon="icon: vimeo" className="uk-icon-link" target="_blank" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchResult
