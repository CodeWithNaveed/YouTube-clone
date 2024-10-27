import React from 'react'
import styled from 'styled-components'

const SignIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <SubTitle>To continue to YouTube-clone</SubTitle>
                <Input placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button>SIGN IN</Button>
                
                <Title>OR</Title>
                <Input placeholder="Username" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button>SIGN UP</Button>
            </Wrapper>

            <More>
                English (USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px); /* Fixed the typo here */
    color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
    width: 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
    font-size: 15px;
    font-weight: 300;
    color: ${({ theme }) => theme.textSoft};
`;

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
    font-weight: 500;
    cursor: pointer;
    width: 100%;
`;

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
    margin-left: 50px;
    display: flex;
    gap: 20px;
`;

const Link = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
