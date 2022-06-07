import React from 'react';
import GallerySlide from '../GallerySlide';
import * as S from './styles';

const Gallery = () => {
    return(
        <S.GalleryWrapper>
            <GallerySlide/>
            <S.GalleryTitleWrapper>
                <S.Display1>Realizações</S.Display1>
                <S.Subtitle>Galeria</S.Subtitle>
            </S.GalleryTitleWrapper>
        </S.GalleryWrapper>
    )
}

export default Gallery