import { Box, Button, Skeleton, SvgIcon, Theme, Typography } from '@mui/material'
import Table from "./components/Table";
import { makeStyles } from './config/theme/makeStyles'
import React from "react";

export const PoC = () => {

    const useStyles = makeStyles()((theme: Theme) => ({
      header: {
        paddingTop: '48px',
        paddingBottom: '30px',
        display:'flex',
        alignItems: 'center'
      },
      buttons: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-end',
        '@media(max-width: 1150px)': {
          display: 'none'
        },
        marginBottom: '5px'
      },
      table: {
        width: '90%',
      },
      button: {
        height: '35px',
        marginTop: 'unset',
        textTransform: 'unset',
        fontSize: '14px',
        backgroundColor: '#E20074',
        color:'white',
        '&:hover, &:active': {
          border: '1px solid #E20074',
          marginTop: 'unset',
          backgroundColor: '#E20074',
        }
      },
      secondButton: {
        height: '35px',
        marginTop: 'unset',
        textTransform: 'unset',
        fontSize: '14px',
        color: '#E20074',
        border: '1px solid #E20074',
        '&:hover, &:active': {
          border: '1px solid #E20074',
        }
      },
      thirdButton: {
        height: '35px',
        marginTop: 'unset',
        textTransform: 'unset',
        fontSize: '14px',
        border: `1px solid #191919`,
        color: '#191919',
        '&:hover, &:active, &:focus': {
          border: '1px solid #191919',
          color: '#191919'
        }
      },
      searchField: {
        boxSizing: 'border-box',
        border: 'unset',
        width: '100%',
        outline: '1px solid #B2B2B2',
        color: '#191919',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: '6px',
        height: '33px',
        paddingLeft: '45px',
        paddingRight: '45px',
        marginRight: '155px',
        transition: '0.2s',
        fontSize:'14px',
        '&:hover': {
          backgroundColor: '#f2f2f2'
        },
        '&:focus, &:active': {
          outline: '2px solid #E20074',
          boxShadow: '0px 4px 15px rgb(226 0 116 / 18%)'
        },
      },
      searchBox: {
        position: 'relative',
        right:'16px',
      },
      searchIcon: {
        position: 'absolute',
        top: '7.5px',
        left: '10px'
      },
      logo: {
        marginLeft: '10px',
        
      }
    }))
    
    const { classes, cx } = useStyles()

  return (
    <Box>
      <Box className={classes.header}>
        <Typography variant="h4" fontWeight={800} mt={0}>
          Partnerportal
        </Typography>
        <Box className={classes.logo}>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15692_88405)">
                <path d="M0 0H51V51H0V0Z" fill="transparent" />
                <path
                    d="M33.5116 31.3277H40.7974V24.042H37.1609H33.5245V31.3277H33.5116ZM40.7974 7.28613V19.6731H38.6129V19.3133C38.6129 13.4796 35.3363 9.8432 29.1428 9.8432H28.783V36.0692C28.783 39.7056 30.235 41.1705 33.8843 41.1705H34.9765V43.7147H16.0362V41.1705H17.1284C20.7649 41.1705 22.2297 39.7185 22.2297 36.0692V9.83035H21.8699C15.6764 9.83035 12.3998 13.4668 12.3998 19.3005V19.6603H10.2154V7.28613H40.7974ZM17.4882 31.3277H10.2025V24.042H13.8389H17.4754V31.3277H17.4882Z"
                    fill="#E20074" />
            </g>
            <defs>
                <clipPath id="clip0_15692_88405">
                    <rect width="51" height="51" fill="currentColor" transform="matrix(-1 0 0 1 51 0)" />
                </clipPath>
            </defs>
          </svg>
        </Box>
      </Box>
      <Box className={classes.buttons}>
      <Box className={classes.searchBox}>
        <Box  className={classes.searchIcon}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.664 17.8454L14.6973 12.8771C15.6602 11.5589 16.2684 9.88593 16.2684 8.11153C16.2684 3.65019 12.6194 0 8.15954 0C3.69967 0 0 3.65019 0 8.11153C0 12.5729 3.64899 16.2231 8.10886 16.2231C9.88268 16.2231 11.5551 15.6654 12.8728 14.6515L17.8395 19.6198C18.3463 20.1267 19.1572 20.1267 19.6133 19.6198C20.1201 19.1635 20.1201 18.3523 19.664 17.8454ZM1.52041 8.11153C1.52041 4.46134 4.45987 1.52091 8.10886 1.52091C11.7579 1.52091 14.6973 4.46134 14.6973 8.11153C14.6973 11.7617 11.7579 14.7022 8.10886 14.7022C4.45987 14.7022 1.52041 11.7617 1.52041 8.11153Z" fill="currentColor"/>
          </svg>
        </Box>
        <input
          type="text"
          className={classes.searchField}
          placeholder={"Nach ID, Vorname, Name oder E-Mail suchen..."}
        />
      </Box>
        <Button
          className={classes.button}
          style={{ marginRight: '16px' }}
          disableRipple={false}
          startIcon={
            <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4171 6.37516H7.62541V1.5835C7.62541 1.2385 7.34541 0.958496 7.00041 0.958496C6.65541 0.958496 6.37541 1.2385 6.37541 1.5835V6.37516H1.58374C1.23874 6.37516 0.95874 6.65516 0.95874 7.00016C0.95874 7.34516 1.23874 7.62516 1.58374 7.62516H6.37541V12.4168C6.37541 12.7618 6.65541 13.0418 7.00041 13.0418C7.34541 13.0418 7.62541 12.7618 7.62541 12.4168V7.62516H12.4171C12.7621 7.62516 13.0421 7.34516 13.0421 7.00016C13.0421 6.65516 12.7621 6.37516 12.4171 6.37516Z" fill="currentColor"/>
            </svg>
          }
        >
          Nutzer anlegen
        </Button>
        <Button
          className={classes.secondButton}
          variant="outlined"
          style={{ marginRight: '16px' }}
          startIcon={
            <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4171 6.37516H7.62541V1.5835C7.62541 1.2385 7.34541 0.958496 7.00041 0.958496C6.65541 0.958496 6.37541 1.2385 6.37541 1.5835V6.37516H1.58374C1.23874 6.37516 0.95874 6.65516 0.95874 7.00016C0.95874 7.34516 1.23874 7.62516 1.58374 7.62516H6.37541V12.4168C6.37541 12.7618 6.65541 13.0418 7.00041 13.0418C7.34541 13.0418 7.62541 12.7618 7.62541 12.4168V7.62516H12.4171C12.7621 7.62516 13.0421 7.34516 13.0421 7.00016C13.0421 6.65516 12.7621 6.37516 12.4171 6.37516Z" fill="currentColor"/>
            </svg>
          }
        >
          Liste hochladen
        </Button>
        <Button
          className={classes.thirdButton}
          variant="outlined"
          style={{ marginRight: '16px' }}
          startIcon={
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666687 2.07496C0.666687 1.29709 1.29606 0.666504 2.07243 0.666504H8.03366C8.36639 0.666504 8.63612 0.936756 8.63612 1.27013C8.63612 1.6035 8.36639 1.87375 8.03366 1.87375H2.07243C1.96152 1.87375 1.87161 1.96384 1.87161 2.07496V15.9247C1.87161 16.0358 1.96152 16.1259 2.07243 16.1259H15.9276C16.0385 16.1259 16.1284 16.0358 16.1284 15.9247V9.96605C16.1284 9.63268 16.3982 9.36243 16.7309 9.36243C17.0636 9.36243 17.3334 9.63268 17.3334 9.96605V15.9247C17.3334 16.7026 16.704 17.3332 15.9276 17.3332H2.07243C1.29606 17.3332 0.666687 16.7026 0.666687 15.9247V2.07496Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.866 0.666504C11.5333 0.666504 11.2635 0.936756 11.2635 1.27013C11.2635 1.6035 11.5333 1.87375 11.866 1.87375H15.2407L5.64176 11.4712C5.40624 11.7067 5.40585 12.0889 5.64088 12.3249C5.87591 12.5608 6.25736 12.5612 6.49288 12.3258L16.0953 2.72475V6.1012C16.0953 6.43457 16.3651 6.70482 16.6978 6.70482C17.0305 6.70482 17.3003 6.43457 17.3003 6.1012V2.07496C17.3003 1.29709 16.6709 0.666504 15.8945 0.666504H11.866Z" fill="currentColor"/>
            </svg>
          }
        >
          Daten exportieren
        </Button>
      </Box>
      <Box className={classes.table}>
        <Table/>
      </Box>
    </Box>
  )
}
