import image from './assets/image.png';
import { TextBlock, ImageBlock, TitleBlock, ColumsBlock } from './classes/block';

const text = `
Відео і уроки по JavaScript тут: <a href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw" target="_blank">Minin</a>
`;

export const model = [
  new TitleBlock('Конструктор сайтів на чистому JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),

  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),

  new ColumsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Picture',
  }),
];
