import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";
import Outcome from "./components/Outcome";
import { useState } from "react";


function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });
  console.log(data);

  return (
    <div className="App">
      <Navbar />
<Container>
   <Grid container spacing={5}>
          <Grid item xs={12} md={6} >
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Outcome data={data} />
          </Grid>
        </Grid>
</Container>
    </div>
  );
}

export default App;
