import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

function About() {
    return (
        <>

            <SectionTitle title="About Us" />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >

                <Typography paragraph>
                    TalentOrient offers a host of services to address the varied needs of organizations across sectors. We deliver immense value to our customers by helping them scale up faster or execute better.
                </Typography>
                {/* Add more details from the "ABOUT US" section in the PDF */}
            </Box>
        </>
    );
}

export default About;
