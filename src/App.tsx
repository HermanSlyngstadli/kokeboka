import React from 'react'
import { RecipeListPage } from './pages/RecipeListPage'
import { RecipePage } from './pages/RecipePage'
import { recipes } from './recipes'

const idOfRecipeWithSlug = (pathname: string) => {
    for (const recipe in recipes) {
        if (pathname === recipes[recipe].slug) {
            return Number(recipe)
        }
    }
    return null
}

function App() {
    const pathname = window.location.pathname
    const currentRecipe = idOfRecipeWithSlug(pathname)

    if (pathname === '/') {
        return <RecipeListPage recipes={recipes} />
    } else if (currentRecipe != null) {
        return <RecipePage recipe={recipes[currentRecipe]} />
    } else {
        return <p>Hei</p>
    }
}

export default App
