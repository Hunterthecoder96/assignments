import React from 'react';

const ThemeContext = React.createContext();

export default ThemeContext;

//function ThemeContextProvider(props) {
//   const [color, setColor] = useState('dark');
//   const toggleTheme = () => {
//     setColor((prevColor) => (prevColor === 'dark' ? 'light' : 'dark'));
//   };
//   return (
//     <ThemeContext
//       value={{
//         color: color,
//         toggleTheme: toggleTheme,
//       }}
//     ></ThemeContext>
//   );
// }

// export default { ThemeContext, ThemeContextProvider };
