import {extendTheme} from '@chakra-ui/react';
import './font.css';

const theme = extendTheme({
    fonts: {
        heading: `'proximanova regular'`,
        body:  `'promixanova regular'`
    }
});

export default theme;