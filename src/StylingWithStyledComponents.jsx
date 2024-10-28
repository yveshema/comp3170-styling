import styled, { css } from 'styled-components';

export default function Example() {
    return (
        <>
            <Buttons>
                <DefaultButton>Default</DefaultButton>
                <PrimaryButton>Primary</PrimaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <OutlineButton>Outline</OutlineButton>
                <OutlinePrimaryButton>Outline primary</OutlinePrimaryButton>
                <OutlineSecondaryButton>Outline secondary</OutlineSecondaryButton>
                <button>Unstyled</button>
            </Buttons>
            
        </>
    );
}

// Styled components
const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const DefaultButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #eee;
    color: #555;
    border: none;
`;

const PrimaryButton = styled(DefaultButton)`
    background-color: green;
    border-color: green;
    color: #fff;
`;

const SecondaryButton = styled(DefaultButton)`
    background-color: purple;
    border-color: purple;
    color: #fff;
`;

const outlineStyles = css`
    border: 1px solid;
    background-color: transparent;
`;

const OutlineButton = styled(DefaultButton)`
    ${outlineStyles}
`;

const OutlinePrimaryButton = styled(PrimaryButton)`
    ${outlineStyles}
    color: green;
`;

const OutlineSecondaryButton = styled(SecondaryButton)`
    ${outlineStyles}
    color: purple;
`;
   