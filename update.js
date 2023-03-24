const fs = require('fs');
const files = [
  'node_modules/jzz/javascript/JZZ.js',
  'node_modules/jzz-gui-karaoke/javascript/JZZ.gui.Karaoke.js',
  'node_modules/jzz-gui-player/javascript/JZZ.gui.Player.js',
  'node_modules/jzz-input-kbd/javascript/JZZ.input.Kbd.js',
  'node_modules/jzz-midi-gear/javascript/JZZ.MIDI.Gear.js',
  'node_modules/jzz-midi-gm/javascript/JZZ.MIDI.GM.js',
  'node_modules/jzz-midi-smf/javascript/JZZ.MIDI.SMF.js',
  'node_modules/jzz-synth-tiny/javascript/JZZ.synth.Tiny.js'
];
for (var file of files) fs.copyFileSync(file, 'javascript' + file.substr(file.lastIndexOf('/')));

