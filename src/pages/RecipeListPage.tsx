import React from 'react'
import styled from 'styled-components'
import { Recipe } from '../recipes'
import { GridContainer, GridItem } from '../components/Grid'
import { Heading1 } from '../components/Typography'

const StyledRecipePage = styled.div`
    margin-bottom: 3rem;
`

type RecipePageProps = {
    recipes: Recipe[]
}

const StyledLink = styled.a`
    display: block;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    background: #ffffff;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem rgba(189, 195, 199, 0.2);

    &:hover {
        background: #34495e;
        color: #ecf0f1;
    }
`

export const RecipeListPage = ({ recipes, ...props }: RecipePageProps) => {
    return (
        <StyledRecipePage {...props}>
            <GridContainer>
                <GridItem large={'3 / 9'} small={'1 / 13'}>
                    <Heading1>🔥 Kokeboka 👨‍🍳</Heading1>
                </GridItem>
                <GridItem large={'3 / 9'} small={'1 / 13'}>
                    {recipes.map((recipe, index) => {
                        return (
                            <StyledLink key={index + '231'} href={recipe.slug}>
                                {recipe.name}
                            </StyledLink>
                        )
                    })}
                </GridItem>
            </GridContainer>
        </StyledRecipePage>
    )
}
