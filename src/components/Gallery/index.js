import React from 'react';
import GallerySlide from '../GallerySlide';
import * as S from './styles';

const Gallery = () => {
    return(
        <S.GalleryWrapper>
            <GallerySlide/>
            <S.GalleryTitleWrapper>
                <S.Display1>Gallery</S.Display1>
                <S.Subtitle>Luxury</S.Subtitle>
            </S.GalleryTitleWrapper>
        </S.GalleryWrapper>
    )
}

export default Gallery