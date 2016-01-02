
/**
 * @name frst
 */
var bpm = 120;
var bps = bpm/60;
var seq = [200,170,220,170,220,200,170,200];
var envseq = [1,0.3,0.5];

export function dsp(t) {
  
  return Sine(ExpEnvelope(1,0.2,0.2,t),t) * 0.7 + 
  //Tri(Seq(seq,8,1,t)/4,t) * 0.4 + 
  //ExpEnvelope(1,100,Seq(envseq,3,1,t),t)*Sqw(Seq(seq,8,1,t),t) * 0.05 + 
  //ExpEnvelope(1,100,0.5,t)*Sqw(Seq(seq,8,1,t)*2,t) * 0.05 + 
  //ExpEnvelope(1,100,0.5,t)*Sqw(Seq(seq,8,1,t)*3,t) * 0.05 ;
  0;
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

function Seq(seq,len,interval,t)
{
  //var measure = t%(len*interval);
  return seq[Math.floor((t%len)/bps*interval)];
  //return seq[3];
}

function Chord(func,mul1,mul2)
{
  
}