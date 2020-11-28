import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    absolute,
    borderBox,
    center,
    column,
    fixed,
    flex,
    pointer,
    white
}                from '../../utils/themer'

export const headerMenuPanelWrapperStyle = {
    position: absolute,
    height: 20,
    width: 20,
    zIndex: -1
    // zIndex: 25
}
export const headerMenuPanelStyle = {
    display: flex,
    position: fixed,
    flexDirection: column,
    font: globals.fonts.sans,
    height: '100vh',
    width: [940, .5, '100vw'],
    maxWidth: [940, .5, '100vw'],
    top: 0,
    right: 0,
    paddingLeft: [120, globals.style.layoutScalingValue],
    paddingRight: [60, globals.style.layoutScalingValue],
    backgroundColor: white,
    // borderLeft: `1px solid #dadce0`,
    boxSizing: borderBox,
    zIndex: 22,
    background: colorPalette.gray,
    heading: {
        font: globals.fonts.sans,
        size: [72, .5],
        marginTop: 0,
        marginBottom: [45, .7],
        lineHeight: 66,
        letterSpacing: -1,
        weight: 800,
        //  color: globals.colors.headingColor
    },
    closeButton: {
        position: absolute,
        display: flex,
        alignItems: center,
        justifyContent: center,
        top: 0,
        right: 0,
        height: [80, .7],
        width: [80, .7],
        backgroundColor: globals.colors.menuPanelCloseButtonBackgroundColor,
        //  backgroundColor: colorPalette.offBlue,
        transition: 'background-color 250ms ease',
        hover: {
            // backgroundColor: colorPalette.lightBlue,
            cursor: pointer
        }
    },
    closeButtonIcon: {
        color: white,
        size: 30
    }
}
export const menuPanelStyle = {
    paddingTop: [150, .7, 50],
    height: '100%',
    width: '100%'
}
export const menuPanelHeaderStyle = {
    font: globals.fonts.fancy,
    size: [48, .6, 24],
    marginBottom: [30, .6, 30]
}

export const menuToggleStyle = {
    hover: {
        cursor: pointer
    }
}