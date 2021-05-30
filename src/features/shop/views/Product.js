import ShopWrapper       from 'features/shop/views/ShopWrapper'
import {
    productImageStyle,
    productImageWrapperStyle,
    productInfoWrapperStyle
}                        from 'features/shop/views/styles'
import {AnimatePresence} from 'framer-motion'
import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                        from 'react-redux'
import Div               from 'shared/Basic/Div'
import H2                from 'shared/Basic/H2'
import MotionDiv         from 'shared/Basic/MotionDiv'
import RichText          from 'shared/Basic/RichText'
import S3Img             from 'shared/Basic/S3Img'
import AddToCartButton   from 'shared/Controls/AddToCartButton'
import ContentWrapper    from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                        from 'shared/Layout/styles/animations'
import {getNameById}     from 'utils/helpers'
import {
    productCategoryStyle,
    productDescriptionStyle,
    productPriceStyle,
    productTitleStyle,
    productWrapperStyle
}                        from './styles'


const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.shop)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo, price, category} = product
    const {productCategories} = useSelector(state => state.shop)

    useEffect(() => {
        dispatch({type: 'shop/getProduct', payload: {slug: slug}})
        dispatch({type: 'shop/getRelatedProducts', payload: {slug: slug}})
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: name,
                description,
                image: photo,
                imageAlt: `${name} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photo])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <ShopWrapper>
                        <Div theme={productWrapperStyle}>
                            <H2 theme={productTitleStyle}>
                                {name}
                            </H2>
                            <MotionDiv theme={productImageWrapperStyle}>
                                <S3Img
                                    url={photo}
                                    alt={name}
                                    theme={productImageStyle}
                                />
                            </MotionDiv>
                            <Div theme={productInfoWrapperStyle}>
                                <Div theme={productCategoryStyle}>
                                    {getNameById(productCategories, category)}
                                </Div>
                                <Div theme={productPriceStyle}>
                                    <Div>{price} <span>USD</span></Div>
                                </Div>
                                <AddToCartButton product={product}/>
                            </Div>
                            <RichText
                                children={description}
                                theme={productDescriptionStyle}
                            />
                        </Div>
                    </ShopWrapper>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Product
