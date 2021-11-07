import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Avatar from '@mui/material/Avatar'
import { grey } from '@mui/material/colors'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Box from '@mui/material/Box'

export default function MediaCard() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    if (matches) {
        return (
            <Card sx={{ maxWidth: 345 }} style={{ borderRadius: '10px' }}>
                <CardHeader
                    style={{ backgroundColor: '#7F33F1' }}
                    avatar={
                        <Avatar
                            aria-label="profile"
                            src="http://i.pravatar.cc/300?img=3"
                            sx={{ width: 56, height: 56 }}
                            title="title"
                        />
                    }
                />
                <CardContent
                    style={{
                        backgroundColor: '#7F33F1',
                        textAlign: 'left',
                    }}
                >
                    <Typography variant="body2" color="white">
                        Report for
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="div"
                        color="white"
                    >
                        JEREMY ROBSON
                    </Typography>
                </CardContent>
                <CardContent
                    style={{
                        backgroundColor: '#7F33F1',
                        height: '100px',
                    }}
                ></CardContent>

                <CardContent
                    style={{
                        backgroundColor: '#2C265F',
                        textAlign: 'left',
                    }}
                >
                    <MenuList
                        id="composition-menu"
                        aria-labelledby="composition-button"
                    >
                        <MenuItem style={{ color: grey[500] }}>Daily</MenuItem>
                        <MenuItem style={{ color: grey[50] }}>Weekly</MenuItem>
                        <MenuItem style={{ color: grey[500] }}>
                            Monthly
                        </MenuItem>
                    </MenuList>
                </CardContent>
            </Card>
        )
    }
    return (
        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: '10px' }}>
            <CardContent
                style={{
                    backgroundColor: '#7F33F1',
                    textAlign: 'left',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Avatar
                        aria-label="profile"
                        src="http://i.pravatar.cc/300?img=3"
                        sx={{ width: 56, height: 56 }}
                        title="title"
                    />
                    <Box style={{ marginLeft: '10px' }}>
                        <Typography variant="body2" color="white">
                            Report for
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                            color="white"
                        >
                            JEREMY ROBSON
                        </Typography>
                    </Box>
                </Box>
            </CardContent>

            <CardContent
                style={{
                    backgroundColor: '#2C265F',
                    textAlign: 'left',
                }}
            >
                <MenuList
                    id="composition-menu"
                    aria-labelledby="composition-button"
                >
                    <MenuItem
                        style={{ color: grey[500], display: 'inline-block' }}
                    >
                        Daily
                    </MenuItem>
                    <MenuItem
                        style={{ color: grey[50], display: 'inline-block' }}
                    >
                        Weekly
                    </MenuItem>
                    <MenuItem
                        style={{ color: grey[500], display: 'inline-block' }}
                    >
                        Monthly
                    </MenuItem>
                </MenuList>
            </CardContent>
        </Card>
    )
}
