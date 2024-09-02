import {extendTheme} from '@chakra-ui/react';
import './font.css';

const theme = extendTheme({
    fonts: {
        heading: `'proximanova regular', proximanova`,
        body:  `'promixanova regular'`
    }
});

export default theme;