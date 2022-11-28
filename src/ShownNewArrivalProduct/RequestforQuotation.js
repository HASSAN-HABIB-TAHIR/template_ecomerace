import React from 'react'
import { Box, Button, Container, Grid, Typography, } from "@mui/material";
import TextField from '@mui/material/TextField';
import meeting from './images/meeting.png'
import MenuItem from '@mui/material/MenuItem';


export function SelectTextFields() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="pieces/pieces"
                    value={currency}
                    onChange={handleChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </div>
        </Box>
    );
}
const currencies = [
    {
        value: ' pole/poles ',
        label: ' pole/poles ',
    },
    {
        value: 'Quart/Quarts',
        label: 'Quart/Quarts',
    },
    {
        value: 'Rod/Rods',
        label: 'Rod/Rods',
    },
    {
        value: 'Roll/Rolls',
        label: 'Roll/Rolls',
    },
    {
        value: 'SquareFoot',
        label: 'SquareFoot',
    },
    {
        value: 'SquareInches',
        label: 'SquareInches',
    },

];

function RequestforQuotation() {

    return (
        <>
            <Box>
                <Box sx={{ display: "flex", marginTop: "20px", marginLeft: "21px" }}>
                    <Box><Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Request for Quotation</Typography>  </Box>
                    <Box><Typography sx={{ fontSize: "15px", marginTop: "10px" }}> Get customized quotes quickly</Typography>  </Box>
                </Box>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>

                        <Grid item md={6} xs={12}>
                            <Box sx={{ background: `url(${meeting})`, marginTop: "20px" }}>
                                <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "30px", fontSize: "20px", marginLeft: "50px" }}> Global Sourcing marketplace </Typography>

                                <Box sx={{ display: "flex" }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}> 2433000+  </Typography>
                                        <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>RFQS </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}>22h  </Typography>
                                        <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Average Response Time  </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex" }}>
                                    <Box>
                                        <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}> 165000+  </Typography>
                                        <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Active Supplier </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "bold", color: "white", paddingTop: "40px", fontSize: "20px", marginLeft: "50px" }}>7454 </Typography>
                                        <Typography sx={{ color: "white", fontSize: "15px", marginLeft: "50px" }}>Industries </Typography>
                                    </Box>
                                </Box>
                                <Button variant="outlined" sx={{ borderRadius: "25px", width: "20%", color: "white", marginLeft: "40px", marginTop: "40px", marginBottom: "50px", borderColor: "white" }} >Learn More </Button>
                            </Box>

                        </Grid>

                        <Grid item md={6} xs={12}>
                            <Box sx={{ backgroundColor: "white", marginTop: "20px", border: "5px solid #DCDEE3" }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "30px", color: "#333333", paddingTop: "30px", marginLeft: "30px" }}>One request, multiple quotes</Typography>

                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { width: '49ch', marginLeft: "30px", marginTop: "40px" },
                                    }}>
                                    <TextField id="outlined-basic" placeholder='Enter Product Name ' variant="outlined" />
                                </Box>
                                <Box sx={{ display: "flex", marginLeft: "30px", marginTop: "40px", gap: "20px" }}>
                                    <Box>
                                        <TextField
                                            label="Quantities"
                                            type="number"
                                            id="outlined-size-normal"
                                            defaultValue="Normal"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box> <SelectTextFields /></Box>
                                </Box>
                                <Button variant="outlined"
                                    sx={{
                                        borderRadius: "25px",
                                        width: "40%", backgroundColor: "#FF6600",
                                        color: "black", marginLeft: "40px",
                                        marginTop: "40px", marginBottom: "17px",
                                        borderColor: "white"
                                    }} >
                                    Request for Quotation  </Button>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default RequestforQuotation 