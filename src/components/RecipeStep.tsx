import React from 'react'
import styled from 'styled-components'

type RecipeStepProps = {
    children: string
    stepNumber: number
}

const StepContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledRecipeStep = styled.div`
    margin-bottom: 0;
    margin-top: 0.25rem;
`

const StepNumber = styled.span`
    padding: 0.125rem;
    margin-right: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    border: 3px solid #bdc3c7;
    font-weight: 700;
`

export const RecipeStep = ({ children, stepNumber, ...props }: RecipeStepProps) => {
    return (
        <StepContainer>
            <StepNumber>{stepNumber}</StepNumber>
            <StyledRecipeStep {...props}>{children}</StyledRecipeStep>
        </StepContainer>
    )
}
