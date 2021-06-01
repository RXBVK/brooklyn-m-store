import React, { useState } from "react";

export default function FinancingCalculator() {
  const [desiredVehiclePrice, setDesiredVehiclePrice] = useState(0);
  const [salesTax, setSalesTax] = useState(6.25);
  const [termInMonths, setTermInMonths] = useState(144);
  const [rateOrAPR, setRateOrAPR] = useState(7);
  const [downPayment, setDownPayment] = useState(0);

  let properVehiclePrice =
    downPayment > desiredVehiclePrice ? 0 : desiredVehiclePrice - downPayment;
  let afterTaxation =
    properVehiclePrice + (properVehiclePrice / 100) * salesTax;
  let afterAPR = afterTaxation + (afterTaxation / 100) * rateOrAPR;
  let monthlyPayment = afterAPR / termInMonths;

  return (
    <div className="financing__calculator">
      <h1>Financial Calculator</h1>
      <div className="financing__calculator-content">
        <div className="financing__calculator-content-form">
          <h3>Calculate Payment</h3>
          <label htmlFor="desiredVehiclePrice">Desired Vehicle Price</label>
          <input
            type="number"
            value={desiredVehiclePrice}
            id="desiredVehiclePrice"
            onChange={(e) => setDesiredVehiclePrice(e.target.value)}
          />
          <label htmlFor="salesTax">Sales Tax</label>
          <input
            type="number"
            value={salesTax}
            id="salesTax"
            onChange={(e) => setSalesTax(e.target.value)}
          />
          <label htmlFor="termInMonths">Term in Months</label>
          <input
            type="number"
            value={termInMonths}
            id="termInMonths"
            onChange={(e) => setTermInMonths(e.target.value)}
          />
          <label htmlFor="rateOrAPR">Rate / APR</label>
          <input
            type="number"
            value={rateOrAPR}
            id="rateOrAPR"
            onChange={(e) => setRateOrAPR(e.target.value)}
          />
          <label htmlFor="downPayment">Down Payment or Trade-In Value</label>
          <input
            type="number"
            value={downPayment}
            id="downPayment"
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
        <div className="financing__calculator-content-output">
          <h3>Estimated Monthly Payment</h3>
          <div className="financing__calculator-content-output-circle">
            <div>{`$${monthlyPayment.toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
