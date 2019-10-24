import React from 'react';
import styled from 'styled-components'
import theme from '../../config/theme'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const EmailListForm = styled.form`
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    color: ${theme.colors.main.dark};
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
    background-color: ${theme.colors.secondary.dark};
    transition: all 0.1s linear;    
    &: hover {
        cursor: pointer;
    }
`

export default class emailSubscribe extends React.Component {

    state = {
        email: ''
    };

    _handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = this.state
        const result = await addToMailchimp(email)
        
        if(result.result === 'success'){
            var subscribeButton = document.querySelector("#emailSubscribe")
            subscribeButton.style.backgroundColor = '#03fc4e'
        }
      }

    _handleEmailChange = event => {
        var email = event.currentTarget.value
        this.setState({
            email
        })
    };

    render() {
        return (
            <EmailListForm onSubmit={(e)=>{this._handleSubmit(e)}}>
                <Header>Subscribe to my email list!</Header>
                <Wrapper>
                    <EmailInput
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={this._handleEmailChange}
                    />
                    <SubscribeButton id="emailSubscribe" type="submit">Subscribe</SubscribeButton>
                </Wrapper>
            </EmailListForm>
        )
    }
};