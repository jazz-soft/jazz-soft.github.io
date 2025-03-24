const fs = require('fs');
const files = [
  'node_modules/jzz/javascript/JZZ.js',
  'node_modules/jzz-gui-karaoke/javascript/JZZ.gui.Karaoke.js',
  'node_modules/jzz-gui-player/javascript/JZZ.gui.Player.js',
  'node_modules/jzz-input-kbd/javascript/JZZ.input.Kbd.js',
  'node_modules/jzz-midi-gear/javascript/JZZ.midi.Gear.js',
  'node_modules/jzz-midi-gm/javascript/JZZ.midi.GM.js',
  'node_modules/jzz-midi-smf/javascript/JZZ.midi.SMF.js',
  'node_modules/jzz-midi-sty/javascript/JZZ.midi.STY.js',
  'node_modules/jzz-midi-ws/javascript/JZZ.midi.WS.js',
  'node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js'
];
for (var file of files) fs.copyFileSync(file, 'javascript' + file.substr(file.lastIndexOf('/')));

