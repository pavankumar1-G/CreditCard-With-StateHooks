// Write your code here
import {useState} from 'react'

import {
  CreditCardContainer,
  CreditCardContent,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  CardNumber,
  NameHeading,
  CardName,
  PaymentMethodContainer,
  PaymentMethodCard,
  PaymentMethodHeding,
  CardInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CreditCardContent>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <HorizontalLine />
        <CardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <CardName>{cardName.toUpperCase()}</CardName>
        </CardContainer>
      </CreditCardContent>
      <PaymentMethodContainer>
        <PaymentMethodCard>
          <PaymentMethodHeding>Payment Method</PaymentMethodHeding>
          <CardInput
            type="text"
            onChange={onChangeCardNumber}
            placeholder="Card Number"
            value={cardNumber}
          />
          <CardInput
            type="text"
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
            value={cardName}
          />
        </PaymentMethodCard>
      </PaymentMethodContainer>
    </CreditCardContainer>
  )
}
export default CreditCard
