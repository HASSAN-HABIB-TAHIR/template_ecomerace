import React from 'react'
import { Box, Button, Typography, } from "@mui/material";
import russia from './images/Flag_of_Russia_(bordered).png'
import vitenam from './images/Flag_of_Vietnam.png'
import malaysia from './images/Flag-Malaysia.png'
import turkey from './images/Flag-map_of_Turkey.png'
import Usa from './images/Flag-United-States-of-America.png'
import italy from './images/italy_flag_1024x.png'
import japan from './images/japanflag.png'

function Country() {
    return (
        <>
            <Box sx={{ marginTop: "50px" }}>

                <Box sx={{ display: "flex", marginTop: "10px", marginBottom: "20px" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Suppliers by country or region </Typography>
                    <Box sx={{
                        background: 'grey',
                        color: 'lime',
                        borderColor: 'grey',
                        height: '6px',
                        width: '70px',
                        flex: 1,
                        marginTop: "20px",
                        marginLeft: "10px"
                    }}>

                    </Box>
                </Box>
                <Box
                    sx={{
                        marginBottom: "70px",
                        display: "flex",
                        alignitems: "center",
                        justifyContent: "space-around",
                        backgroundColor: "#2196F3",
                        padding: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        border: " 1px solid ",
                        fontSize: "30px",
                    }}>

                    <Button> <img src={japan} width="20%" /> <Typography>Japan</Typography></Button>
                    <Button> <img src={Usa} width="50%" /><Typography>USA</Typography></Button>
                    {/* <Button><img src={thailand} width="20%" /><Typography>Thailand</Typography></Button> */}
                    <Button><img src={turkey} width="20%" /><Typography>Turkey</Typography></Button>
                    <Button><img src={malaysia} width="50%" /><Typography>Malaysia</Typography></Button>
                    <Button><img src={vitenam} width="15%" /><Typography>Vitenam</Typography></Button>
                    <Button><img src={russia} width="13%" /><Typography>Russia</Typography></Button>

                    <Button><img src={italy} width="40%" /><Typography>Italy</Typography></Button>
                    {/* <Button><img src={korea} width="20%" /><Typography>South Korea</Typography></Button>     */}
                </Box>
            </Box>
        </>
    )
}

export default Country