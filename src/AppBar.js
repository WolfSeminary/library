import { Toolbar, Typography, Box, AppBar } from '@mui/material';
import SearchBooks from './SearchBooks';

export default function MainBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Library
                    </Typography>
                    <SearchBooks />
                </Toolbar>
            </AppBar>
        </Box>
    );
}