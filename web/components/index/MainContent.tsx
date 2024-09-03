import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import GenericImage from './GenericImage';
import StrawberryLinks from './StrawberryLinks';
import KirakiraEffect from './KirakiraEffect';

import { useAnimationWithHover } from '../../hooks/hooks_index'

import RunteqFestivalImage from '../../public/index/runteq_festival.png';
import FiftyFourImage from '../../public/index/54.png';
import IchigoTabetaiImage from '../../public/index/ichigo_tabetai.png';
import ReactSaikoImage from '../../public/index/react_saiko.png';
import IphoneImage from '../../public/index/iphone.png';

const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { controls, animationVariants } = useAnimationWithHover(isHovered);

    // 各段ごとのリンク情報を定義
    const links1 = [
      { href: "/members/kato", text: "kato" },
      { href: "/members/mick", text: "mick" },
      { href: "/members/nori", text: "nori" },
      { href: "/members/konisi", text: "konisi" },
    ];
  
    const links2 = [
      { href: "/members/knnts", text: "kana nuts"  },
      { href: "/members/mchan", text: "Mchan"  },
    ];
  
    const links3 = [
      { href: "/members/natsu", text: "natsu" },
      { href: "/members/rei", text: "rei" },
      { href: "/members/sima9z", text: "sima9z" },
      { href: "/members/hase", text: "hase" }
    ];
  
    const links4 = [
      { href: "/members/yu-ki", text: "yu-ki" },
      { href: "/members/shino", text: "shino" },
    ];

  return (
    <>
      <Box
        sx={{ 
          width: '100%', 
          height: 'auto', 
          margin: '50px 10px',
          padding: '50px 150px 200px 150px',
          boxSizing: 'border-box', 
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          border: {
            xs: '10px double #fff',  // 小さな画面用
            sm: '20px double #fff',  // 中くらいの画面用
            lg: '30px double #fff',  // 大きな画面用
          }
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={24}>
          <Grid item>
            <StrawberryLinks initialColor={'pink'} positions={[7, 29, 60, 82]} links={links1} setIsHovered={setIsHovered} />
          </Grid>

          <Grid item>
            <GenericImage
              src={RunteqFestivalImage}
              alt="runteq festival"
              centered={true}
              widthPercent={77}
            />
          </Grid>

          <Grid item>
            <StrawberryLinks positions={[24, 66]} initialColor={'red'} links={links2} setIsHovered={setIsHovered}/>

            <GenericImage
              src={FiftyFourImage}
              alt="fifty four"
              centered={true}
              widthPercent={13}  // 画像サイズを調整
            >
              <KirakiraEffect
                effects={[
                  { style: { position: 'absolute', top: '-5%', left: '-20%' }, scale: [0, 1.5, 0], delay: 0 },
                  { style: { position: 'absolute', top: '3%', left: '65%' }, scale: [0, 0.7, 0], delay: 0.3 },
                  { style: { position: 'absolute', top: '-5%', left: '85%' }, scale: [0, 1.1, 0], delay: 0.6 },
                  { style: { position: 'absolute', top: '75%', left: '-10%' }, scale: [0, 0.9, 0], delay: 0.9 }
                ]}
              />
            </GenericImage>
          </Grid>

          <Grid item>
            <GenericImage
              src={IchigoTabetaiImage}
              alt="ichigotabetai"
              centered={true}
              widthPercent={77}
            />
          </Grid>

          <Grid item>
            <StrawberryLinks positions={[7, 29, 60, 82]} initialColor={'white'} links={links3} setIsHovered={setIsHovered}/>
          </Grid>

          <Grid item>
            <GenericImage
              src={ReactSaikoImage}
              alt="reactsaiko"
              centered={true}
              widthPercent={62}
            />
          </Grid>

          <Grid item>
            <StrawberryLinks positions={[7, 29, 60, 82]} initialColor={'green'} links={links4} setIsHovered={setIsHovered}/>
          </Grid>
        </Grid>
      </Box>

      {isHovered && (
        <>
          <motion.div
            initial="init"
            animate={controls}
            variants={animationVariants}
            style={{
              width: '460px',
              height: 'auto',
              position: 'fixed',
              left: -70,
              bottom: 20,
            }}
          >
            <Image
              src={IphoneImage}
              alt={'IphoneImage'}
              className={'IphoneImage'}
              style={{
                width: '100%',  // 親の div の幅に合わせて画像の幅を100%に設定
                height: 'auto',
                objectFit: 'contain',  // 画像が親の div に収まるように調整
              }}
            />
          </motion.div>

          <motion.div
            initial="init"
            animate={controls}
            variants={animationVariants}
            style={{
              width: '460px',
              height: 'auto',
              position: 'fixed',
              right: -70,
              bottom: 20,
            }}
          >
            <Image
              src={IphoneImage}
              alt={'IphoneImage'}
              className={'IphoneImage'}
              style={{
                width: '100%',  // 親の div の幅に合わせて画像の幅を100%に設定
                height: 'auto',
                objectFit: 'contain',  // 画像が親の div に収まるように調整
              }}
            />
          </motion.div>
        </>
      )}
    </>
  );
};
  
  export default MainContent;