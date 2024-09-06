import {extendTheme} from '@chakra-ui/react';
import './font.css';

const theme = extendTheme({
    fonts: {
        heading: `'proximanova regular', proximanova light`,
        body:  `'promixanova regular', proximanova light`,
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