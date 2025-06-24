import './App.css'
import Header from './Comman/Header'
import Footer from './Comman/Footer'  
import Home from './Pages/Home'
import Recipe from './Pages/Recipe'
import Search from './Pages/Search'
import Signin from './Pages/Sign-in'
import Signup from './Pages/Sign-up'
import Contact from './Pages/Contact'
import RecipeTag from './Pages/RecipeTag'
import RecipeByTag from './Pages/RecipeByTag'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SearchResult from './Pages/SearchResult'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Signup' element={<Signup />} />
    <Route path='/Signin' element={<Signin />} />
    <Route path='/Recipe/:id' element={<Recipe />} />
    <Route path='/Search' element={<Search />} />
    <Route path='/searchResult' element={<SearchResult /> }/>
    <Route path='/Contact' element={<Contact />} />
    <Route path='/RecipeTag' element={<RecipeTag />}/>
    <Route path='/RecipeByTag/:value' element={<RecipeByTag />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
