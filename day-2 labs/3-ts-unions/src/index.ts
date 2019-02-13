// Payment types can be 'cash', 'cheque' or 'card'
// Card types can be 'Master', 'Visa' or 'Amex'
type Cash = {
  type : 'cash'
}

type cardDetails = {
  type: string,
  number: string
}
type Card = {
  type : 'card',
  card: cardDetails
}

type Cheque = {
  type : 'cheque',
  chequeNumber : number
}

type DD = {
  type : 'DD',
  chequeNumber : number
}

type payType = Cash | Card | Cheque; // unions used to specify multiple types


export default (payment:payType) => {
  if(payment.type === 'cash') {
    return `Paid in cash`;
  } else if(payment.type === 'cheque') {
    return `Paid by cheque number: ${payment.chequeNumber}`;
  } else if(payment.type === 'card') {
    return `Paid by ${payment.card.type} card: ${payment.card.number}`;
  }

  // const n: never = payment;
};
