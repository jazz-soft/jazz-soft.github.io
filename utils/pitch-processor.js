class PitchProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bufferSize = 2048;
    this.buffer = new Float32Array(this.bufferSize);
    this.writeIndex = 0;
  }

  // Simple autocorrelation stub
  autocorrelate(buf, sampleRate) {
    let bestLag = 0;
    let bestCorr = 0;

    for (let lag = 20; lag < buf.length / 2; lag++) {
      let corr = 0;
      for (let i = 0; i < buf.length - lag; i++) {
        corr += buf[i] * buf[i + lag];
      }
      if (corr > bestCorr) {
        bestCorr = corr;
        bestLag = lag;
      }
    }

    if (bestLag === 0) return 0;
    return sampleRate / bestLag;
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || input.length === 0) return true;

    const channel = input[0];
    for (let i = 0; i < channel.length; i++) {
      this.buffer[this.writeIndex++] = channel[i];
      if (this.writeIndex >= this.bufferSize) {
        const freq = this.autocorrelate(this.buffer, sampleRate);
        if (freq > 0) {
          this.port.postMessage(freq);
          console.log('Pitch:', freq.toFixed(2), 'Hz');
        }
        this.writeIndex = 0;
      }
    }

    return true;
  }
}

registerProcessor('pitch-processor', PitchProcessor);
