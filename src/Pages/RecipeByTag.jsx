import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';


function RecipeByTag() {
    let [loading,setLoading] = useState(true);
    let [Recipe,SetRecipe] = useState([]);
    let [RecipeTag, SetRecipeTag] = useState([]);
    let id = useLocation().pathname.split("/")[2];
    
    async function fetch1() {
        try{
            await axios.get(`https://dummyjson.com/recipes/tag/${id}`).then((response)=>{
                console.log(response.data);
                SetRecipe(response.data["recipes"]);      
                
            })
        }catch(e){
            console.log(e);
        }
        finally{
            setLoading(false)
        }
    }
    async function fetch2() {
        try{
            await axios.get('https://dummyjson.com/recipes/tags').then((response)=>{
                console.log(response.data);
                SetRecipeTag(response.data);
              })
        }catch(e){
            console.log(e);
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(
      () => {
        fetch1();
        fetch2();
      },[]
    )
    if (loading) {
        return (
            <>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </>
        );
    }
    return (
        
    <div>
        <div className="uk-container">
            <div className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1" style={{ backgroundImage: 'url(img/header.jpg)' }}>
                <div className="uk-position-cover uk-header-overlay" />
                <div className="uk-position-relative" data-uk-grid>
                    <div className="uk-width-1-2@m uk-flex uk-flex-middle">
                        <div className="uk-padding-large uk-padding-remove-right">
                            <h1 className="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
                            <p className="uk-text-secondary">Appropriately integrate technically sound value with scalable infomediaries
                                negotiate sustainable strategic theme areas</p>
                            <a className="uk-text-secondary uk-text-600 uk-text-small hvr-forward" href="sign-up.html">Sign up today<span className="uk-margin-small-left" data-uk-icon="arrow-right" /></a>
                        </div>
                    </div>
                    <div className="uk-width-expand@m">
                    </div>
                </div>
            </div>
        </div>
        <div className="uk-section uk-section-default">
            <div className="uk-container">
                <div data-uk-grid>
                    <div className="uk-width-1-4@m sticky-container">
                        <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                            <h2>Recipes</h2>
                            <ul className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav>
                                <li className="uk-parent uk-open">
                                    <a href="#">Dish Type</a>
                                    <ul className="uk-nav-sub">
                                    {RecipeTag.map((value)=>{
                                        return(
                                        <li><a href={`/RecipeByTag/${value}`}>{value}</a></li>
                                        );
                                    })}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-expand@m">
                        <div data-uk-grid>
                            <div className="uk-width-expand@m">
                                <form className="uk-search uk-search-default uk-width-1-1">
                                    <span data-uk-search-icon />
                                    <input className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..." />
                                </form>
                            </div>
                            <div className="uk-width-1-3@m uk-text-right@m uk-light">
                                <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
                                    <option>Sort by: Latest</option>
                                    <option>Sort by: Top Rated</option>
                                    <option>Sort by: Trending</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
                        {Recipe.map((value)=>{
                            return(
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
                                    <a href={`/Recipe/${value.id}`} className="uk-position-cover" />
                                </div>
                            </div>
                            );
                            
                        })}
                        </div>
                        <div className="uk-margin-large-top uk-text-small">
                            <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                                <li><a href="#"><span data-uk-pagination-previous /></a></li>
                                <li><a href="#">1</a></li>
                                <li className="uk-active"><span>2</span></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><span data-uk-pagination-next /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
            <div className="uk-offcanvas-bar">
                <a className="uk-logo" href="index.html">Kocina</a>
                <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2" />
                <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
                    <li className="uk-active"><a href="index.html">Home</a></li>
                    <li><a href="recipe.html">Recipe</a></li>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="sign-in.html">Sign In</a></li>
                    <li><a href="sign-up.html">Sign Up.....................</a></li>
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

export default RecipeByTag
