// faz a troca do tema de acordo com estado
const themeSwitcher = (theme) => {
  if (theme === 'dark') {
    // dark theme
    return {
      primaryColor: '135, 86, 112',
      secondaryColor: '76, 94, 104',
      backgroundColor: '45, 45, 45',
      textColor: '255, 255, 255',
      brownColor: '240, 236, 227',
      fullDarkColor: '0, 0, 0',
      whiteColor: '62, 65, 69'
    }
  } else {
    // light theme
    return {
      primaryColor: '90, 111, 122',
      secondaryColor: '199, 177, 152',
      backgroundColor: '255, 255, 255',
      textColor: '48, 51, 57',
      brownColor: '240, 236, 227',
      fullDarkColor: '0, 0, 0',
      whiteColor: '255, 255, 255'
    }
  }
}

// exporta o objeto cores
export const colors = themeSwitcher(modeState);