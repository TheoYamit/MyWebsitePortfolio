import {extendTheme} from '@chakra-ui/react';
import './font.css';

const theme = extendTheme({
    fonts: {
        heading: `'proximanova regular'`,
        body:  `'promixanova regular'`,
    },
    components: {
        Text: {
          baseStyle: {
            fontFamily: 'proximanova regular',
          },
        },
      },
});

export default theme;