
/**
 * @name untitled
 */
var bpm = 120;
var bps = bpm/60;

export function dsp(t) {
  return 0.2*ExpEnvelope(1,100,0.5,t)*Sqw(110,t) + 0.2*ExpEnvelope(0.2,100,0.5,t)*Sqw(220,t);
}

function Sine(freq,t)
{
  return Math.sin(freq*Math.PI*2*t);
}

function Tri(freq,t)
{
  return Math.abs(2-(t%(1/freq))*4*freq)-1;
}

function Saw(freq,t)
{
  return Math.abs(2*(t%(1/freq))*freq)-1
}

function Sqw(freq,t)
{
  return Sine(freq,t)>0 ? 1 : -1;
}

function Noiz()
{
  return Math.random()*2-1;
}
function ExpEnvelope(bar,power,length,t)
{
  var place = (t+bar)%length;
  return 1/Math.pow(power,place);
}

