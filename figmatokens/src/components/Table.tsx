import {
    TableContainer,
    Table as MUITable,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    Typography,
    Theme,
    Checkbox,
    Skeleton,
    Grid
  } from '@mui/material'
  import { makeStyles } from '../config/theme/makeStyles'
import React from 'react'
import '../styles/theme.css';
  
const useStyles = makeStyles()((theme: Theme) => ({
    headerCell: {
      backgroundColor: 'var(--colors-grey3)',
      paddingTop: '8px',
      paddingBottom: '8px'
    },
    headerLabel: {
      fontWeight: '800',
      fontSize: '16px'
    },
    headerWithFiltering: {
      display: 'flex',
      alignItems: 'center'
    },
    checkboxCell: {
      width: '40px'
    },
    tableRow: {
      '&:nth-of-type(even) td': {
        backgroundColor: 'var(--colors-white)'
      },
      '&:nth-of-type(odd) td': {
        backgroundColor: 'var(--colors-grey4)'
      },
      '& td': {
        fontSize: '16px',
        paddingTop: '5px',
        paddingBottom: '5px'
      }
    },
    tablePagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      width: '90%'
    },
    pageButton: {
      backgroundColor: 'transparent',
      outline: 'unset',
      border: 'unset',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: '0.2s',
      '&:hover': {
        color: 'var(--colors-magenta)'
      }
    },
    activePage: {
      color: 'var(--colors-magenta)'
    },
    pagination: {
      display: 'flex'
    },
  })) 

  const TableSkeleton = (
    <>
      <Grid container gap={1} p={2}>
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
        <Skeleton variant="rectangular" height={32} width="100%" />
      </Grid>
    </>
  )

  const Table: React.FC = ({}) => {
    const { classes, cx } = useStyles()
  
    return (
      <>
        <TableContainer>
            <MUITable stickyHeader>
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell className={cx(classes.headerCell, classes.checkboxCell)}>
                    <Checkbox
                      className={classes.checkboxCell}
                      />
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        E-mail
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Vorname
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Nachname
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Erstelldatum
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Ersteller
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Businessrolle
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Box className={classes.headerWithFiltering}>
                      <Typography className={classes.headerLabel} style={{ marginRight: '6px' }}>
                        Status
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                      <Checkbox
                      className={classes.checkboxCell}
                      />
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                      <Checkbox
                      className={classes.checkboxCell}
                      />
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                      <Checkbox
                      className={classes.checkboxCell}
                      />
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                      <Checkbox
                      className={classes.checkboxCell}
                      />
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.headerWithFiltering}>
                      <Typography style={{ marginRight: '6px' }}>
                        Hola
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </MUITable>
        </TableContainer>
              <Box className={classes.tablePagination}>
                <Typography>
                  1 - 4 von 4
                </Typography>
                <Box className={classes.pagination}>
                  <button className={classes.pageButton}>
                    1
                  </button>
                </Box>
              </Box>
      </>
    )
}
  export default Table
  