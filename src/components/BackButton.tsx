import styled from 'styled-components'

const StyledBackButton = styled.a`
    display: flex;
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;

    &:hover {
        background: #bdc3c7;
    }
`

export const BackButton = ({ ...props }) => {
    return (
        <StyledBackButton href="/" {...props}>
            &#60;- Tilbake til oversikten
        </StyledBackButton>
    )
}
