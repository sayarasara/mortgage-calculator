import React from 'react'
import SliderComponent from './common/SliderComponent'




//const SliderSelect = ({ data, setData }) => {
  //const bank_limit = 10000;


const SliderSelect = ({ data, setData}) => {
const bank_limit = 10000;

  return (
    <div>
      <SliderComponent defaultValue={data.homeValue} 
      min={1000}
       max={bank_limit} step={100}
      amount={data.homeValue} 
      unit="$" 
      onChange={( e, value) =>{
           setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
      })
    }}
      label="Recent  Value .   .   .   .     .  .  .  . . . . . . . .  . . . .Peack as you want"
     value={data.homeValue}
     />


      <SliderComponent defaultValue={data.downPayment} 
      min={0}
       max={data.homeValue} step={100}
      amount={data.downPayment} unit="$" 
      onChange={(e, value) => 
     setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          })

      }
      label="Down Payment"
      value={data.downPayment}
      />

      <SliderComponent defaultValue={data.loanAmount}
       min={0} 
       max={data.homeValue} step={100}
      amount={data.loanAmount} unit="$"
      onChange={(e, value) =>
            setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          })
      }
      label="Loan Amount"
      value={data.loanAmount}
      />

      <SliderComponent
       defaultValue={data.interestRate} min={2}
        max={18} step={0.5}
      amount={data.interestRate} unit="%" 
      onChange={(e ,value) =>
           setData({
            ...data,
            interestRate: value.toFixed(0),
          })
      }
      label="Interest Rate"
      value={data.interestRate}
      />
    </div>
  )
}

export default SliderSelect
