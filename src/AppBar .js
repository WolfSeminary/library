import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBooks from './SearchBooks';

export default function MainBar({ serchTerm, setSearchTerm }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Library
                    </Typography>
                    <SearchBooks serchTerm={serchTerm} setSearchTerm={setSearchTerm}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}