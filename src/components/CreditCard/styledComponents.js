// Style your elements here
import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CreditCardContent = styled.div`
  background-color: #3b4b69;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 50vw;
  }
`
export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const HorizontalLine = styled.hr`
  width: 100px;
  border: 1px solid #ffd773;
  margin-top: 5px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 220px;
    margin-bottom: 300px;
  }
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 280px;
  height: 200px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 230px;
    padding-bottom: 10px;
  }
`
export const CardNumber = styled.p`
  font-size: 20px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NameHeading = styled.p`
  font-size: 10px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const CardName = styled.p`
  font-size: 15px;
  color: #ffffff;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const PaymentMethodContainer = styled.div`
  background-color: #ffffff;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 50vw;
  }
`
export const PaymentMethodCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #d3d9e0;
  border-radius: 10px;
  height: 200px;
  width: 290px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 250px;
  }
`
export const PaymentMethodHeding = styled.h1`
  font-size: 20px;
  color: #475569;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const CardInput = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #c3cad9;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 48px;
    width: 300px;
  }
`
