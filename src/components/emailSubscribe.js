import React from 'react';
import styled from 'styled-components'
import theme from '../../config/theme'

const EmailListForm = styled.form`
    display: flex;
    flex-direction: column;

    background: #f2f2f2;
    color: ${theme.colors.main.dark};

    font-family: -apple-system, Helvetica, Arial, sans-serif;
    padding: 2rem;
    width: 50%
`

const Header = styled.h2`
    margin-top: 0;
    margin-bottom: 1rem;
    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
`

const EmailInput = styled.input`
    color: ${theme.colors.main.dark};
    width: 100%;
    border: none;
`

const SubscribeButton = styled.button`
    display: inline-block;

    // border: none;
    background-image: none;
    background-color: ${theme.colors.secondary.dark};
    // color: white;

    letter-spacing: 1px;
    transition: all 0.1s linear;
    
    &: hover {
        cursor: pointer;
        background: darken(#DD0505, 15 %);
    }
`

export default class emailSubscribe extends React.Component {

    state = {
        email: '',
        setEmail: ''
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    handleEmailChange = event => {
        const { email } = this.state
        var target = event.currentTarget.value
        this.setState({
            email,
            target
        })
        // setEmail(event.currentTarget.value);
    };


    render() {
        return (
            <EmailListForm onSubmit={this.handleSubmit} >
                <Header>Subscribe to my email list!</Header>
                <Wrapper>
                    <EmailInput
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={this.handleEmailChange}
                    />
                    <SubscribeButton type="submit">Subscribe</SubscribeButton>
                </Wrapper>
            </EmailListForm>
        )
    }
};