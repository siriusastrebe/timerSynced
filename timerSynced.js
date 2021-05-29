let start = new Date();
let count = -1;
let averageDrift = 0;
let bias = 0;

const pulse = () => {
  count++;
  const drift = new Date() - start - count * 100;

  // Weighted Arithmetic Mean
  averageDrift = averageDrift * 0.99 + (drift * 0.01);

  // Exponentially weighted moving average
  bias = bias + drift / Math.min(count+1, 10000);

  // setTimeout only accepts integer millisecond of delay
  // we need to round statistically to best approximate our fractional bias
  const rounding = (Math.abs(bias % 1) > Math.random()) ? Math.sign(bias) : 0;

  const delay = Math.trunc(bias) + rounding;

  setTimeout(pulse, 100 - drift - delay);
  console.log(drift, bias, averageDrift, new Date() - start, delay);
}

pulse();
