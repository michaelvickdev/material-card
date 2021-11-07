import './App.css'
import Card from './components/Card'
import CardProfile from './components/CardProfile'
import Grid from '@mui/material/Grid'
import {
    deepOrange,
    green,
    blue,
    purple,
    red,
    yellow,
} from '@mui/material/colors'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid container spacing={2} p={6}>
                    <Grid item xs={12} md={3}>
                        <CardProfile />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card
                            hours={32}
                            title="Work"
                            color={deepOrange['A400']}
                            lastWeekHours={36}
                        />
                        <br />
                        <Card
                            hours={4}
                            title="Exercise"
                            color={green['A400']}
                            lastWeekHours={5}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card
                            lastWeekHours={8}
                            hours={10}
                            title="Play"
                            color={blue['A400']}
                        />{' '}
                        <br />
                        <Card
                            lastWeekHours={10}
                            hours={5}
                            title="Social"
                            color={purple['A400']}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card
                            lastWeekHours={7}
                            hours={4}
                            title="Study"
                            color={red['A400']}
                        />{' '}
                        <br />
                        <Card
                            lastWeekHours={2}
                            hours={2}
                            title="Self Care"
                            color={yellow[700]}
                        />
                    </Grid>
                </Grid>
            </header>
        </div>
    )
}

export default App
