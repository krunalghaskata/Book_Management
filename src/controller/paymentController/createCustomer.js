const CONFIG = require('../../config/config')
const stripe = require('stripe')(CONFIG.PAYMENT.PAYMENT_KEY);
// const Payment = require('../../model/paymentModel');



//create customer

const createCustomer = async (req, res,) => {
  try {
    const customer = await stripe.customers.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).send(customer);

  } catch (error) {

    res.status(500).json({ message: error })
  }
};

// add card 

const addNewCard = async (req, res) => {
  const {
    cardNumber,
    cardExpMonth,
    cardExpYear,
    cardCVC,
    cardName,
    country,
    postal_code,
  } = req.body;

  if (!cardNumber || !cardExpMonth || !cardExpYear || !cardCVC) {
    return res.status(400).send({
      Error: "Please Provide All Necessary Details to save the card",
    });
  }
  try {
    const cardToken = await stripe.tokens.create({
      card: {
        name: cardName,
        number: cardNumber,
        exp_month: cardExpMonth,
        exp_year: cardExpYear,
        cvc: cardCVC,
        address_country: country,
        address_zip: postal_code,
      },
      // customer: customer.stripe_id,
      // stripe_account: StripeAccountId,
    });

    const card = await stripe.customers.createSource(customerId, {
      source: `${cardToken.id}`,
    });

    return res.status(200).send({
      card: card.id,
    });
  } catch (error) {
    return res.status(400).send({
      Error: error.message,
    });
  }
};


// create charge

const createcharge = async (req, res) => {
  try {

    const createCharge = await stripe.charge.create({
      receiptEmail: req.body.email,
      amount: 50 * 100,
      currency: "INR",
      card: req.body.cardId,
      payment_method: 'pm_card_visa',
      customer: req.body.customerId
    })
    return res.status(200).json({ createCharge })
  } catch (error) {
    return res.status(505).json({ message: error })
  }
}


module.exports = {
  createCustomer,
  addNewCard,
  createcharge,
}
