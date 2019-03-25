import React from 'react';

export default class Discription extends React.Component {
state = {
status: 'Старт',
timer: 5,
globalTimer: 30,
counts: {
0: 0,
1: 0,
2: 0,
3: 0,
4: 0,
5: 0,
},
curentSpinner: 0,
isStarted:false,
}

hendlerStartTimer = () => {
this.setState({ status: this.state.timer, isStarted: true }, () => {
this.tic()
})
}

tic = () => {
this.timerId = setInterval(() => {
if (this.state.globalTimer <= 0) return clearInterval(this.timerId);
const isLess = (this.state.timer - 1) <= 0;
const newTime = isLess ? 5 : this.state.timer - 1;
this.setState({
timer: newTime,
globalTimer: this.state.globalTimer - 1,
status: (this.state.globalTimer - 1) <= 0 ? 'over' : newTime,
curentSpinner: isLess ? this.state.curentSpinner + 1 : this.state.curentSpinner,
})
}, 1000);
}

clicker = () => {
if (this.state.globalTimer <= 0 || !this.state.isStarted) return;
this.setState({
counts: {
...this.state.counts,
[this.state.curentSpinner]: this.state.counts[this.state.curentSpinner] + 1
}
});
}

onPress = () => {
console.log('game over');
}

getStyle = (index) => {
const commonStyle = { height: '20px', width: '20px', margin: '20px', border: '1px solid black', padding: '15px' };
if (!this.state.isStarted) return commonStyle;

if (index*5 <= 30 - this.state.globalTimer) {
commonStyle.backgroundColor = 'green';
} else {
commonStyle.backgroundColor = 'none';
}
return commonStyle;
}

render() {
const { counts, curentSpinner } = this.state

const countKeys = Object.keys(this.state.counts).length;
const numbers = [1, 2, 3, 4, 5, 6];
return (
<div>
<div style={{ marginTop: '50px', marginBottom: '50px' }}>
{numbers.map((number, index) => (
<span style={this.getStyle(index)}>
{number}
</span>
))}
</div>
<div><span>{counts[curentSpinner]}</span></div>
<div>
<button
onClick={curentSpinner === countKeys? this.onPress: this.hendlerStartTimer}
style={{ margin: '50px 0' }}
>
{this.state.status}
</button>
</div>
<div>
<div
style={{ backgroundColor: 'aqua', height: '100px', width: '200px', marginTop: '50px' }}
onClick={this.clicker}
>
НАЖИМАТЬ СЮДА
</div>
</div>
</div>
)
}
}