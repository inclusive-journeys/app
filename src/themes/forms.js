/**
 *
 *     FORMS & FIELDS
 *
 */
import {
    absolute,
    borderBox,
    inherit,
    flex,
    inlineBlock,
    none,
    relative,
    sv,
    transparent,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'


export const defaultFormStyle = {
    padding: 50,
    backgroundColor: '#f7f7f7',
    border: '1px solid #000',
    boxShadow: 'inset 3px -1px 8px 0px #e0e0e0'
}

export const defaultFieldsetStyle = {
    position: relative,
    padding: 0,
    margin: 0,
    border: 0,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border-width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms'
}

export const defaultFieldStyle = {
    display: inlineBlock,
    position: relative,
    border: `1px solid ${globals.colors.borderColor}`,
    height: 50,
    width: '100%',
    padding: `0 ${sv(25)}`,
    marginBottom: 30,
    margin: 0,
    font: globals.fonts.heading,
    fontSize: 15,
    fontWeight: 600,
    textOverflow: 'ellipsis',
    backgroundColor: white,
    color: globals.colors.black,
    boxSizing: borderBox,
    webkitAppearance: none,
    letterSpacing: none,
    zIndex: 1,
    borderRadius: 10,
    placeholder: {
        color: transparent,
        textTransform: none,
    },
    focus: {
        outline: 'none'
    },
    icon: {
        color: globals.colors.black,
        position: absolute,
        top: 0,
        right: 20,
        height: '100%',
        marginRight: 0,

    },
    fieldOuter: {
        position: relative
    }
}


export const defaultInputLabelStyle = {
    color: globals.colors.gray,
    position: absolute,
    left: 25,
    transform: 'translate(0px, 46%) scale(1)',
    zIndex: 1,
    border: 0,
    weight: 300,
    transition: 'color 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'transform 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    transformOrigin: 'top left',
    pointerEvents: none,
    size: 18,
}

export const defaultFocusedInputLabelStyle = {
    transform: `translate(0, 5%) scale(${globals.style.inputLabelShrinkRatio})`,
    color: globals.colors.orange,
}


export const defaultLegendStyle = {
    marginLeft: 17,
    padding: 0,
    transition: 'width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    ie: {
        position: absolute,
        height: 20,
        top: -11,
        zIndex: 0,
        backgroundColor: '#fff'
    }
}

export const defaultCKEditorStyle = {
    minHeight: 300,
    child: [
        {
            selector: '.ck.ck-editor',
            font: globals.fonts.typeFont,
            height: '100%',
            minHeight: inherit,
            child: {
                selector: '.ck-editor__main',
                minHeight: inherit,
                child: {
                    selector: '.ck-editor__editable',
                    minHeight: inherit,
                }
            }
        }
    ]
}

export const defaultFieldHeadingStyle = {
    margin: `0 0 ${sv(5)} 0`
}


export const defaultNewFormStyle = {
    heading: {
        font: globals.fonts.fancyFont,
        size: [38, .7, 38],
        marginBottom: [20, .7, 20]

    },
    inner: {
        display: flex,
        flexWrap: 'wrap'
        // display: '-ms-grid; display: grid',
        // gridTemplateColumns: '30% 65%',
        // columnGap: '5%'
    },
    innerLeft: {
        width: [400, .7, '100%']
    },
    innerRight: {
        width: [830, .7, '100%']
    },
    topSectionFieldWrapper: {
        flexGrow: 1
    },
    imageSection: {
        display: flex,
        marginBottom: 40,
        width: [300, .7, '100%'],
        child: [
            {
                selector: '> div',
                flexGrow: 1
            }
        ]
    },
    cropImage: {
        width: '100%'
    },
    button: {
        width: '100%'
    }
}


