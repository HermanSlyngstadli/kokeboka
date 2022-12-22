import React from 'react'
import styled from 'styled-components'
import { Recipe } from '../recipes'
import { GridContainer, GridItem } from '../components/Grid'
import { IngredientsList } from '../components/IngredientsList'
import { RecipeDescription } from '../components/RecipeDescription'
import { RecipeHeader } from '../components/RecipeHeader'

const StyledRecipePage = styled.div`
    margin-bottom: 3rem;
`

type RecipePageProps = {
    recipe: Recipe
}

export const RecipePage = ({ recipe, ...props }: RecipePageProps) => {
    return (
        <StyledRecipePage {...props}>
            <GridContainer>
                <GridItem large={'1 / 13'} small={'1 / 13'}>
                    <RecipeHeader title={recipe.name} />
                </GridItem>
                <GridItem large={'1 / 5'} small={'1 / 13'}>
                    <IngredientsList ingredients={recipe.ingredients} />
                </GridItem>
                <GridItem large={'5 / 13'} small={'1 / 13'}>
                    <RecipeDescription recipe={recipe.recipe} />
                </GridItem>
            </GridContainer>
        </StyledRecipePage>
    )
}
