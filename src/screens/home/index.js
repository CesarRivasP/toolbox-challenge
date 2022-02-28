import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { View, ScrollView, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import SafeAreaFrame from '../../components/safeAreaFrame';
import useInfoModal from '../../hooks/useInfoModal';
import AbsoluteLoader from '../../components/absoluteLoader';
import CarouselItem from './carouselItem';
import CarouselTitle from './carouselTitle';
import InfoModal from '../../components/infoModal';
import useGlobalContext from '../../hooks/useGlobalContext';
import useFetch from '../../hooks/useFetch';
import * as ApiTypes from '../../config/apiTypes';
import * as ActionTypes from '../../state/global/types';
import { GENERAL_MODAL_TITLE, VIDEO_NOT_AVALIABLE_MESSAGE } from '../../utils/constants/errorMessages';
import { ERROR_CODE, ERROR_CODE_STATUS, ERROR_CODE_MESSAGE } from '../../utils/constants/errorCodes';
import styles from './styles';

function Home({ navigation }) {
  const { globalState, globalDispatch } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);
  const userTokenRef = useRef(globalState?.token || '');
  const authorizationTypeRef = useRef(globalState?.authorizationType || '');
  const isRefreshingRef = useRef(false);

  const { data, error, loading, handleFetchData } = useFetch({
    request: ApiTypes.GET_DATA_LIST,
    body: {
      token: userTokenRef.current,
      authorizationType: authorizationTypeRef.current,
    },
    onMountFetch: true,
  });

  const { infoModal, handleOpenModal, handleCloseModal } = useInfoModal({
    visible: false,
    title: null,
    description: null,
  });

  const handleDisplayVideoPlayer = (videoURI) => {
    if (videoURI) {
      navigation.navigate('VideoPlayer', { videoURI });
    } else {
      handleOpenModal({
        visible: true,
        title: GENERAL_MODAL_TITLE,
        description: VIDEO_NOT_AVALIABLE_MESSAGE,
      });
    }
  };

  const handleOnRefresh = useCallback(() => {
    isRefreshingRef.current = true;
    handleFetchData();
    setRefreshing(true);
  }, [handleFetchData]);

  useEffect(() => {
    if (error){
      if (refreshing) {
        isRefreshingRef.current = false;
        setRefreshing(false);
      }
      if (ERROR_CODE_STATUS[error?.response?.data?.code] === ERROR_CODE.UNAUTHORIZED) {
        globalDispatch({ type: ActionTypes.SESSION_EXPIRED });
      } else {
        handleOpenModal({
          visible: true,
          title: GENERAL_MODAL_TITLE,
          description: ERROR_CODE_MESSAGE[ERROR_CODE.SERVER_ERROR],
        });
      }
    } else if (data && refreshing) {
      isRefreshingRef.current = false;
      setRefreshing(false);
    }
  }, [error, data, refreshing]);

  const carouselList = useMemo(() => {
    let listData = {
      carouselThumbTitle: null,
      carouselPosterTitle: null,
      thumbItems: [],
      posterItems: [],
    };
    if (data) {
      const filterThumbList = data.filter((thumbListData) => thumbListData?.type === 'thumb');
      const filterPosterList = data.filter((posterListData) => posterListData?.type === 'poster');
      if (filterThumbList.length > 0 && filterThumbList[0].items?.length > 0) {
        listData.carouselThumbTitle = filterThumbList[0].title;
        listData.thumbItems = [...filterThumbList[0]?.items];
      }
      if (filterPosterList.length > 0 && filterPosterList[0].items?.length > 0) {
        listData.carouselPosterTitle = filterPosterList[0].title;
        listData.posterItems = [...filterPosterList[0]?.items];
      }
    }
    return listData;
  }, [data]);

  const keyThumbCarouselExtractor = useCallback((item, index) => `${index.toString()}-thumbCarousel`, []);

  const keyPosterCarouselExtractor = useCallback((item, index) => `${index.toString()}-posterCarousel`, []);

  const handleRenderPosterList = ({ item, index }) => {
    return (
      <CarouselItem
        id={`posterList-${index}`}
        title={item.title}
        imageUri={item?.imageUrl}
        containerStyle={styles.posterItemContainer}
        imageStyle={styles.posterImage}
        titleStyle={styles.posterTitleText}
        handlePress={() => handleDisplayVideoPlayer(item?.videoUrl)}
      />
    );
  };

  const handleRenderThumbList = ({ item, index }) => {
    return (
      <CarouselItem
        id={`thumbList-${index}`}
        title={item.title}
        imageUri={item?.imageUrl}
        containerStyle={styles.thumbCarouselContainer}
        imageStyle={styles.thumbImage}
        titleStyle={styles.thumbTitleText}
        handlePress={() => handleDisplayVideoPlayer(item?.videoUrl)}
      />
    );
  };

  return (
    <SafeAreaFrame
      title='HomeScreen'
      completeScreen={false}
      headerStyle={styles.safeAreaHeader}
      completeStyle={styles.safeAreaBottom}
    >
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleOnRefresh}
            />
          }
        >
          <CarouselTitle title={carouselList?.carouselThumbTitle} />
          <FlatList
            horizontal
            key={'ThumbCarousel'}
            contentContainerStyle={styles.thumListContainer}
            keyExtractor={keyThumbCarouselExtractor}
            data={carouselList?.thumbItems}
            renderItem={handleRenderThumbList}
          />
          <CarouselTitle title={carouselList?.carouselPosterTitle} />
          <FlatList
            horizontal
            key={'PosterCarousel'}
            contentContainerStyle={styles.posterListContainer}
            keyExtractor={keyPosterCarouselExtractor}
            data={carouselList?.posterItems}
            renderItem={handleRenderPosterList}
          />
        </ScrollView>
        <InfoModal
          showCloseButton
          onClose={handleCloseModal}
          visible={infoModal.visible}
          title={infoModal.title}
          description={infoModal.description}
        />
        <AbsoluteLoader visible={(isRefreshingRef.current !== true && loading)} />
      </View>
    </SafeAreaFrame>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
