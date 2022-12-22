import React from 'react'
import styled from 'styled-components'
import { RecipeStep } from './RecipeStep'
import { Heading2 } from './Typography'

type RecipeProps = {
    recipe: string[]
}

const StyledRecipe = styled.div`
    padding: 1rem;
    background: #ffffff;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem rgba(189, 195, 199, 0.2);
`

export const RecipeDescription = ({ recipe, ...props }: RecipeProps) => {
    return (
        <StyledRecipe {...props}>
            <Heading2>Slik gjør du</Heading2>
            {recipe.map((step, index) => (
                <RecipeStep key={index + '234'} stepNumber={index + 1}>
                    {step}
                </RecipeStep>
            ))}
        </StyledRecipe>
    )
}
