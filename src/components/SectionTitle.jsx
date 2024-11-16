import React from 'react';
import { Box, Typography } from '@mui/material';

function SectionTitle({ title }) {
    return (
        <Box

            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
        </Box>
    );
}

export default SectionTitle;
