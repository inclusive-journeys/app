export const breakpointUpperLimit = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    small: 1680,
    large: 1920
}

export const colorPalette = {
    brightRed: '#d11',
    red: '#8C141E',
    black: '#0A1626',
    gray: '#b5b5b5',
    lightGray: '#e9e8e8',
    tan: '#D9D7BA',
    orange: '#BF622C',
    brown: '#73462C',
    lightGold: 'rgba(217, 215, 186, 0.32)',
    salmon: '#ecdddd',
    borderColor: '#dedede'
}

export const globals = {
    fonts: {
        script: '\'Shrikhand\', cursive',
        header: '\'Teko\', sans-serif',
        type: "'EB Garamond', serif"
    },
    style: {
        layoutScalingValue: .45,
        inputLabelShrinkRatio: .7,
        siteInnerWidth: 1570,
        contentWidth: 1320
    },
    colors: {
        linkColor: colorPalette.red,
        linkHoverColor: colorPalette.orange,
        inputLabelColor: colorPalette.black,
        menuPanelCloseButtonBackgroundColor: colorPalette.orange,
        transitionOverlayBackground: colorPalette.tan,
        buttonHoverColor: colorPalette.salmon,
        borderHoverColor: colorPalette.orange,
        borderColor: colorPalette.lightGray,
        errorColor: colorPalette.brightRed
    },
    extensions: [
        '.png',
        '.jpg',
        '.jpeg',
        '.svg',
        '.wav',
        '.mp3'
    ]
}

export const genericMobileContainerStyles = {
    mobile: {
        flexDirection: 'column',
        position: 'relative',
        minWidth: '100%',
        width: '100%',
        padding: '30px 25px 0 25px',
        boxSizing: 'border-box',
        minHeight: 400,
        zIndex: 0,
        borderRadius: 0
    }
}