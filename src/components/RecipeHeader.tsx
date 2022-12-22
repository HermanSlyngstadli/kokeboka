import React from 'react'
import styled from 'styled-components'
import { BackButton } from './BackButton'
import { Heading1 } from './Typography'

type RecipeHeaderTypes = {
    children?: JSX.Element | JSX.Element[]
    title: string
}

const StyledHeader = styled.div`
    margin-top: 1rem;
`

export const RecipeHeader = ({ children, title, ...props }: RecipeHeaderTypes) => {
    return (
        <StyledHeader {...props}>
            <BackButton />
            <Heading1>{title}</Heading1>
            {children}
        </StyledHeader>
    )
}
