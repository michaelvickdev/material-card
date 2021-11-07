import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'

export default function MediaCard({ color, title, hours, lastWeekHours }) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    if (matches) {
        return (
            <Card sx={{ maxWidth: 345 }} style={{ borderRadius: '20px' }}>
                <CardHeader
                    style={{
                        backgroundColor: color,
                        height: '30px',
                    }}
                >
                    <AcUnitIcon />
                </CardHeader>
                <CardHeader
                    style={{
                        backgroundColor: '#2C265F',
                        height: '20px',
                    }}
                    action={
                        <IconButton aria-label="settings">
                            <MoreHorizIcon style={{ color: 'white' }} />
                        </IconButton>
                    }
                    avatar={
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="white"
                        >
                            {title}
                        </Typography>
                    }
                />
                <CardContent
                    style={{
                        backgroundColor: '#2C265F',
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h2"
                        component="div"
                        color="white"
                    >
                        {hours} hrs
                    </Typography>
                    <Typography variant="body2" color="white">
                        Last Week - {lastWeekHours} hrs
                    </Typography>
                </CardContent>
            </Card>
        )
    }
    return (
        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: '20px' }}>
            <CardHeader
                style={{
                    backgroundColor: color,
                    height: '30px',
                }}
            >
                <AcUnitIcon />
            </CardHeader>
            <CardHeader
                style={{
                    backgroundColor: '#2C265F',
                    height: '20px',
                }}
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon style={{ color: 'white' }} />
                    </IconButton>
                }
                avatar={
                    <Typography
                        style={{ marginTop: '10px' }}
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                    >
                        {title}
                    </Typography>
                }
            />
            <CardContent
                style={{
                    backgroundColor: '#2C265F',
                    textAlign: 'left',
                }}
            >
                <Grid container justify="space-between">
                    <Typography gutterBottom variant="h5" color="white" inline>
                        {hours} hrs
                    </Typography>
                    <Typography
                        variant="body2"
                        color="white"
                        sx={{ marginTop: '5px', marginLeft: 'auto' }}
                    >
                        Last Week - {lastWeekHours} hrs
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}
