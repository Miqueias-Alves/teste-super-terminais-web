import { Box, Grid, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { MenuProps } from '../../configs/menuConfig'

interface Props {
    options: MenuProps[]
}

export function Menu({ options }: Props) {

    if (!options.length) return <></>

    return (
        <>
            <Grid container spacing={3}>
                {options
                    ?.filter((item) => !item?.hiddenMenu)
                    .map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{ '& a': { textDecoration: 'none' } }}
                        >
                            <NavLink to={item.route} style={{ width: '100%' }}>
                                {({ isActive }) => (
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        justifyContent='flex-end'
                                        sx={{
                                            height: 'auto',
                                            minHeight: [164, 216],
                                            minWidth: '100%',
                                            width: '100%',
                                            borderRadius: '6px',
                                            boxShadow: (theme) =>
                                                isActive
                                                    ? `2px 2px 0 ${theme.palette.primary.dark}`
                                                    : 'none',
                                            bgcolor: (theme) => theme.palette.primary.main,
                                            transition: 'all 0.5s',
                                            '&:hover': {
                                                bgcolor: (theme) => theme.palette.primary.dark,
                                            },
                                        }}
                                    >
                                        <Stack
                                            width='100%'
                                            minHeight={112}
                                            sx={{
                                                background: (theme) =>
                                                    item?.image
                                                        ? `url(${item.image}) ${theme.palette.secondary.light}`
                                                        : theme.palette.secondary.light,
                                                backgroundSize: 'cover',
                                                borderTopRightRadius: '6px',
                                                borderTopLeftRadius: '6px',
                                            }}
                                        ></Stack>
                                        <Stack
                                            justifyContent='flex-start'
                                            sx={{
                                                padding: [2, 3],
                                                bgcolor: (theme) => theme.palette.secondary.light,
                                                borderBottomRightRadius: '6px',
                                                borderBottomLeftRadius: '6px',
                                                minHeight: 112,
                                            }}
                                        >
                                            <Typography color='secondary.contrastText'>
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                color='secondary.contrastText'
                                                fontWeight={300}
                                                sx={{ opacity: 0.8 }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                )}
                            </NavLink>
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}