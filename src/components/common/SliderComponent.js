import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({defaultValue,min,max,amount,label,
  unit,step,onChange,value}) => {

  return (
 <Stack my={1.5}>
  <Stack gap={2}>
    <Typography variant="subtitle1">{label}</Typography>
    <Typography variant="h5">{unit}{amount}</Typography>
  </Stack>
   <Slider min={min} max={max} 
   defaultValue={defaultValue}
    aria-label="Default" valueLabelDisplay="auto"
    marks
     
    onChange={onChange}
    value={value}
    step={step}
    />

    <Stack direction="row" justifyContent="space-between">
      <Typography variant='caption' color='text.secondary'>{unit}{min}</Typography>
      <Typography variant='caption' color='text.secondary'>{unit}{max}</Typography>
    </Stack>

</Stack>
  )
}

export default SliderComponent
