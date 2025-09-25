import type { Lesson } from '../types/lessons';

// DVORAK keyboard layout lessons based on the typical progression
export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Home Row - Basic Position',
    description: 'Learn the home row keys: a, o, e, u, i, d, h, t, n, s',
    keys: ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's'],
    exercises: [
      'aaa ooo eee uuu iii ddd hhh ttt nnn sss',
      'ao oe eu ui id dh ht tn ns sa',
      'aei oun dht nsa eou iad',
      'the and has it',
      'he has the hat',
      'it is his hat',
      'she has a hat'
    ]
  },
  {
    id: 2,
    title: 'Adding Common Letters',
    description: 'Add frequent letters: r, l, y, k',
    keys: ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', 'r', 'l', 'y', 'k'],
    exercises: [
      'rrr lll yyy kkk',
      'or al ye ku ir',
      'her you all key',
      'they are here',
      'the red sun is hot',
      'you are likely to hear',
      'the yellow house on the hill'
    ]
  },
  {
    id: 3,
    title: 'Upper Row Keys',
    description: 'Practice upper row keys: q, j, k, x',
    keys: ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', 'r', 'l', 'y', 'k', 'q', 'j', 'x'],
    exercises: [
      'qqq jjj xxx',
      'qu je xi ox',
      'just quiet extra',
      'the quiet house',
      'just extra time',
      'he asked the quiet question'
    ]
  },
  {
    id: 4,
    title: 'Lower Row Practice',
    description: 'Learn bottom row keys: semicolon, z, w, v, p, comma, period, forward slash',
    keys: ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', 'r', 'l', 'y', 'k', 'q', 'j', 'x', ';', 'z', 'w', 'v', 'p', ',', '.', '/'],
    exercises: [
      'zzz www vvv ppp ;;; ,,, ... ///',
      'we; vp, z./ pwv',
      'we will provide',
      'the power of words',
      'we will work with pride',
      'provide the proper answer'
    ]
  },
  {
    id: 5,
    title: 'Complete Alphabet',
    description: 'Practice with remaining letters: b, f, g, c, m',
    keys: ['a', 'o', 'e', 'u', 'i', 'd', 'h', 't', 'n', 's', 'r', 'l', 'y', 'k', 'q', 'j', 'x', ';', 'z', 'w', 'v', 'p', ',', '.', '/', 'b', 'f', 'g', 'c', 'm'],
    exercises: [
      'bbb fff ggg ccc mmm',
      'big fun can make',
      'the big family',
      'make good coffee',
      'bring fresh food',
      'the magic of practice makes perfect'
    ]
  },
  {
    id: 6,
    title: 'Numbers and Symbols',
    description: 'Practice numbers and common symbols',
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%'],
    exercises: [
      '111 222 333 444 555 666 777 888 999 000',
      '1st 2nd 3rd 4th 5th',
      'I have 5 cats and 3 dogs',
      'The price is $25.99',
      'Call me at 555-1234'
    ]
  },
  {
    id: 7,
    title: 'Capitalization Practice',
    description: 'Practice using capital letters and proper punctuation',
    keys: [],
    exercises: [
      'The Quick Brown Fox',
      'John Smith lives in New York',
      'Today is Monday, January 1st',
      'Please send the report to Mr. Johnson',
      'The United States of America'
    ]
  },
  {
    id: 8,
    title: 'Common Words',
    description: 'Practice typing common English words',
    keys: [],
    exercises: [
      'the and that have for not you all with',
      'this but his they from she her been than',
      'what more time very when much know just',
      'first good make where most people work',
      'through would like also back other after'
    ]
  }
];