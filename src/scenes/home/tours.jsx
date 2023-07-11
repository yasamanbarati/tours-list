/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import Card_Text from '../component/card/card_text/card_text'
import Tour_List from './component/tours_card/tour_list/tour_list'
import Loading from './component/loading/loading'
import Basic_Button from '../component/button/basic_button'

const titleStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  '&::before': {
    position: 'absolute',
    content: `''`,
    height: '4px',
    borderRadius: '10%',
    width: '60%',
    backgroundColor: 'burlywood',
    bottom: '-5px',
  },
}
const titleStyle2 = {
  margin: '2rem 0',
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'capitalize',
  lineHeight: '1.25',
}
const buttonStyle = {
  cursor: 'pointer',
  fontSize: '0.92rem',
  textTransform: 'capitalize',
}
const MainBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  background: '#ecf4ff',
  alignContent: 'center',
  alignItems: 'center',
  padding: '50px 0',
  minHeight: '100vh',
})
const LoadingBox = styled(Box)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ecf4ff',
})
export const Tours = () => {
  const tourList = useSelector(state => state.tours.toursList)
  const isLoading = useSelector(state => state.tours.isLoading)
  const [newTourList, setnewTourList] = useState([])

  useEffect(() => {
    setnewTourList(tourList)
  }, [tourList])

  const setDefaultData = () => {
    setnewTourList(tourList)
  }

  return (
    <Fragment>
      {!isLoading ? (
        <MainBox>
          {newTourList.length === 0 ? (
            <>
              <Card_Text
                text="No Tours Left"
                variant="h1"
                Size="2rem"
                weight="800"
                textAlign="center"
                color="gray"
                paddingLeft="0"
                textStyle={titleStyle2}
              />
              <Basic_Button
                variant="contained"
                color="info"
                component="button"
                text="Refresh"
                style={buttonStyle}
                BouttonEvent={setDefaultData}
              />
            </>
          ) : (
            <>
              <Card_Text
                text="Our Tours"
                variant="h1"
                Size="2rem"
                weight="800"
                textAlign="center"
                color="gray"
                paddingLeft="0"
                textStyle={titleStyle}
              />
              <Tour_List List={newTourList} />
            </>
          )}
        </MainBox>
      ) : (
        <LoadingBox>
          <h1>Loading</h1>
          <Loading
            type="bubbles"
            color="#000"
            height="60px"
            width="60px"
            delay="1"
          />
        </LoadingBox>
      )}
    </Fragment>
  )
}
