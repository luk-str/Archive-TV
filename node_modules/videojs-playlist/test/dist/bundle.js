/*! @name videojs-playlist @version 4.3.1 @license Apache-2.0 */
(function (QUnit, sinon, videojs) {
	'use strict';

	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;
	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	var cov_14i98g141m = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/auto-advance.js',
	      hash = '445d03648826c8a2cda2eb374d06163a88b4152d',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/auto-advance.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 12,
	          column: 21
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      '1': {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      '2': {
	        start: {
	          line: 21,
	          column: 12
	        },
	        end: {
	          line: 34,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 22,
	          column: 13
	        },
	        end: {
	          line: 22,
	          column: 41
	        }
	      },
	      '4': {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 3
	        }
	      },
	      '5': {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 36
	        }
	      },
	      '6': {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 36
	        }
	      },
	      '8': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 20
	        }
	      },
	      '9': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 20
	        }
	      },
	      '10': {
	        start: {
	          line: 48,
	          column: 14
	        },
	        end: {
	          line: 80,
	          column: 1
	        }
	      },
	      '11': {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 16
	        }
	      },
	      '12': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 3
	        }
	      },
	      '13': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 46
	        }
	      },
	      '14': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 11
	        }
	      },
	      '15': {
	        start: {
	          line: 58,
	          column: 2
	        },
	        end: {
	          line: 58,
	          column: 45
	        }
	      },
	      '16': {
	        start: {
	          line: 60,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 4
	        }
	      },
	      '17': {
	        start: {
	          line: 64,
	          column: 25
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      '18': {
	        start: {
	          line: 64,
	          column: 31
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      '19': {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 37
	        }
	      },
	      '20': {
	        start: {
	          line: 72,
	          column: 4
	        },
	        end: {
	          line: 76,
	          column: 21
	        }
	      },
	      '21': {
	        start: {
	          line: 73,
	          column: 6
	        },
	        end: {
	          line: 73,
	          column: 20
	        }
	      },
	      '22': {
	        start: {
	          line: 74,
	          column: 6
	        },
	        end: {
	          line: 74,
	          column: 39
	        }
	      },
	      '23': {
	        start: {
	          line: 75,
	          column: 6
	        },
	        end: {
	          line: 75,
	          column: 29
	        }
	      },
	      '24': {
	        start: {
	          line: 79,
	          column: 2
	        },
	        end: {
	          line: 79,
	          column: 60
	        }
	      },
	      '25': {
	        start: {
	          line: 89,
	          column: 18
	        },
	        end: {
	          line: 91,
	          column: 1
	        }
	      },
	      '26': {
	        start: {
	          line: 90,
	          column: 2
	        },
	        end: {
	          line: 90,
	          column: 13
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 12,
	            column: 21
	          },
	          end: {
	            line: 12,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 12
	          },
	          end: {
	            line: 21,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 24
	          },
	          end: {
	            line: 34,
	            column: 1
	          }
	        },
	        line: 21
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 48,
	            column: 14
	          },
	          end: {
	            line: 48,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 48,
	            column: 33
	          },
	          end: {
	            line: 80,
	            column: 1
	          }
	        },
	        line: 48
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 60,
	            column: 41
	          },
	          end: {
	            line: 60,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 52
	          },
	          end: {
	            line: 77,
	            column: 3
	          }
	        },
	        line: 60
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 64,
	            column: 25
	          },
	          end: {
	            line: 64,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 31
	          },
	          end: {
	            line: 64,
	            column: 51
	          }
	        },
	        line: 64
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 72,
	            column: 61
	          },
	          end: {
	            line: 72,
	            column: 62
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 67
	          },
	          end: {
	            line: 76,
	            column: 5
	          }
	        },
	        line: 72
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 89,
	            column: 18
	          },
	          end: {
	            line: 89,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 89,
	            column: 26
	          },
	          end: {
	            line: 91,
	            column: 1
	          }
	        },
	        line: 89
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 27
	          },
	          end: {
	            line: 13,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 40
	          },
	          end: {
	            line: 13,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 50
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        }],
	        line: 13
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }],
	        line: 24
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }],
	        line: 28
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }],
	        line: 53
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0
	    },
	    b: {
	      '0': [0, 0, 0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	cov_14i98g141m.s[0]++;

	var validSeconds = function validSeconds(s) {
	  cov_14i98g141m.f[0]++;
	  cov_14i98g141m.s[1]++;
	  return (cov_14i98g141m.b[0][0]++, typeof s === 'number') && (cov_14i98g141m.b[0][1]++, !isNaN(s)) && (cov_14i98g141m.b[0][2]++, s >= 0) && (cov_14i98g141m.b[0][3]++, s < Infinity);
	};

	cov_14i98g141m.s[2]++;

	var reset = function reset(player) {
	  cov_14i98g141m.f[1]++;
	  var aa = (cov_14i98g141m.s[3]++, player.playlist.autoadvance_);
	  cov_14i98g141m.s[4]++;

	  if (aa.timeout) {
	    cov_14i98g141m.b[1][0]++;
	    cov_14i98g141m.s[5]++;
	    player.clearTimeout(aa.timeout);
	  } else {
	    cov_14i98g141m.b[1][1]++;
	  }

	  cov_14i98g141m.s[6]++;

	  if (aa.trigger) {
	    cov_14i98g141m.b[2][0]++;
	    cov_14i98g141m.s[7]++;
	    player.off('ended', aa.trigger);
	  } else {
	    cov_14i98g141m.b[2][1]++;
	  }

	  cov_14i98g141m.s[8]++;
	  aa.timeout = null;
	  cov_14i98g141m.s[9]++;
	  aa.trigger = null;
	};

	cov_14i98g141m.s[10]++;

	var setup = function setup(player, delay) {
	  cov_14i98g141m.f[2]++;
	  cov_14i98g141m.s[11]++;
	  reset(player);
	  cov_14i98g141m.s[12]++;

	  if (!validSeconds(delay)) {
	    cov_14i98g141m.b[3][0]++;
	    cov_14i98g141m.s[13]++;
	    player.playlist.autoadvance_.delay = null;
	    cov_14i98g141m.s[14]++;
	    return;
	  } else {
	    cov_14i98g141m.b[3][1]++;
	  }

	  cov_14i98g141m.s[15]++;
	  player.playlist.autoadvance_.delay = delay;
	  cov_14i98g141m.s[16]++;

	  player.playlist.autoadvance_.trigger = function () {
	    cov_14i98g141m.f[3]++;
	    cov_14i98g141m.s[17]++;

	    var cancelOnPlay = function cancelOnPlay() {
	      cov_14i98g141m.f[4]++;
	      cov_14i98g141m.s[18]++;
	      return setup(player, delay);
	    };

	    cov_14i98g141m.s[19]++;
	    player.one('play', cancelOnPlay);
	    cov_14i98g141m.s[20]++;
	    player.playlist.autoadvance_.timeout = player.setTimeout(function () {
	      cov_14i98g141m.f[5]++;
	      cov_14i98g141m.s[21]++;
	      reset(player);
	      cov_14i98g141m.s[22]++;
	      player.off('play', cancelOnPlay);
	      cov_14i98g141m.s[23]++;
	      player.playlist.next();
	    }, delay * 1000);
	  };

	  cov_14i98g141m.s[24]++;
	  player.one('ended', player.playlist.autoadvance_.trigger);
	};

	cov_14i98g141m.s[25]++;

	var setReset_ = function setReset_(fn) {
	  cov_14i98g141m.f[6]++;
	  cov_14i98g141m.s[26]++;
	  reset = fn;
	};

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	var proxy = function proxy(props) {
	  var player = _extends({}, videojs.EventTarget.prototype, {
	    play: function play() {},
	    paused: function paused() {},
	    ended: function ended() {},
	    poster: function poster() {},
	    src: function src() {},
	    currentSrc: function currentSrc() {},
	    addRemoteTextTrack: function addRemoteTextTrack() {},
	    removeRemoteTextTrack: function removeRemoteTextTrack() {},
	    remoteTextTracks: function remoteTextTracks() {},
	    playlist: function playlist() {
	      return [];
	    },
	    ready: function ready(cb) {
	      return cb();
	    },
	    setTimeout: function setTimeout(cb, wait) {
	      return window_1.setTimeout(cb, wait);
	    },
	    clearTimeout: function clearTimeout(id) {
	      return window_1.clearTimeout(id);
	    }
	  }, props);

	  player.constructor = videojs.getComponent('Player');
	  player.playlist.player_ = player;
	  player.playlist.autoadvance_ = {};
	  player.playlist.currentIndex_ = -1;

	  player.playlist.autoadvance = function () {};

	  player.playlist.contains = function () {};

	  player.playlist.currentItem = function () {};

	  player.playlist.first = function () {};

	  player.playlist.indexOf = function () {};

	  player.playlist.next = function () {};

	  player.playlist.previous = function () {};

	  return player;
	};

	QUnit.module('auto-advance');
	QUnit.test('set up ended listener if one does not exist yet', function (assert) {
	  var player = proxy();
	  var ones = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	});
	QUnit.test('off previous listener if exists before adding a new one', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 0, 'we should not have off-ed anything yet');
	  setup(player, 10);
	  assert.equal(ones.length, 2, 'there should have been only two one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(ones[1], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 1, 'there should have been only one off event added');
	  assert.equal(offs[0], 'ended', 'the event we want to off is "ended"');
	});
	QUnit.test('do nothing if timeout is weird', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, -1);
	  setup(player, -100);
	  setup(player, null);
	  setup(player, {});
	  setup(player, []);
	  assert.equal(offs.length, 0, 'we did nothing');
	  assert.equal(ones.length, 0, 'we did nothing');
	});
	QUnit.test('reset if timeout is weird after we advance', function (assert) {
	  var player = proxy();
	  var ones = [];
	  var offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  setup(player, -1);
	  setup(player, 0);
	  setup(player, -100);
	  setup(player, 0);
	  setup(player, null);
	  setup(player, 0);
	  setup(player, {});
	  setup(player, 0);
	  setup(player, []);
	  setup(player, 0);
	  setup(player, NaN);
	  setup(player, 0);
	  setup(player, Infinity);
	  setup(player, 0);
	  setup(player, -Infinity);
	  assert.equal(offs.length, 8, 'we reset the advance 8 times');
	  assert.equal(ones.length, 8, 'we autoadvanced 8 times');
	});
	QUnit.test('reset if we have already started advancing', function (assert) {
	  var player = proxy();
	  var oldClearTimeout = window_1.clearTimeout;
	  var clears = 0;

	  window_1.clearTimeout = function () {
	    clears++;
	  }; // pretend we started autoadvancing


	  player.playlist.autoadvance_.timeout = 1;
	  setup(player, 0);
	  assert.equal(clears, 1, 'we reset the auto advance');
	  window_1.clearTimeout = oldClearTimeout;
	});
	QUnit.test('timeout is given in seconds', function (assert) {
	  var player = proxy();
	  var oldSetTimeout = window_1.setTimeout;
	  player.addEventListener = Function.prototype;

	  window_1.setTimeout = function (fn, timeout) {
	    assert.equal(timeout, 10 * 1000, 'timeout was given in seconds');
	  };

	  setup(player, 10);
	  player.trigger('ended');
	  window_1.setTimeout = oldSetTimeout;
	});
	QUnit.test('cancel a pending auto-advance if play is requested', function (assert) {
	  var clock = sinon.useFakeTimers();
	  var player = proxy();
	  sinon.spy(player.playlist, 'next');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was called');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(5000);
	  player.trigger('play');
	  clock.tick(5000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was not called because a "play" occurred');
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 2, 'next was called again because the content ended again and the appropriate wait time elapsed');
	});

	var cov_g6zj6xivc = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/play-item.js',
	      hash = 'ee3874444c4c418ebb585c26bbb8508f2a48fa70',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/play-item.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 9,
	          column: 20
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 10,
	          column: 17
	        },
	        end: {
	          line: 10,
	          column: 42
	        }
	      },
	      '2': {
	        start: {
	          line: 11,
	          column: 10
	        },
	        end: {
	          line: 11,
	          column: 38
	        }
	      },
	      '3': {
	        start: {
	          line: 15,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 44
	        }
	      },
	      '5': {
	        start: {
	          line: 32,
	          column: 17
	        },
	        end: {
	          line: 64,
	          column: 1
	        }
	      },
	      '6': {
	        start: {
	          line: 33,
	          column: 17
	        },
	        end: {
	          line: 33,
	          column: 51
	        }
	      },
	      '7': {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 35,
	          column: 67
	        }
	      },
	      '8': {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      '9': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 66
	        }
	      },
	      '10': {
	        start: {
	          line: 41,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 35
	        }
	      },
	      '11': {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 27
	        }
	      },
	      '12': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 43,
	          column: 22
	        }
	      },
	      '13': {
	        start: {
	          line: 45,
	          column: 2
	        },
	        end: {
	          line: 61,
	          column: 5
	        }
	      },
	      '14': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 76
	        }
	      },
	      '15': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 63
	        }
	      },
	      '16': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 58,
	          column: 5
	        }
	      },
	      '17': {
	        start: {
	          line: 51,
	          column: 26
	        },
	        end: {
	          line: 51,
	          column: 39
	        }
	      },
	      '18': {
	        start: {
	          line: 55,
	          column: 6
	        },
	        end: {
	          line: 57,
	          column: 7
	        }
	      },
	      '19': {
	        start: {
	          line: 56,
	          column: 8
	        },
	        end: {
	          line: 56,
	          column: 42
	        }
	      },
	      '20': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 54
	        }
	      },
	      '21': {
	        start: {
	          line: 63,
	          column: 2
	        },
	        end: {
	          line: 63,
	          column: 16
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 9,
	            column: 20
	          },
	          end: {
	            line: 9,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 32
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 9
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 32,
	            column: 17
	          },
	          end: {
	            line: 32,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 32,
	            column: 35
	          },
	          end: {
	            line: 64,
	            column: 1
	          }
	        },
	        line: 32
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 45,
	            column: 15
	          },
	          end: {
	            line: 45,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 45,
	            column: 21
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        },
	        line: 45
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 56,
	            column: 31
	          },
	          end: {
	            line: 56,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 56,
	            column: 38
	          },
	          end: {
	            line: 56,
	            column: 40
	          }
	        },
	        line: 56
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 20
	          },
	          end: {
	            line: 11,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 37
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        }],
	        line: 11
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 37
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        }],
	        line: 33
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 35,
	            column: 39
	          },
	          end: {
	            line: 35,
	            column: 65
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 35,
	            column: 39
	          },
	          end: {
	            line: 35,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 61
	          },
	          end: {
	            line: 35,
	            column: 65
	          }
	        }],
	        line: 35
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }],
	        line: 37
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 41,
	            column: 16
	          },
	          end: {
	            line: 41,
	            column: 33
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 41,
	            column: 16
	          },
	          end: {
	            line: 41,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 41,
	            column: 31
	          },
	          end: {
	            line: 41,
	            column: 33
	          }
	        }],
	        line: 41
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 47,
	            column: 5
	          },
	          end: {
	            line: 47,
	            column: 26
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 47,
	            column: 5
	          },
	          end: {
	            line: 47,
	            column: 20
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 24
	          },
	          end: {
	            line: 47,
	            column: 26
	          }
	        }],
	        line: 47
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 48,
	            column: 35
	          },
	          end: {
	            line: 48,
	            column: 61
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 48,
	            column: 35
	          },
	          end: {
	            line: 48,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 57
	          },
	          end: {
	            line: 48,
	            column: 61
	          }
	        }],
	        line: 48
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }],
	        line: 50
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }],
	        line: 55
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 55,
	            column: 10
	          },
	          end: {
	            line: 55,
	            column: 86
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 55,
	            column: 10
	          },
	          end: {
	            line: 55,
	            column: 44
	          }
	        }, {
	          start: {
	            line: 55,
	            column: 48
	          },
	          end: {
	            line: 55,
	            column: 86
	          }
	        }],
	        line: 55
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0
	    },
	    b: {
	      '0': [0, 0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_g6zj6xivc.s[0]++;

	var clearTracks = function clearTracks(player) {
	  cov_g6zj6xivc.f[0]++;
	  var tracks = (cov_g6zj6xivc.s[1]++, player.remoteTextTracks());
	  var i = (cov_g6zj6xivc.s[2]++, (cov_g6zj6xivc.b[0][0]++, tracks) && (cov_g6zj6xivc.b[0][1]++, tracks.length) || (cov_g6zj6xivc.b[0][2]++, 0));
	  cov_g6zj6xivc.s[3]++;

	  while (i--) {
	    cov_g6zj6xivc.s[4]++;
	    player.removeRemoteTextTrack(tracks[i]);
	  }
	};

	cov_g6zj6xivc.s[5]++;

	var playItem = function playItem(player, item) {
	  cov_g6zj6xivc.f[1]++;
	  var replay = (cov_g6zj6xivc.s[6]++, (cov_g6zj6xivc.b[1][0]++, !player.paused()) || (cov_g6zj6xivc.b[1][1]++, player.ended()));
	  cov_g6zj6xivc.s[7]++;
	  player.trigger('beforeplaylistitem', (cov_g6zj6xivc.b[2][0]++, item.originalValue) || (cov_g6zj6xivc.b[2][1]++, item));
	  cov_g6zj6xivc.s[8]++;

	  if (item.playlistItemId_) {
	    cov_g6zj6xivc.b[3][0]++;
	    cov_g6zj6xivc.s[9]++;
	    player.playlist.currentPlaylistItemId_ = item.playlistItemId_;
	  } else {
	    cov_g6zj6xivc.b[3][1]++;
	  }

	  cov_g6zj6xivc.s[10]++;
	  player.poster((cov_g6zj6xivc.b[4][0]++, item.poster) || (cov_g6zj6xivc.b[4][1]++, ''));
	  cov_g6zj6xivc.s[11]++;
	  player.src(item.sources);
	  cov_g6zj6xivc.s[12]++;
	  clearTracks(player);
	  cov_g6zj6xivc.s[13]++;
	  player.ready(function () {
	    cov_g6zj6xivc.f[2]++;
	    cov_g6zj6xivc.s[14]++;
	    ((cov_g6zj6xivc.b[5][0]++, item.textTracks) || (cov_g6zj6xivc.b[5][1]++, [])).forEach(player.addRemoteTextTrack.bind(player));
	    cov_g6zj6xivc.s[15]++;
	    player.trigger('playlistitem', (cov_g6zj6xivc.b[6][0]++, item.originalValue) || (cov_g6zj6xivc.b[6][1]++, item));
	    cov_g6zj6xivc.s[16]++;

	    if (replay) {
	      cov_g6zj6xivc.b[7][0]++;
	      var playPromise = (cov_g6zj6xivc.s[17]++, player.play());
	      cov_g6zj6xivc.s[18]++;

	      if ((cov_g6zj6xivc.b[9][0]++, typeof playPromise !== 'undefined') && (cov_g6zj6xivc.b[9][1]++, typeof playPromise.then === 'function')) {
	        cov_g6zj6xivc.b[8][0]++;
	        cov_g6zj6xivc.s[19]++;
	        playPromise.then(null, function (e) {
	          cov_g6zj6xivc.f[3]++;
	        });
	      } else {
	        cov_g6zj6xivc.b[8][1]++;
	      }
	    } else {
	      cov_g6zj6xivc.b[7][1]++;
	    }

	    cov_g6zj6xivc.s[20]++;
	    setup(player, player.playlist.autoadvance_.delay);
	  });
	  cov_g6zj6xivc.s[21]++;
	  return player;
	};

	var cov_ritqk1zyq = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/playlist-maker.js',
	      hash = 'a100f3413808041b0c891297efe13d954e8c76ca',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/playlist-maker.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 16,
	          column: 21
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 17,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 46
	        }
	      },
	      '2': {
	        start: {
	          line: 33,
	          column: 32
	        },
	        end: {
	          line: 49,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 34,
	          column: 15
	        },
	        end: {
	          line: 34,
	          column: 17
	        }
	      },
	      '4': {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      '5': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 5
	        }
	      },
	      '6': {
	        start: {
	          line: 39,
	          column: 6
	        },
	        end: {
	          line: 39,
	          column: 30
	        }
	      },
	      '7': {
	        start: {
	          line: 40,
	          column: 6
	        },
	        end: {
	          line: 40,
	          column: 36
	        }
	      },
	      '8': {
	        start: {
	          line: 42,
	          column: 6
	        },
	        end: {
	          line: 42,
	          column: 22
	        }
	      },
	      '9': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 24
	        }
	      },
	      '10': {
	        start: {
	          line: 48,
	          column: 2
	        },
	        end: {
	          line: 48,
	          column: 14
	        }
	      },
	      '11': {
	        start: {
	          line: 61,
	          column: 31
	        },
	        end: {
	          line: 67,
	          column: 1
	        }
	      },
	      '12': {
	        start: {
	          line: 62,
	          column: 13
	        },
	        end: {
	          line: 62,
	          column: 14
	        }
	      },
	      '13': {
	        start: {
	          line: 64,
	          column: 2
	        },
	        end: {
	          line: 66,
	          column: 5
	        }
	      },
	      '14': {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 34
	        }
	      },
	      '15': {
	        start: {
	          line: 82,
	          column: 31
	        },
	        end: {
	          line: 90,
	          column: 1
	        }
	      },
	      '16': {
	        start: {
	          line: 83,
	          column: 2
	        },
	        end: {
	          line: 87,
	          column: 3
	        }
	      },
	      '17': {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 86,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 85,
	          column: 6
	        },
	        end: {
	          line: 85,
	          column: 15
	        }
	      },
	      '19': {
	        start: {
	          line: 89,
	          column: 2
	        },
	        end: {
	          line: 89,
	          column: 12
	        }
	      },
	      '20': {
	        start: {
	          line: 107,
	          column: 21
	        },
	        end: {
	          line: 126,
	          column: 1
	        }
	      },
	      '21': {
	        start: {
	          line: 108,
	          column: 13
	        },
	        end: {
	          line: 108,
	          column: 20
	        }
	      },
	      '22': {
	        start: {
	          line: 109,
	          column: 13
	        },
	        end: {
	          line: 109,
	          column: 20
	        }
	      },
	      '23': {
	        start: {
	          line: 111,
	          column: 2
	        },
	        end: {
	          line: 113,
	          column: 3
	        }
	      },
	      '24': {
	        start: {
	          line: 112,
	          column: 4
	        },
	        end: {
	          line: 112,
	          column: 23
	        }
	      },
	      '25': {
	        start: {
	          line: 114,
	          column: 2
	        },
	        end: {
	          line: 116,
	          column: 3
	        }
	      },
	      '26': {
	        start: {
	          line: 115,
	          column: 4
	        },
	        end: {
	          line: 115,
	          column: 23
	        }
	      },
	      '27': {
	        start: {
	          line: 118,
	          column: 2
	        },
	        end: {
	          line: 120,
	          column: 3
	        }
	      },
	      '28': {
	        start: {
	          line: 119,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 42
	        }
	      },
	      '29': {
	        start: {
	          line: 121,
	          column: 2
	        },
	        end: {
	          line: 123,
	          column: 3
	        }
	      },
	      '30': {
	        start: {
	          line: 122,
	          column: 4
	        },
	        end: {
	          line: 122,
	          column: 42
	        }
	      },
	      '31': {
	        start: {
	          line: 125,
	          column: 2
	        },
	        end: {
	          line: 125,
	          column: 23
	        }
	      },
	      '32': {
	        start: {
	          line: 143,
	          column: 23
	        },
	        end: {
	          line: 159,
	          column: 1
	        }
	      },
	      '33': {
	        start: {
	          line: 144,
	          column: 2
	        },
	        end: {
	          line: 156,
	          column: 3
	        }
	      },
	      '34': {
	        start: {
	          line: 145,
	          column: 20
	        },
	        end: {
	          line: 145,
	          column: 34
	        }
	      },
	      '35': {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 5
	        }
	      },
	      '36': {
	        start: {
	          line: 148,
	          column: 6
	        },
	        end: {
	          line: 154,
	          column: 7
	        }
	      },
	      '37': {
	        start: {
	          line: 149,
	          column: 23
	        },
	        end: {
	          line: 149,
	          column: 33
	        }
	      },
	      '38': {
	        start: {
	          line: 151,
	          column: 8
	        },
	        end: {
	          line: 153,
	          column: 9
	        }
	      },
	      '39': {
	        start: {
	          line: 152,
	          column: 10
	        },
	        end: {
	          line: 152,
	          column: 19
	        }
	      },
	      '40': {
	        start: {
	          line: 158,
	          column: 2
	        },
	        end: {
	          line: 158,
	          column: 12
	        }
	      },
	      '41': {
	        start: {
	          line: 171,
	          column: 18
	        },
	        end: {
	          line: 184,
	          column: 1
	        }
	      },
	      '42': {
	        start: {
	          line: 172,
	          column: 14
	        },
	        end: {
	          line: 172,
	          column: 16
	        }
	      },
	      '43': {
	        start: {
	          line: 173,
	          column: 20
	        },
	        end: {
	          line: 173,
	          column: 34
	        }
	      },
	      '44': {
	        start: {
	          line: 175,
	          column: 2
	        },
	        end: {
	          line: 181,
	          column: 3
	        }
	      },
	      '45': {
	        start: {
	          line: 176,
	          column: 17
	        },
	        end: {
	          line: 176,
	          column: 76
	        }
	      },
	      '46': {
	        start: {
	          line: 177,
	          column: 18
	        },
	        end: {
	          line: 177,
	          column: 27
	        }
	      },
	      '47': {
	        start: {
	          line: 179,
	          column: 4
	        },
	        end: {
	          line: 179,
	          column: 27
	        }
	      },
	      '48': {
	        start: {
	          line: 180,
	          column: 4
	        },
	        end: {
	          line: 180,
	          column: 23
	        }
	      },
	      '49': {
	        start: {
	          line: 183,
	          column: 2
	        },
	        end: {
	          line: 183,
	          column: 13
	        }
	      },
	      '50': {
	        start: {
	          line: 218,
	          column: 13
	        },
	        end: {
	          line: 218,
	          column: 17
	        }
	      },
	      '51': {
	        start: {
	          line: 219,
	          column: 17
	        },
	        end: {
	          line: 219,
	          column: 22
	        }
	      },
	      '52': {
	        start: {
	          line: 239,
	          column: 19
	        },
	        end: {
	          line: 298,
	          column: 3
	        }
	      },
	      '53': {
	        start: {
	          line: 240,
	          column: 4
	        },
	        end: {
	          line: 242,
	          column: 5
	        }
	      },
	      '54': {
	        start: {
	          line: 241,
	          column: 6
	        },
	        end: {
	          line: 241,
	          column: 73
	        }
	      },
	      '55': {
	        start: {
	          line: 244,
	          column: 4
	        },
	        end: {
	          line: 293,
	          column: 5
	        }
	      },
	      '56': {
	        start: {
	          line: 247,
	          column: 31
	        },
	        end: {
	          line: 247,
	          column: 72
	        }
	      },
	      '57': {
	        start: {
	          line: 248,
	          column: 27
	        },
	        end: {
	          line: 248,
	          column: 42
	        }
	      },
	      '58': {
	        start: {
	          line: 250,
	          column: 6
	        },
	        end: {
	          line: 250,
	          column: 34
	        }
	      },
	      '59': {
	        start: {
	          line: 253,
	          column: 6
	        },
	        end: {
	          line: 255,
	          column: 7
	        }
	      },
	      '60': {
	        start: {
	          line: 253,
	          column: 30
	        },
	        end: {
	          line: 253,
	          column: 48
	        }
	      },
	      '61': {
	        start: {
	          line: 254,
	          column: 8
	        },
	        end: {
	          line: 254,
	          column: 45
	        }
	      },
	      '62': {
	        start: {
	          line: 260,
	          column: 6
	        },
	        end: {
	          line: 260,
	          column: 35
	        }
	      },
	      '63': {
	        start: {
	          line: 263,
	          column: 6
	        },
	        end: {
	          line: 263,
	          column: 22
	        }
	      },
	      '64': {
	        start: {
	          line: 265,
	          column: 6
	        },
	        end: {
	          line: 273,
	          column: 9
	        }
	      },
	      '65': {
	        start: {
	          line: 275,
	          column: 6
	        },
	        end: {
	          line: 275,
	          column: 23
	        }
	      },
	      '66': {
	        start: {
	          line: 277,
	          column: 6
	        },
	        end: {
	          line: 279,
	          column: 7
	        }
	      },
	      '67': {
	        start: {
	          line: 278,
	          column: 8
	        },
	        end: {
	          line: 278,
	          column: 39
	        }
	      },
	      '68': {
	        start: {
	          line: 288,
	          column: 6
	        },
	        end: {
	          line: 292,
	          column: 7
	        }
	      },
	      '69': {
	        start: {
	          line: 289,
	          column: 8
	        },
	        end: {
	          line: 291,
	          column: 14
	        }
	      },
	      '70': {
	        start: {
	          line: 290,
	          column: 10
	        },
	        end: {
	          line: 290,
	          column: 43
	        }
	      },
	      '71': {
	        start: {
	          line: 297,
	          column: 4
	        },
	        end: {
	          line: 297,
	          column: 66
	        }
	      },
	      '72': {
	        start: {
	          line: 297,
	          column: 30
	        },
	        end: {
	          line: 297,
	          column: 56
	        }
	      },
	      '73': {
	        start: {
	          line: 301,
	          column: 2
	        },
	        end: {
	          line: 305,
	          column: 5
	        }
	      },
	      '74': {
	        start: {
	          line: 302,
	          column: 4
	        },
	        end: {
	          line: 304,
	          column: 5
	        }
	      },
	      '75': {
	        start: {
	          line: 303,
	          column: 6
	        },
	        end: {
	          line: 303,
	          column: 32
	        }
	      },
	      '76': {
	        start: {
	          line: 307,
	          column: 2
	        },
	        end: {
	          line: 307,
	          column: 30
	        }
	      },
	      '77': {
	        start: {
	          line: 308,
	          column: 2
	        },
	        end: {
	          line: 308,
	          column: 28
	        }
	      },
	      '78': {
	        start: {
	          line: 309,
	          column: 2
	        },
	        end: {
	          line: 309,
	          column: 29
	        }
	      },
	      '79': {
	        start: {
	          line: 310,
	          column: 2
	        },
	        end: {
	          line: 310,
	          column: 27
	        }
	      },
	      '80': {
	        start: {
	          line: 311,
	          column: 2
	        },
	        end: {
	          line: 311,
	          column: 41
	        }
	      },
	      '81': {
	        start: {
	          line: 324,
	          column: 2
	        },
	        end: {
	          line: 373,
	          column: 4
	        }
	      },
	      '82': {
	        start: {
	          line: 326,
	          column: 4
	        },
	        end: {
	          line: 328,
	          column: 5
	        }
	      },
	      '83': {
	        start: {
	          line: 327,
	          column: 6
	        },
	        end: {
	          line: 327,
	          column: 36
	        }
	      },
	      '84': {
	        start: {
	          line: 331,
	          column: 4
	        },
	        end: {
	          line: 344,
	          column: 5
	        }
	      },
	      '85': {
	        start: {
	          line: 337,
	          column: 6
	        },
	        end: {
	          line: 337,
	          column: 37
	        }
	      },
	      '86': {
	        start: {
	          line: 338,
	          column: 6
	        },
	        end: {
	          line: 341,
	          column: 8
	        }
	      },
	      '87': {
	        start: {
	          line: 343,
	          column: 6
	        },
	        end: {
	          line: 343,
	          column: 36
	        }
	      },
	      '88': {
	        start: {
	          line: 346,
	          column: 16
	        },
	        end: {
	          line: 346,
	          column: 51
	        }
	      },
	      '89': {
	        start: {
	          line: 353,
	          column: 4
	        },
	        end: {
	          line: 366,
	          column: 5
	        }
	      },
	      '90': {
	        start: {
	          line: 354,
	          column: 29
	        },
	        end: {
	          line: 354,
	          column: 90
	        }
	      },
	      '91': {
	        start: {
	          line: 355,
	          column: 19
	        },
	        end: {
	          line: 355,
	          column: 39
	        }
	      },
	      '92': {
	        start: {
	          line: 358,
	          column: 6
	        },
	        end: {
	          line: 361,
	          column: 7
	        }
	      },
	      '93': {
	        start: {
	          line: 359,
	          column: 8
	        },
	        end: {
	          line: 359,
	          column: 48
	        }
	      },
	      '94': {
	        start: {
	          line: 360,
	          column: 8
	        },
	        end: {
	          line: 360,
	          column: 38
	        }
	      },
	      '95': {
	        start: {
	          line: 365,
	          column: 6
	        },
	        end: {
	          line: 365,
	          column: 45
	        }
	      },
	      '96': {
	        start: {
	          line: 370,
	          column: 4
	        },
	        end: {
	          line: 370,
	          column: 51
	        }
	      },
	      '97': {
	        start: {
	          line: 372,
	          column: 4
	        },
	        end: {
	          line: 372,
	          column: 34
	        }
	      },
	      '98': {
	        start: {
	          line: 384,
	          column: 2
	        },
	        end: {
	          line: 386,
	          column: 4
	        }
	      },
	      '99': {
	        start: {
	          line: 385,
	          column: 4
	        },
	        end: {
	          line: 385,
	          column: 42
	        }
	      },
	      '100': {
	        start: {
	          line: 397,
	          column: 2
	        },
	        end: {
	          line: 415,
	          column: 4
	        }
	      },
	      '101': {
	        start: {
	          line: 398,
	          column: 4
	        },
	        end: {
	          line: 400,
	          column: 5
	        }
	      },
	      '102': {
	        start: {
	          line: 399,
	          column: 6
	        },
	        end: {
	          line: 399,
	          column: 41
	        }
	      },
	      '103': {
	        start: {
	          line: 402,
	          column: 20
	        },
	        end: {
	          line: 402,
	          column: 64
	        }
	      },
	      '104': {
	        start: {
	          line: 404,
	          column: 4
	        },
	        end: {
	          line: 412,
	          column: 5
	        }
	      },
	      '105': {
	        start: {
	          line: 405,
	          column: 21
	        },
	        end: {
	          line: 405,
	          column: 31
	        }
	      },
	      '106': {
	        start: {
	          line: 407,
	          column: 6
	        },
	        end: {
	          line: 411,
	          column: 7
	        }
	      },
	      '107': {
	        start: {
	          line: 408,
	          column: 8
	        },
	        end: {
	          line: 408,
	          column: 44
	        }
	      },
	      '108': {
	        start: {
	          line: 409,
	          column: 13
	        },
	        end: {
	          line: 411,
	          column: 7
	        }
	      },
	      '109': {
	        start: {
	          line: 410,
	          column: 8
	        },
	        end: {
	          line: 410,
	          column: 48
	        }
	      },
	      '110': {
	        start: {
	          line: 414,
	          column: 4
	        },
	        end: {
	          line: 414,
	          column: 14
	        }
	      },
	      '111': {
	        start: {
	          line: 424,
	          column: 2
	        },
	        end: {
	          line: 424,
	          column: 55
	        }
	      },
	      '112': {
	        start: {
	          line: 424,
	          column: 32
	        },
	        end: {
	          line: 424,
	          column: 54
	        }
	      },
	      '113': {
	        start: {
	          line: 433,
	          column: 2
	        },
	        end: {
	          line: 433,
	          column: 45
	        }
	      },
	      '114': {
	        start: {
	          line: 433,
	          column: 29
	        },
	        end: {
	          line: 433,
	          column: 44
	        }
	      },
	      '115': {
	        start: {
	          line: 442,
	          column: 2
	        },
	        end: {
	          line: 458,
	          column: 4
	        }
	      },
	      '116': {
	        start: {
	          line: 443,
	          column: 20
	        },
	        end: {
	          line: 443,
	          column: 42
	        }
	      },
	      '117': {
	        start: {
	          line: 445,
	          column: 4
	        },
	        end: {
	          line: 447,
	          column: 5
	        }
	      },
	      '118': {
	        start: {
	          line: 446,
	          column: 6
	        },
	        end: {
	          line: 446,
	          column: 16
	        }
	      },
	      '119': {
	        start: {
	          line: 449,
	          column: 22
	        },
	        end: {
	          line: 449,
	          column: 42
	        }
	      },
	      '120': {
	        start: {
	          line: 452,
	          column: 4
	        },
	        end: {
	          line: 454,
	          column: 5
	        }
	      },
	      '121': {
	        start: {
	          line: 453,
	          column: 6
	        },
	        end: {
	          line: 453,
	          column: 15
	        }
	      },
	      '122': {
	        start: {
	          line: 457,
	          column: 4
	        },
	        end: {
	          line: 457,
	          column: 44
	        }
	      },
	      '123': {
	        start: {
	          line: 467,
	          column: 2
	        },
	        end: {
	          line: 481,
	          column: 4
	        }
	      },
	      '124': {
	        start: {
	          line: 468,
	          column: 20
	        },
	        end: {
	          line: 468,
	          column: 42
	        }
	      },
	      '125': {
	        start: {
	          line: 470,
	          column: 4
	        },
	        end: {
	          line: 472,
	          column: 5
	        }
	      },
	      '126': {
	        start: {
	          line: 471,
	          column: 6
	        },
	        end: {
	          line: 471,
	          column: 16
	        }
	      },
	      '127': {
	        start: {
	          line: 475,
	          column: 4
	        },
	        end: {
	          line: 477,
	          column: 5
	        }
	      },
	      '128': {
	        start: {
	          line: 476,
	          column: 6
	        },
	        end: {
	          line: 476,
	          column: 34
	        }
	      },
	      '129': {
	        start: {
	          line: 480,
	          column: 4
	        },
	        end: {
	          line: 480,
	          column: 36
	        }
	      },
	      '130': {
	        start: {
	          line: 489,
	          column: 2
	        },
	        end: {
	          line: 500,
	          column: 4
	        }
	      },
	      '131': {
	        start: {
	          line: 490,
	          column: 4
	        },
	        end: {
	          line: 492,
	          column: 5
	        }
	      },
	      '132': {
	        start: {
	          line: 491,
	          column: 6
	        },
	        end: {
	          line: 491,
	          column: 13
	        }
	      },
	      '133': {
	        start: {
	          line: 493,
	          column: 20
	        },
	        end: {
	          line: 493,
	          column: 43
	        }
	      },
	      '134': {
	        start: {
	          line: 495,
	          column: 4
	        },
	        end: {
	          line: 497,
	          column: 5
	        }
	      },
	      '135': {
	        start: {
	          line: 496,
	          column: 6
	        },
	        end: {
	          line: 496,
	          column: 58
	        }
	      },
	      '136': {
	        start: {
	          line: 499,
	          column: 4
	        },
	        end: {
	          line: 499,
	          column: 32
	        }
	      },
	      '137': {
	        start: {
	          line: 508,
	          column: 2
	        },
	        end: {
	          line: 519,
	          column: 4
	        }
	      },
	      '138': {
	        start: {
	          line: 509,
	          column: 4
	        },
	        end: {
	          line: 511,
	          column: 5
	        }
	      },
	      '139': {
	        start: {
	          line: 510,
	          column: 6
	        },
	        end: {
	          line: 510,
	          column: 13
	        }
	      },
	      '140': {
	        start: {
	          line: 512,
	          column: 20
	        },
	        end: {
	          line: 512,
	          column: 62
	        }
	      },
	      '141': {
	        start: {
	          line: 514,
	          column: 4
	        },
	        end: {
	          line: 516,
	          column: 5
	        }
	      },
	      '142': {
	        start: {
	          line: 515,
	          column: 6
	        },
	        end: {
	          line: 515,
	          column: 58
	        }
	      },
	      '143': {
	        start: {
	          line: 518,
	          column: 4
	        },
	        end: {
	          line: 518,
	          column: 32
	        }
	      },
	      '144': {
	        start: {
	          line: 527,
	          column: 2
	        },
	        end: {
	          line: 539,
	          column: 4
	        }
	      },
	      '145': {
	        start: {
	          line: 528,
	          column: 4
	        },
	        end: {
	          line: 530,
	          column: 5
	        }
	      },
	      '146': {
	        start: {
	          line: 529,
	          column: 6
	        },
	        end: {
	          line: 529,
	          column: 13
	        }
	      },
	      '147': {
	        start: {
	          line: 532,
	          column: 18
	        },
	        end: {
	          line: 532,
	          column: 38
	        }
	      },
	      '148': {
	        start: {
	          line: 534,
	          column: 4
	        },
	        end: {
	          line: 538,
	          column: 5
	        }
	      },
	      '149': {
	        start: {
	          line: 535,
	          column: 22
	        },
	        end: {
	          line: 535,
	          column: 49
	        }
	      },
	      '150': {
	        start: {
	          line: 537,
	          column: 6
	        },
	        end: {
	          line: 537,
	          column: 58
	        }
	      },
	      '151': {
	        start: {
	          line: 547,
	          column: 2
	        },
	        end: {
	          line: 559,
	          column: 4
	        }
	      },
	      '152': {
	        start: {
	          line: 548,
	          column: 4
	        },
	        end: {
	          line: 550,
	          column: 5
	        }
	      },
	      '153': {
	        start: {
	          line: 549,
	          column: 6
	        },
	        end: {
	          line: 549,
	          column: 13
	        }
	      },
	      '154': {
	        start: {
	          line: 552,
	          column: 18
	        },
	        end: {
	          line: 552,
	          column: 42
	        }
	      },
	      '155': {
	        start: {
	          line: 554,
	          column: 4
	        },
	        end: {
	          line: 558,
	          column: 5
	        }
	      },
	      '156': {
	        start: {
	          line: 555,
	          column: 22
	        },
	        end: {
	          line: 555,
	          column: 49
	        }
	      },
	      '157': {
	        start: {
	          line: 557,
	          column: 6
	        },
	        end: {
	          line: 557,
	          column: 58
	        }
	      },
	      '158': {
	        start: {
	          line: 567,
	          column: 2
	        },
	        end: {
	          line: 569,
	          column: 4
	        }
	      },
	      '159': {
	        start: {
	          line: 568,
	          column: 4
	        },
	        end: {
	          line: 568,
	          column: 47
	        }
	      },
	      '160': {
	        start: {
	          line: 581,
	          column: 2
	        },
	        end: {
	          line: 593,
	          column: 4
	        }
	      },
	      '161': {
	        start: {
	          line: 582,
	          column: 4
	        },
	        end: {
	          line: 584,
	          column: 5
	        }
	      },
	      '162': {
	        start: {
	          line: 583,
	          column: 6
	        },
	        end: {
	          line: 583,
	          column: 30
	        }
	      },
	      '163': {
	        start: {
	          line: 586,
	          column: 4
	        },
	        end: {
	          line: 589,
	          column: 5
	        }
	      },
	      '164': {
	        start: {
	          line: 587,
	          column: 6
	        },
	        end: {
	          line: 587,
	          column: 75
	        }
	      },
	      '165': {
	        start: {
	          line: 588,
	          column: 6
	        },
	        end: {
	          line: 588,
	          column: 13
	        }
	      },
	      '166': {
	        start: {
	          line: 591,
	          column: 4
	        },
	        end: {
	          line: 591,
	          column: 29
	        }
	      },
	      '167': {
	        start: {
	          line: 592,
	          column: 4
	        },
	        end: {
	          line: 592,
	          column: 28
	        }
	      },
	      '168': {
	        start: {
	          line: 604,
	          column: 2
	        },
	        end: {
	          line: 625,
	          column: 4
	        }
	      },
	      '169': {
	        start: {
	          line: 607,
	          column: 4
	        },
	        end: {
	          line: 609,
	          column: 5
	        }
	      },
	      '170': {
	        start: {
	          line: 608,
	          column: 6
	        },
	        end: {
	          line: 608,
	          column: 13
	        }
	      },
	      '171': {
	        start: {
	          line: 611,
	          column: 4
	        },
	        end: {
	          line: 611,
	          column: 23
	        }
	      },
	      '172': {
	        start: {
	          line: 614,
	          column: 4
	        },
	        end: {
	          line: 616,
	          column: 5
	        }
	      },
	      '173': {
	        start: {
	          line: 615,
	          column: 6
	        },
	        end: {
	          line: 615,
	          column: 13
	        }
	      },
	      '174': {
	        start: {
	          line: 624,
	          column: 4
	        },
	        end: {
	          line: 624,
	          column: 37
	        }
	      },
	      '175': {
	        start: {
	          line: 633,
	          column: 2
	        },
	        end: {
	          line: 654,
	          column: 4
	        }
	      },
	      '176': {
	        start: {
	          line: 636,
	          column: 4
	        },
	        end: {
	          line: 638,
	          column: 5
	        }
	      },
	      '177': {
	        start: {
	          line: 637,
	          column: 6
	        },
	        end: {
	          line: 637,
	          column: 13
	        }
	      },
	      '178': {
	        start: {
	          line: 640,
	          column: 4
	        },
	        end: {
	          line: 640,
	          column: 19
	        }
	      },
	      '179': {
	        start: {
	          line: 643,
	          column: 4
	        },
	        end: {
	          line: 645,
	          column: 5
	        }
	      },
	      '180': {
	        start: {
	          line: 644,
	          column: 6
	        },
	        end: {
	          line: 644,
	          column: 13
	        }
	      },
	      '181': {
	        start: {
	          line: 653,
	          column: 4
	        },
	        end: {
	          line: 653,
	          column: 37
	        }
	      },
	      '182': {
	        start: {
	          line: 674,
	          column: 2
	        },
	        end: {
	          line: 710,
	          column: 4
	        }
	      },
	      '183': {
	        start: {
	          line: 675,
	          column: 16
	        },
	        end: {
	          line: 675,
	          column: 17
	        }
	      },
	      '184': {
	        start: {
	          line: 676,
	          column: 14
	        },
	        end: {
	          line: 676,
	          column: 18
	        }
	      },
	      '185': {
	        start: {
	          line: 680,
	          column: 4
	        },
	        end: {
	          line: 683,
	          column: 5
	        }
	      },
	      '186': {
	        start: {
	          line: 681,
	          column: 6
	        },
	        end: {
	          line: 681,
	          column: 41
	        }
	      },
	      '187': {
	        start: {
	          line: 682,
	          column: 6
	        },
	        end: {
	          line: 682,
	          column: 30
	        }
	      },
	      '188': {
	        start: {
	          line: 686,
	          column: 4
	        },
	        end: {
	          line: 688,
	          column: 5
	        }
	      },
	      '189': {
	        start: {
	          line: 687,
	          column: 6
	        },
	        end: {
	          line: 687,
	          column: 13
	        }
	      },
	      '190': {
	        start: {
	          line: 690,
	          column: 4
	        },
	        end: {
	          line: 690,
	          column: 19
	        }
	      },
	      '191': {
	        start: {
	          line: 694,
	          column: 4
	        },
	        end: {
	          line: 696,
	          column: 5
	        }
	      },
	      '192': {
	        start: {
	          line: 695,
	          column: 6
	        },
	        end: {
	          line: 695,
	          column: 54
	        }
	      },
	      '193': {
	        start: {
	          line: 699,
	          column: 4
	        },
	        end: {
	          line: 701,
	          column: 5
	        }
	      },
	      '194': {
	        start: {
	          line: 700,
	          column: 6
	        },
	        end: {
	          line: 700,
	          column: 13
	        }
	      },
	      '195': {
	        start: {
	          line: 709,
	          column: 4
	        },
	        end: {
	          line: 709,
	          column: 37
	        }
	      },
	      '196': {
	        start: {
	          line: 713,
	          column: 2
	        },
	        end: {
	          line: 719,
	          column: 3
	        }
	      },
	      '197': {
	        start: {
	          line: 714,
	          column: 4
	        },
	        end: {
	          line: 714,
	          column: 48
	        }
	      },
	      '198': {
	        start: {
	          line: 718,
	          column: 4
	        },
	        end: {
	          line: 718,
	          column: 14
	        }
	      },
	      '199': {
	        start: {
	          line: 721,
	          column: 2
	        },
	        end: {
	          line: 721,
	          column: 18
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 16,
	            column: 21
	          },
	          end: {
	            line: 16,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 16,
	            column: 32
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 16
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 33,
	            column: 32
	          },
	          end: {
	            line: 33,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 33,
	            column: 41
	          },
	          end: {
	            line: 49,
	            column: 1
	          }
	        },
	        line: 33
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 37,
	            column: 14
	          },
	          end: {
	            line: 37,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 37,
	            column: 22
	          },
	          end: {
	            line: 46,
	            column: 3
	          }
	        },
	        line: 37
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 61,
	            column: 31
	          },
	          end: {
	            line: 61,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 61,
	            column: 40
	          },
	          end: {
	            line: 67,
	            column: 1
	          }
	        },
	        line: 61
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 64,
	            column: 14
	          },
	          end: {
	            line: 64,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 22
	          },
	          end: {
	            line: 66,
	            column: 3
	          }
	        },
	        line: 64
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 82,
	            column: 31
	          },
	          end: {
	            line: 82,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 82,
	            column: 56
	          },
	          end: {
	            line: 90,
	            column: 1
	          }
	        },
	        line: 82
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 107,
	            column: 21
	          },
	          end: {
	            line: 107,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 107,
	            column: 43
	          },
	          end: {
	            line: 126,
	            column: 1
	          }
	        },
	        line: 107
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 143,
	            column: 23
	          },
	          end: {
	            line: 143,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 143,
	            column: 37
	          },
	          end: {
	            line: 159,
	            column: 1
	          }
	        },
	        line: 143
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 171,
	            column: 18
	          },
	          end: {
	            line: 171,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 171,
	            column: 27
	          },
	          end: {
	            line: 184,
	            column: 1
	          }
	        },
	        line: 171
	      },
	      '9': {
	        name: 'factory',
	        decl: {
	          start: {
	            line: 217,
	            column: 24
	          },
	          end: {
	            line: 217,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 217,
	            column: 71
	          },
	          end: {
	            line: 722,
	            column: 1
	          }
	        },
	        line: 217
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 239,
	            column: 37
	          },
	          end: {
	            line: 239,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 239,
	            column: 64
	          },
	          end: {
	            line: 298,
	            column: 3
	          }
	        },
	        line: 239
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 253,
	            column: 22
	          },
	          end: {
	            line: 253,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 253,
	            column: 30
	          },
	          end: {
	            line: 253,
	            column: 48
	          }
	        },
	        line: 253
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 289,
	            column: 26
	          },
	          end: {
	            line: 289,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 289,
	            column: 32
	          },
	          end: {
	            line: 291,
	            column: 9
	          }
	        },
	        line: 289
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 297,
	            column: 20
	          },
	          end: {
	            line: 297,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        },
	        line: 297
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 301,
	            column: 25
	          },
	          end: {
	            line: 301,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 301,
	            column: 31
	          },
	          end: {
	            line: 305,
	            column: 3
	          }
	        },
	        line: 301
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 324,
	            column: 25
	          },
	          end: {
	            line: 324,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 324,
	            column: 36
	          },
	          end: {
	            line: 373,
	            column: 3
	          }
	        },
	        line: 324
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 384,
	            column: 22
	          },
	          end: {
	            line: 384,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 384,
	            column: 33
	          },
	          end: {
	            line: 386,
	            column: 3
	          }
	        },
	        line: 384
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 397,
	            column: 21
	          },
	          end: {
	            line: 397,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 397,
	            column: 32
	          },
	          end: {
	            line: 415,
	            column: 3
	          }
	        },
	        line: 397
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 424,
	            column: 26
	          },
	          end: {
	            line: 424,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 424,
	            column: 32
	          },
	          end: {
	            line: 424,
	            column: 54
	          }
	        },
	        line: 424
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 433,
	            column: 23
	          },
	          end: {
	            line: 433,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 433,
	            column: 29
	          },
	          end: {
	            line: 433,
	            column: 44
	          }
	        },
	        line: 433
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 442,
	            column: 23
	          },
	          end: {
	            line: 442,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 442,
	            column: 29
	          },
	          end: {
	            line: 458,
	            column: 3
	          }
	        },
	        line: 442
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 467,
	            column: 27
	          },
	          end: {
	            line: 467,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 467,
	            column: 33
	          },
	          end: {
	            line: 481,
	            column: 3
	          }
	        },
	        line: 467
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 489,
	            column: 19
	          },
	          end: {
	            line: 489,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 489,
	            column: 25
	          },
	          end: {
	            line: 500,
	            column: 3
	          }
	        },
	        line: 489
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 508,
	            column: 18
	          },
	          end: {
	            line: 508,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 508,
	            column: 24
	          },
	          end: {
	            line: 519,
	            column: 3
	          }
	        },
	        line: 508
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 527,
	            column: 18
	          },
	          end: {
	            line: 527,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 527,
	            column: 24
	          },
	          end: {
	            line: 539,
	            column: 3
	          }
	        },
	        line: 527
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 547,
	            column: 22
	          },
	          end: {
	            line: 547,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 547,
	            column: 28
	          },
	          end: {
	            line: 559,
	            column: 3
	          }
	        },
	        line: 547
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 567,
	            column: 25
	          },
	          end: {
	            line: 567,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 567,
	            column: 36
	          },
	          end: {
	            line: 569,
	            column: 3
	          }
	        },
	        line: 567
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 581,
	            column: 20
	          },
	          end: {
	            line: 581,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 581,
	            column: 29
	          },
	          end: {
	            line: 593,
	            column: 3
	          }
	        },
	        line: 581
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 604,
	            column: 18
	          },
	          end: {
	            line: 604,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 604,
	            column: 31
	          },
	          end: {
	            line: 625,
	            column: 3
	          }
	        },
	        line: 604
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 633,
	            column: 21
	          },
	          end: {
	            line: 633,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 633,
	            column: 27
	          },
	          end: {
	            line: 654,
	            column: 3
	          }
	        },
	        line: 633
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 674,
	            column: 21
	          },
	          end: {
	            line: 674,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 674,
	            column: 38
	          },
	          end: {
	            line: 710,
	            column: 3
	          }
	        },
	        line: 674
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 45
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 20
	          },
	          end: {
	            line: 17,
	            column: 45
	          }
	        }],
	        line: 17
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }],
	        line: 38
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        }],
	        line: 84
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        }],
	        line: 111
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        }],
	        line: 114
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        }],
	        line: 118
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        }],
	        line: 121
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }],
	        line: 147
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        }],
	        line: 151
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 151,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 47
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 151,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 18
	          }
	        }, {
	          start: {
	            line: 151,
	            column: 22
	          },
	          end: {
	            line: 151,
	            column: 47
	          }
	        }],
	        line: 151
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 217,
	            column: 53
	          },
	          end: {
	            line: 217,
	            column: 69
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 217,
	            column: 68
	          },
	          end: {
	            line: 217,
	            column: 69
	          }
	        }],
	        line: 217
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 239,
	            column: 47
	          },
	          end: {
	            line: 239,
	            column: 59
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 239,
	            column: 58
	          },
	          end: {
	            line: 239,
	            column: 59
	          }
	        }],
	        line: 239
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        }],
	        line: 240
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }],
	        line: 244
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 247,
	            column: 31
	          },
	          end: {
	            line: 247,
	            column: 72
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 247,
	            column: 53
	          },
	          end: {
	            line: 247,
	            column: 65
	          }
	        }, {
	          start: {
	            line: 247,
	            column: 68
	          },
	          end: {
	            line: 247,
	            column: 72
	          }
	        }],
	        line: 247
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }],
	        line: 253
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 272,
	            column: 26
	          },
	          end: {
	            line: 272,
	            column: 48
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 272,
	            column: 26
	          },
	          end: {
	            line: 272,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 272,
	            column: 46
	          },
	          end: {
	            line: 272,
	            column: 48
	          }
	        }],
	        line: 272
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        }],
	        line: 277
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        }],
	        line: 288
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 297,
	            column: 52
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        }],
	        line: 297
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        }],
	        line: 302
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }],
	        line: 326
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        }],
	        line: 331
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 332,
	            column: 6
	          },
	          end: {
	            line: 335,
	            column: 25
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 332,
	            column: 6
	          },
	          end: {
	            line: 332,
	            column: 31
	          }
	        }, {
	          start: {
	            line: 333,
	            column: 6
	          },
	          end: {
	            line: 333,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 334,
	            column: 6
	          },
	          end: {
	            line: 334,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 335,
	            column: 6
	          },
	          end: {
	            line: 335,
	            column: 25
	          }
	        }],
	        line: 332
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 346,
	            column: 16
	          },
	          end: {
	            line: 346,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 346,
	            column: 16
	          },
	          end: {
	            line: 346,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 346,
	            column: 49
	          },
	          end: {
	            line: 346,
	            column: 51
	          }
	        }],
	        line: 346
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }],
	        line: 353
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        }],
	        line: 358
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 358,
	            column: 10
	          },
	          end: {
	            line: 358,
	            column: 81
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 358,
	            column: 10
	          },
	          end: {
	            line: 358,
	            column: 14
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 18
	          },
	          end: {
	            line: 358,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 49
	          },
	          end: {
	            line: 358,
	            column: 81
	          }
	        }],
	        line: 358
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        }],
	        line: 398
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 402,
	            column: 20
	          },
	          end: {
	            line: 402,
	            column: 64
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 402,
	            column: 43
	          },
	          end: {
	            line: 402,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 402,
	            column: 51
	          },
	          end: {
	            line: 402,
	            column: 64
	          }
	        }],
	        line: 402
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }],
	        line: 407
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }],
	        line: 409
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        }],
	        line: 445
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        }],
	        line: 452
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 452,
	            column: 8
	          },
	          end: {
	            line: 452,
	            column: 49
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 452,
	            column: 8
	          },
	          end: {
	            line: 452,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 452,
	            column: 28
	          },
	          end: {
	            line: 452,
	            column: 49
	          }
	        }],
	        line: 452
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        }],
	        line: 470
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }],
	        line: 475
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 475,
	            column: 8
	          },
	          end: {
	            line: 475,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 475,
	            column: 8
	          },
	          end: {
	            line: 475,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 475,
	            column: 28
	          },
	          end: {
	            line: 475,
	            column: 41
	          }
	        }],
	        line: 475
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        }],
	        line: 490
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        }],
	        line: 495
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 496,
	            column: 13
	          },
	          end: {
	            line: 496,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 496,
	            column: 13
	          },
	          end: {
	            line: 496,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 496,
	            column: 44
	          },
	          end: {
	            line: 496,
	            column: 57
	          }
	        }],
	        line: 496
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        }],
	        line: 509
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        }],
	        line: 514
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 515,
	            column: 13
	          },
	          end: {
	            line: 515,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 515,
	            column: 13
	          },
	          end: {
	            line: 515,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 515,
	            column: 44
	          },
	          end: {
	            line: 515,
	            column: 57
	          }
	        }],
	        line: 515
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        }],
	        line: 528
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        }],
	        line: 534
	      },
	      '46': {
	        loc: {
	          start: {
	            line: 537,
	            column: 13
	          },
	          end: {
	            line: 537,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 537,
	            column: 13
	          },
	          end: {
	            line: 537,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 537,
	            column: 44
	          },
	          end: {
	            line: 537,
	            column: 57
	          }
	        }],
	        line: 537
	      },
	      '47': {
	        loc: {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        }],
	        line: 548
	      },
	      '48': {
	        loc: {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        }],
	        line: 554
	      },
	      '49': {
	        loc: {
	          start: {
	            line: 557,
	            column: 13
	          },
	          end: {
	            line: 557,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 557,
	            column: 13
	          },
	          end: {
	            line: 557,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 557,
	            column: 44
	          },
	          end: {
	            line: 557,
	            column: 57
	          }
	        }],
	        line: 557
	      },
	      '50': {
	        loc: {
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        }],
	        line: 582
	      },
	      '51': {
	        loc: {
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        }],
	        line: 586
	      },
	      '52': {
	        loc: {
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        }],
	        line: 607
	      },
	      '53': {
	        loc: {
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        }],
	        line: 614
	      },
	      '54': {
	        loc: {
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        }],
	        line: 636
	      },
	      '55': {
	        loc: {
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        }],
	        line: 643
	      },
	      '56': {
	        loc: {
	          start: {
	            line: 674,
	            column: 22
	          },
	          end: {
	            line: 674,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 674,
	            column: 31
	          },
	          end: {
	            line: 674,
	            column: 33
	          }
	        }],
	        line: 674
	      },
	      '57': {
	        loc: {
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        }],
	        line: 680
	      },
	      '58': {
	        loc: {
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        }],
	        line: 686
	      },
	      '59': {
	        loc: {
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        }],
	        line: 694
	      },
	      '60': {
	        loc: {
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        }],
	        line: 699
	      },
	      '61': {
	        loc: {
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        }],
	        line: 713
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0,
	      '131': 0,
	      '132': 0,
	      '133': 0,
	      '134': 0,
	      '135': 0,
	      '136': 0,
	      '137': 0,
	      '138': 0,
	      '139': 0,
	      '140': 0,
	      '141': 0,
	      '142': 0,
	      '143': 0,
	      '144': 0,
	      '145': 0,
	      '146': 0,
	      '147': 0,
	      '148': 0,
	      '149': 0,
	      '150': 0,
	      '151': 0,
	      '152': 0,
	      '153': 0,
	      '154': 0,
	      '155': 0,
	      '156': 0,
	      '157': 0,
	      '158': 0,
	      '159': 0,
	      '160': 0,
	      '161': 0,
	      '162': 0,
	      '163': 0,
	      '164': 0,
	      '165': 0,
	      '166': 0,
	      '167': 0,
	      '168': 0,
	      '169': 0,
	      '170': 0,
	      '171': 0,
	      '172': 0,
	      '173': 0,
	      '174': 0,
	      '175': 0,
	      '176': 0,
	      '177': 0,
	      '178': 0,
	      '179': 0,
	      '180': 0,
	      '181': 0,
	      '182': 0,
	      '183': 0,
	      '184': 0,
	      '185': 0,
	      '186': 0,
	      '187': 0,
	      '188': 0,
	      '189': 0,
	      '190': 0,
	      '191': 0,
	      '192': 0,
	      '193': 0,
	      '194': 0,
	      '195': 0,
	      '196': 0,
	      '197': 0,
	      '198': 0,
	      '199': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0],
	      '11': [0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0, 0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0, 0],
	      '33': [0, 0],
	      '34': [0, 0],
	      '35': [0, 0],
	      '36': [0, 0],
	      '37': [0, 0],
	      '38': [0, 0],
	      '39': [0, 0],
	      '40': [0, 0],
	      '41': [0, 0],
	      '42': [0, 0],
	      '43': [0, 0],
	      '44': [0, 0],
	      '45': [0, 0],
	      '46': [0, 0],
	      '47': [0, 0],
	      '48': [0, 0],
	      '49': [0, 0],
	      '50': [0, 0],
	      '51': [0, 0],
	      '52': [0, 0],
	      '53': [0, 0],
	      '54': [0, 0],
	      '55': [0, 0],
	      '56': [0],
	      '57': [0, 0],
	      '58': [0, 0],
	      '59': [0, 0],
	      '60': [0, 0],
	      '61': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_ritqk1zyq.s[0]++;

	var isItemObject = function isItemObject(value) {
	  cov_ritqk1zyq.f[0]++;
	  cov_ritqk1zyq.s[1]++;
	  return (cov_ritqk1zyq.b[0][0]++, !!value) && (cov_ritqk1zyq.b[0][1]++, typeof value === 'object');
	};

	cov_ritqk1zyq.s[2]++;

	var transformPrimitiveItems = function transformPrimitiveItems(arr) {
	  cov_ritqk1zyq.f[1]++;
	  var list = (cov_ritqk1zyq.s[3]++, []);
	  var tempItem;
	  cov_ritqk1zyq.s[4]++;
	  arr.forEach(function (item) {
	    cov_ritqk1zyq.f[2]++;
	    cov_ritqk1zyq.s[5]++;

	    if (!isItemObject(item)) {
	      cov_ritqk1zyq.b[1][0]++;
	      cov_ritqk1zyq.s[6]++;
	      tempItem = Object(item);
	      cov_ritqk1zyq.s[7]++;
	      tempItem.originalValue = item;
	    } else {
	      cov_ritqk1zyq.b[1][1]++;
	      cov_ritqk1zyq.s[8]++;
	      tempItem = item;
	    }

	    cov_ritqk1zyq.s[9]++;
	    list.push(tempItem);
	  });
	  cov_ritqk1zyq.s[10]++;
	  return list;
	};

	cov_ritqk1zyq.s[11]++;

	var generatePlaylistItemId = function generatePlaylistItemId(arr) {
	  cov_ritqk1zyq.f[3]++;
	  var guid = (cov_ritqk1zyq.s[12]++, 1);
	  cov_ritqk1zyq.s[13]++;
	  arr.forEach(function (item) {
	    cov_ritqk1zyq.f[4]++;
	    cov_ritqk1zyq.s[14]++;
	    item.playlistItemId_ = guid++;
	  });
	};

	cov_ritqk1zyq.s[15]++;

	var indexInPlaylistItemIds = function indexInPlaylistItemIds(list, currentItemId) {
	  cov_ritqk1zyq.f[5]++;
	  cov_ritqk1zyq.s[16]++;

	  for (var i = 0; i < list.length; i++) {
	    cov_ritqk1zyq.s[17]++;

	    if (list[i].playlistItemId_ === currentItemId) {
	      cov_ritqk1zyq.b[2][0]++;
	      cov_ritqk1zyq.s[18]++;
	      return i;
	    } else {
	      cov_ritqk1zyq.b[2][1]++;
	    }
	  }

	  cov_ritqk1zyq.s[19]++;
	  return -1;
	};

	cov_ritqk1zyq.s[20]++;

	var sourceEquals = function sourceEquals(source1, source2) {
	  cov_ritqk1zyq.f[6]++;
	  var src1 = (cov_ritqk1zyq.s[21]++, source1);
	  var src2 = (cov_ritqk1zyq.s[22]++, source2);
	  cov_ritqk1zyq.s[23]++;

	  if (typeof source1 === 'object') {
	    cov_ritqk1zyq.b[3][0]++;
	    cov_ritqk1zyq.s[24]++;
	    src1 = source1.src;
	  } else {
	    cov_ritqk1zyq.b[3][1]++;
	  }

	  cov_ritqk1zyq.s[25]++;

	  if (typeof source2 === 'object') {
	    cov_ritqk1zyq.b[4][0]++;
	    cov_ritqk1zyq.s[26]++;
	    src2 = source2.src;
	  } else {
	    cov_ritqk1zyq.b[4][1]++;
	  }

	  cov_ritqk1zyq.s[27]++;

	  if (/^\/\//.test(src1)) {
	    cov_ritqk1zyq.b[5][0]++;
	    cov_ritqk1zyq.s[28]++;
	    src2 = src2.slice(src2.indexOf('//'));
	  } else {
	    cov_ritqk1zyq.b[5][1]++;
	  }

	  cov_ritqk1zyq.s[29]++;

	  if (/^\/\//.test(src2)) {
	    cov_ritqk1zyq.b[6][0]++;
	    cov_ritqk1zyq.s[30]++;
	    src1 = src1.slice(src1.indexOf('//'));
	  } else {
	    cov_ritqk1zyq.b[6][1]++;
	  }

	  cov_ritqk1zyq.s[31]++;
	  return src1 === src2;
	};

	cov_ritqk1zyq.s[32]++;

	var indexInSources = function indexInSources(arr, src) {
	  cov_ritqk1zyq.f[7]++;
	  cov_ritqk1zyq.s[33]++;

	  for (var i = 0; i < arr.length; i++) {
	    var sources = (cov_ritqk1zyq.s[34]++, arr[i].sources);
	    cov_ritqk1zyq.s[35]++;

	    if (Array.isArray(sources)) {
	      cov_ritqk1zyq.b[7][0]++;
	      cov_ritqk1zyq.s[36]++;

	      for (var j = 0; j < sources.length; j++) {
	        var source = (cov_ritqk1zyq.s[37]++, sources[j]);
	        cov_ritqk1zyq.s[38]++;

	        if ((cov_ritqk1zyq.b[9][0]++, source) && (cov_ritqk1zyq.b[9][1]++, sourceEquals(source, src))) {
	          cov_ritqk1zyq.b[8][0]++;
	          cov_ritqk1zyq.s[39]++;
	          return i;
	        } else {
	          cov_ritqk1zyq.b[8][1]++;
	        }
	      }
	    } else {
	      cov_ritqk1zyq.b[7][1]++;
	    }
	  }

	  cov_ritqk1zyq.s[40]++;
	  return -1;
	};

	cov_ritqk1zyq.s[41]++;

	var randomize = function randomize(arr) {
	  cov_ritqk1zyq.f[8]++;
	  var index = (cov_ritqk1zyq.s[42]++, -1);
	  var lastIndex = (cov_ritqk1zyq.s[43]++, arr.length - 1);
	  cov_ritqk1zyq.s[44]++;

	  while (++index < arr.length) {
	    var rand = (cov_ritqk1zyq.s[45]++, index + Math.floor(Math.random() * (lastIndex - index + 1)));
	    var value = (cov_ritqk1zyq.s[46]++, arr[rand]);
	    cov_ritqk1zyq.s[47]++;
	    arr[rand] = arr[index];
	    cov_ritqk1zyq.s[48]++;
	    arr[index] = value;
	  }

	  cov_ritqk1zyq.s[49]++;
	  return arr;
	};

	function factory(player, initialList, initialIndex) {
	  if (initialIndex === void 0) {
	    initialIndex = (cov_ritqk1zyq.b[10][0]++, 0);
	  }

	  cov_ritqk1zyq.f[9]++;
	  var list = (cov_ritqk1zyq.s[50]++, null);
	  var changing = (cov_ritqk1zyq.s[51]++, false);
	  var playlist = (cov_ritqk1zyq.s[52]++, player.playlist = function (newList, newIndex) {
	    if (newIndex === void 0) {
	      newIndex = (cov_ritqk1zyq.b[11][0]++, 0);
	    }

	    cov_ritqk1zyq.f[10]++;
	    cov_ritqk1zyq.s[53]++;

	    if (changing) {
	      cov_ritqk1zyq.b[12][0]++;
	      cov_ritqk1zyq.s[54]++;
	      throw new Error('do not call playlist() during a playlist change');
	    } else {
	      cov_ritqk1zyq.b[12][1]++;
	    }

	    cov_ritqk1zyq.s[55]++;

	    if (Array.isArray(newList)) {
	      cov_ritqk1zyq.b[13][0]++;
	      var previousPlaylist = (cov_ritqk1zyq.s[56]++, Array.isArray(list) ? (cov_ritqk1zyq.b[14][0]++, list.slice()) : (cov_ritqk1zyq.b[14][1]++, null));
	      var nextPlaylist = (cov_ritqk1zyq.s[57]++, newList.slice());
	      cov_ritqk1zyq.s[58]++;
	      list = nextPlaylist.slice();
	      cov_ritqk1zyq.s[59]++;

	      if (list.filter(function (item) {
	        cov_ritqk1zyq.f[11]++;
	        cov_ritqk1zyq.s[60]++;
	        return isItemObject(item);
	      }).length !== list.length) {
	        cov_ritqk1zyq.b[15][0]++;
	        cov_ritqk1zyq.s[61]++;
	        list = transformPrimitiveItems(list);
	      } else {
	        cov_ritqk1zyq.b[15][1]++;
	      }

	      cov_ritqk1zyq.s[62]++;
	      generatePlaylistItemId(list);
	      cov_ritqk1zyq.s[63]++;
	      changing = true;
	      cov_ritqk1zyq.s[64]++;
	      player.trigger({
	        type: 'duringplaylistchange',
	        nextIndex: newIndex,
	        nextPlaylist: nextPlaylist,
	        previousIndex: playlist.currentIndex_,
	        previousPlaylist: (cov_ritqk1zyq.b[16][0]++, previousPlaylist) || (cov_ritqk1zyq.b[16][1]++, [])
	      });
	      cov_ritqk1zyq.s[65]++;
	      changing = false;
	      cov_ritqk1zyq.s[66]++;

	      if (newIndex !== -1) {
	        cov_ritqk1zyq.b[17][0]++;
	        cov_ritqk1zyq.s[67]++;
	        playlist.currentItem(newIndex);
	      } else {
	        cov_ritqk1zyq.b[17][1]++;
	      }

	      cov_ritqk1zyq.s[68]++;

	      if (previousPlaylist) {
	        cov_ritqk1zyq.b[18][0]++;
	        cov_ritqk1zyq.s[69]++;
	        player.setTimeout(function () {
	          cov_ritqk1zyq.f[12]++;
	          cov_ritqk1zyq.s[70]++;
	          player.trigger('playlistchange');
	        }, 0);
	      } else {
	        cov_ritqk1zyq.b[18][1]++;
	      }
	    } else {
	      cov_ritqk1zyq.b[13][1]++;
	    }

	    cov_ritqk1zyq.s[71]++;
	    return list.map(function (item) {
	      cov_ritqk1zyq.f[13]++;
	      cov_ritqk1zyq.s[72]++;
	      return (cov_ritqk1zyq.b[19][0]++, item.originalValue) || (cov_ritqk1zyq.b[19][1]++, item);
	    }).slice();
	  });
	  cov_ritqk1zyq.s[73]++;
	  player.on('loadstart', function () {
	    cov_ritqk1zyq.f[14]++;
	    cov_ritqk1zyq.s[74]++;

	    if (playlist.currentItem() === -1) {
	      cov_ritqk1zyq.b[20][0]++;
	      cov_ritqk1zyq.s[75]++;
	      reset(player);
	    } else {
	      cov_ritqk1zyq.b[20][1]++;
	    }
	  });
	  cov_ritqk1zyq.s[76]++;
	  playlist.currentIndex_ = -1;
	  cov_ritqk1zyq.s[77]++;
	  playlist.player_ = player;
	  cov_ritqk1zyq.s[78]++;
	  playlist.autoadvance_ = {};
	  cov_ritqk1zyq.s[79]++;
	  playlist.repeat_ = false;
	  cov_ritqk1zyq.s[80]++;
	  playlist.currentPlaylistItemId_ = null;
	  cov_ritqk1zyq.s[81]++;

	  playlist.currentItem = function (index) {
	    cov_ritqk1zyq.f[15]++;
	    cov_ritqk1zyq.s[82]++;

	    if (changing) {
	      cov_ritqk1zyq.b[21][0]++;
	      cov_ritqk1zyq.s[83]++;
	      return playlist.currentIndex_;
	    } else {
	      cov_ritqk1zyq.b[21][1]++;
	    }

	    cov_ritqk1zyq.s[84]++;

	    if ((cov_ritqk1zyq.b[23][0]++, typeof index === 'number') && (cov_ritqk1zyq.b[23][1]++, playlist.currentIndex_ !== index) && (cov_ritqk1zyq.b[23][2]++, index >= 0) && (cov_ritqk1zyq.b[23][3]++, index < list.length)) {
	      cov_ritqk1zyq.b[22][0]++;
	      cov_ritqk1zyq.s[85]++;
	      playlist.currentIndex_ = index;
	      cov_ritqk1zyq.s[86]++;
	      playItem(playlist.player_, list[playlist.currentIndex_]);
	      cov_ritqk1zyq.s[87]++;
	      return playlist.currentIndex_;
	    } else {
	      cov_ritqk1zyq.b[22][1]++;
	    }

	    var src = (cov_ritqk1zyq.s[88]++, (cov_ritqk1zyq.b[24][0]++, playlist.player_.currentSrc()) || (cov_ritqk1zyq.b[24][1]++, ''));
	    cov_ritqk1zyq.s[89]++;

	    if (playlist.currentPlaylistItemId_) {
	      cov_ritqk1zyq.b[25][0]++;
	      var indexInItemIds = (cov_ritqk1zyq.s[90]++, indexInPlaylistItemIds(list, playlist.currentPlaylistItemId_));
	      var item = (cov_ritqk1zyq.s[91]++, list[indexInItemIds]);
	      cov_ritqk1zyq.s[92]++;

	      if ((cov_ritqk1zyq.b[27][0]++, item) && (cov_ritqk1zyq.b[27][1]++, Array.isArray(item.sources)) && (cov_ritqk1zyq.b[27][2]++, indexInSources([item], src) > -1)) {
	        cov_ritqk1zyq.b[26][0]++;
	        cov_ritqk1zyq.s[93]++;
	        playlist.currentIndex_ = indexInItemIds;
	        cov_ritqk1zyq.s[94]++;
	        return playlist.currentIndex_;
	      } else {
	        cov_ritqk1zyq.b[26][1]++;
	      }

	      cov_ritqk1zyq.s[95]++;
	      playlist.currentPlaylistItemId_ = null;
	    } else {
	      cov_ritqk1zyq.b[25][1]++;
	    }

	    cov_ritqk1zyq.s[96]++;
	    playlist.currentIndex_ = playlist.indexOf(src);
	    cov_ritqk1zyq.s[97]++;
	    return playlist.currentIndex_;
	  };

	  cov_ritqk1zyq.s[98]++;

	  playlist.contains = function (value) {
	    cov_ritqk1zyq.f[16]++;
	    cov_ritqk1zyq.s[99]++;
	    return playlist.indexOf(value) !== -1;
	  };

	  cov_ritqk1zyq.s[100]++;

	  playlist.indexOf = function (value) {
	    cov_ritqk1zyq.f[17]++;
	    cov_ritqk1zyq.s[101]++;

	    if (typeof value === 'string') {
	      cov_ritqk1zyq.b[28][0]++;
	      cov_ritqk1zyq.s[102]++;
	      return indexInSources(list, value);
	    } else {
	      cov_ritqk1zyq.b[28][1]++;
	    }

	    var sources = (cov_ritqk1zyq.s[103]++, Array.isArray(value) ? (cov_ritqk1zyq.b[29][0]++, value) : (cov_ritqk1zyq.b[29][1]++, value.sources));
	    cov_ritqk1zyq.s[104]++;

	    for (var i = 0; i < sources.length; i++) {
	      var source = (cov_ritqk1zyq.s[105]++, sources[i]);
	      cov_ritqk1zyq.s[106]++;

	      if (typeof source === 'string') {
	        cov_ritqk1zyq.b[30][0]++;
	        cov_ritqk1zyq.s[107]++;
	        return indexInSources(list, source);
	      } else {
	        cov_ritqk1zyq.b[30][1]++;
	        cov_ritqk1zyq.s[108]++;

	        if (source.src) {
	          cov_ritqk1zyq.b[31][0]++;
	          cov_ritqk1zyq.s[109]++;
	          return indexInSources(list, source.src);
	        } else {
	          cov_ritqk1zyq.b[31][1]++;
	        }
	      }
	    }

	    cov_ritqk1zyq.s[110]++;
	    return -1;
	  };

	  cov_ritqk1zyq.s[111]++;

	  playlist.currentIndex = function () {
	    cov_ritqk1zyq.f[18]++;
	    cov_ritqk1zyq.s[112]++;
	    return playlist.currentItem();
	  };

	  cov_ritqk1zyq.s[113]++;

	  playlist.lastIndex = function () {
	    cov_ritqk1zyq.f[19]++;
	    cov_ritqk1zyq.s[114]++;
	    return list.length - 1;
	  };

	  cov_ritqk1zyq.s[115]++;

	  playlist.nextIndex = function () {
	    cov_ritqk1zyq.f[20]++;
	    var current = (cov_ritqk1zyq.s[116]++, playlist.currentItem());
	    cov_ritqk1zyq.s[117]++;

	    if (current === -1) {
	      cov_ritqk1zyq.b[32][0]++;
	      cov_ritqk1zyq.s[118]++;
	      return -1;
	    } else {
	      cov_ritqk1zyq.b[32][1]++;
	    }

	    var lastIndex = (cov_ritqk1zyq.s[119]++, playlist.lastIndex());
	    cov_ritqk1zyq.s[120]++;

	    if ((cov_ritqk1zyq.b[34][0]++, playlist.repeat_) && (cov_ritqk1zyq.b[34][1]++, current === lastIndex)) {
	      cov_ritqk1zyq.b[33][0]++;
	      cov_ritqk1zyq.s[121]++;
	      return 0;
	    } else {
	      cov_ritqk1zyq.b[33][1]++;
	    }

	    cov_ritqk1zyq.s[122]++;
	    return Math.min(current + 1, lastIndex);
	  };

	  cov_ritqk1zyq.s[123]++;

	  playlist.previousIndex = function () {
	    cov_ritqk1zyq.f[21]++;
	    var current = (cov_ritqk1zyq.s[124]++, playlist.currentItem());
	    cov_ritqk1zyq.s[125]++;

	    if (current === -1) {
	      cov_ritqk1zyq.b[35][0]++;
	      cov_ritqk1zyq.s[126]++;
	      return -1;
	    } else {
	      cov_ritqk1zyq.b[35][1]++;
	    }

	    cov_ritqk1zyq.s[127]++;

	    if ((cov_ritqk1zyq.b[37][0]++, playlist.repeat_) && (cov_ritqk1zyq.b[37][1]++, current === 0)) {
	      cov_ritqk1zyq.b[36][0]++;
	      cov_ritqk1zyq.s[128]++;
	      return playlist.lastIndex();
	    } else {
	      cov_ritqk1zyq.b[36][1]++;
	    }

	    cov_ritqk1zyq.s[129]++;
	    return Math.max(current - 1, 0);
	  };

	  cov_ritqk1zyq.s[130]++;

	  playlist.first = function () {
	    cov_ritqk1zyq.f[22]++;
	    cov_ritqk1zyq.s[131]++;

	    if (changing) {
	      cov_ritqk1zyq.b[38][0]++;
	      cov_ritqk1zyq.s[132]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[38][1]++;
	    }

	    var newItem = (cov_ritqk1zyq.s[133]++, playlist.currentItem(0));
	    cov_ritqk1zyq.s[134]++;

	    if (list.length) {
	      cov_ritqk1zyq.b[39][0]++;
	      cov_ritqk1zyq.s[135]++;
	      return (cov_ritqk1zyq.b[40][0]++, list[newItem].originalValue) || (cov_ritqk1zyq.b[40][1]++, list[newItem]);
	    } else {
	      cov_ritqk1zyq.b[39][1]++;
	    }

	    cov_ritqk1zyq.s[136]++;
	    playlist.currentIndex_ = -1;
	  };

	  cov_ritqk1zyq.s[137]++;

	  playlist.last = function () {
	    cov_ritqk1zyq.f[23]++;
	    cov_ritqk1zyq.s[138]++;

	    if (changing) {
	      cov_ritqk1zyq.b[41][0]++;
	      cov_ritqk1zyq.s[139]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[41][1]++;
	    }

	    var newItem = (cov_ritqk1zyq.s[140]++, playlist.currentItem(playlist.lastIndex()));
	    cov_ritqk1zyq.s[141]++;

	    if (list.length) {
	      cov_ritqk1zyq.b[42][0]++;
	      cov_ritqk1zyq.s[142]++;
	      return (cov_ritqk1zyq.b[43][0]++, list[newItem].originalValue) || (cov_ritqk1zyq.b[43][1]++, list[newItem]);
	    } else {
	      cov_ritqk1zyq.b[42][1]++;
	    }

	    cov_ritqk1zyq.s[143]++;
	    playlist.currentIndex_ = -1;
	  };

	  cov_ritqk1zyq.s[144]++;

	  playlist.next = function () {
	    cov_ritqk1zyq.f[24]++;
	    cov_ritqk1zyq.s[145]++;

	    if (changing) {
	      cov_ritqk1zyq.b[44][0]++;
	      cov_ritqk1zyq.s[146]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[44][1]++;
	    }

	    var index = (cov_ritqk1zyq.s[147]++, playlist.nextIndex());
	    cov_ritqk1zyq.s[148]++;

	    if (index !== playlist.currentIndex_) {
	      cov_ritqk1zyq.b[45][0]++;
	      var newItem = (cov_ritqk1zyq.s[149]++, playlist.currentItem(index));
	      cov_ritqk1zyq.s[150]++;
	      return (cov_ritqk1zyq.b[46][0]++, list[newItem].originalValue) || (cov_ritqk1zyq.b[46][1]++, list[newItem]);
	    } else {
	      cov_ritqk1zyq.b[45][1]++;
	    }
	  };

	  cov_ritqk1zyq.s[151]++;

	  playlist.previous = function () {
	    cov_ritqk1zyq.f[25]++;
	    cov_ritqk1zyq.s[152]++;

	    if (changing) {
	      cov_ritqk1zyq.b[47][0]++;
	      cov_ritqk1zyq.s[153]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[47][1]++;
	    }

	    var index = (cov_ritqk1zyq.s[154]++, playlist.previousIndex());
	    cov_ritqk1zyq.s[155]++;

	    if (index !== playlist.currentIndex_) {
	      cov_ritqk1zyq.b[48][0]++;
	      var newItem = (cov_ritqk1zyq.s[156]++, playlist.currentItem(index));
	      cov_ritqk1zyq.s[157]++;
	      return (cov_ritqk1zyq.b[49][0]++, list[newItem].originalValue) || (cov_ritqk1zyq.b[49][1]++, list[newItem]);
	    } else {
	      cov_ritqk1zyq.b[48][1]++;
	    }
	  };

	  cov_ritqk1zyq.s[158]++;

	  playlist.autoadvance = function (delay) {
	    cov_ritqk1zyq.f[26]++;
	    cov_ritqk1zyq.s[159]++;
	    setup(playlist.player_, delay);
	  };

	  cov_ritqk1zyq.s[160]++;

	  playlist.repeat = function (val) {
	    cov_ritqk1zyq.f[27]++;
	    cov_ritqk1zyq.s[161]++;

	    if (val === undefined) {
	      cov_ritqk1zyq.b[50][0]++;
	      cov_ritqk1zyq.s[162]++;
	      return playlist.repeat_;
	    } else {
	      cov_ritqk1zyq.b[50][1]++;
	    }

	    cov_ritqk1zyq.s[163]++;

	    if (typeof val !== 'boolean') {
	      cov_ritqk1zyq.b[51][0]++;
	      cov_ritqk1zyq.s[164]++;
	      videojs.log.error('videojs-playlist: Invalid value for repeat', val);
	      cov_ritqk1zyq.s[165]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[51][1]++;
	    }

	    cov_ritqk1zyq.s[166]++;
	    playlist.repeat_ = !!val;
	    cov_ritqk1zyq.s[167]++;
	    return playlist.repeat_;
	  };

	  cov_ritqk1zyq.s[168]++;

	  playlist.sort = function (compare) {
	    cov_ritqk1zyq.f[28]++;
	    cov_ritqk1zyq.s[169]++;

	    if (!list.length) {
	      cov_ritqk1zyq.b[52][0]++;
	      cov_ritqk1zyq.s[170]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[52][1]++;
	    }

	    cov_ritqk1zyq.s[171]++;
	    list.sort(compare);
	    cov_ritqk1zyq.s[172]++;

	    if (changing) {
	      cov_ritqk1zyq.b[53][0]++;
	      cov_ritqk1zyq.s[173]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[53][1]++;
	    }

	    cov_ritqk1zyq.s[174]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[175]++;

	  playlist.reverse = function () {
	    cov_ritqk1zyq.f[29]++;
	    cov_ritqk1zyq.s[176]++;

	    if (!list.length) {
	      cov_ritqk1zyq.b[54][0]++;
	      cov_ritqk1zyq.s[177]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[54][1]++;
	    }

	    cov_ritqk1zyq.s[178]++;
	    list.reverse();
	    cov_ritqk1zyq.s[179]++;

	    if (changing) {
	      cov_ritqk1zyq.b[55][0]++;
	      cov_ritqk1zyq.s[180]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[55][1]++;
	    }

	    cov_ritqk1zyq.s[181]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[182]++;

	  playlist.shuffle = function (_temp) {
	    var _ref = _temp === void 0 ? (cov_ritqk1zyq.b[56][0]++, {}) : _temp,
	        rest = _ref.rest;

	    cov_ritqk1zyq.f[30]++;
	    var index = (cov_ritqk1zyq.s[183]++, 0);
	    var arr = (cov_ritqk1zyq.s[184]++, list);
	    cov_ritqk1zyq.s[185]++;

	    if (rest) {
	      cov_ritqk1zyq.b[57][0]++;
	      cov_ritqk1zyq.s[186]++;
	      index = playlist.currentIndex_ + 1;
	      cov_ritqk1zyq.s[187]++;
	      arr = list.slice(index);
	    } else {
	      cov_ritqk1zyq.b[57][1]++;
	    }

	    cov_ritqk1zyq.s[188]++;

	    if (arr.length <= 1) {
	      cov_ritqk1zyq.b[58][0]++;
	      cov_ritqk1zyq.s[189]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[58][1]++;
	    }

	    cov_ritqk1zyq.s[190]++;
	    randomize(arr);
	    cov_ritqk1zyq.s[191]++;

	    if (rest) {
	      var _list;

	      cov_ritqk1zyq.b[59][0]++;
	      cov_ritqk1zyq.s[192]++;

	      (_list = list).splice.apply(_list, [index, arr.length].concat(arr));
	    } else {
	      cov_ritqk1zyq.b[59][1]++;
	    }

	    cov_ritqk1zyq.s[193]++;

	    if (changing) {
	      cov_ritqk1zyq.b[60][0]++;
	      cov_ritqk1zyq.s[194]++;
	      return;
	    } else {
	      cov_ritqk1zyq.b[60][1]++;
	    }

	    cov_ritqk1zyq.s[195]++;
	    player.trigger('playlistsorted');
	  };

	  cov_ritqk1zyq.s[196]++;

	  if (Array.isArray(initialList)) {
	    cov_ritqk1zyq.b[61][0]++;
	    cov_ritqk1zyq.s[197]++;
	    playlist(initialList.slice(), initialIndex);
	  } else {
	    cov_ritqk1zyq.b[61][1]++;
	    cov_ritqk1zyq.s[198]++;
	    list = [];
	  }

	  cov_ritqk1zyq.s[199]++;
	  return playlist;
	}

	var version = "4.3.1";

	var cov_27s3iole53 = function () {
	  var path = '/Users/poneill/dev/videojs-playlist/src/plugin.js',
	      hash = '8927a54cb3d4505b01072a1eef16603c710e4a25',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/poneill/dev/videojs-playlist/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 23
	        },
	        end: {
	          line: 6,
	          column: 63
	        }
	      },
	      '1': {
	        start: {
	          line: 18,
	          column: 15
	        },
	        end: {
	          line: 20,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 19,
	          column: 34
	        }
	      },
	      '3': {
	        start: {
	          line: 22,
	          column: 0
	        },
	        end: {
	          line: 22,
	          column: 35
	        }
	      },
	      '4': {
	        start: {
	          line: 24,
	          column: 0
	        },
	        end: {
	          line: 24,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 18,
	            column: 15
	          },
	          end: {
	            line: 18,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 36
	          },
	          end: {
	            line: 20,
	            column: 1
	          }
	        },
	        line: 18
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 6,
	            column: 49
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        }],
	        line: 6
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var registerPlugin = (cov_27s3iole53.s[0]++, (cov_27s3iole53.b[0][0]++, videojs.registerPlugin) || (cov_27s3iole53.b[0][1]++, videojs.plugin));
	cov_27s3iole53.s[1]++;

	var plugin = function plugin(list, item) {
	  cov_27s3iole53.f[0]++;
	  cov_27s3iole53.s[2]++;
	  factory(this, list, item);
	};

	cov_27s3iole53.s[3]++;
	registerPlugin('playlist', plugin);
	cov_27s3iole53.s[4]++;
	plugin.VERSION = version;

	var minDoc = {};

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	/**
	 * Destroy a fixture player.
	 *
	 * @param  {Object} context
	 *         A testing context.
	 */

	function destroyFixturePlayer(context) {
	  context.player.dispose();
	}
	/**
	 * Create a fixture player.
	 *
	 * @param  {Object} context
	 *         A testing context.
	 */

	function createFixturePlayer(context) {
	  context.video = document_1.createElement('video');
	  context.fixture = document_1.querySelector('#qunit-fixture');
	  context.fixture.appendChild(context.video);
	  context.playerIsReady = false;
	  context.player = videojs(context.video, {}, function () {
	    context.playerIsReady = true;
	  });
	  context.player.playlist();
	}

	var samplePlaylist = [{
	  sources: [{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://www.videojs.com/img/poster.jpg'
	}];
	QUnit.module('current-item', {
	  beforeEach: function beforeEach() {
	    this.clock = sinon.useFakeTimers();
	    createFixturePlayer(this);
	  },
	  afterEach: function afterEach() {
	    destroyFixturePlayer(this);
	    this.clock.restore();
	  }
	}, function () {
	  QUnit.module('without a playlist', function () {
	    QUnit.test('player without a source', function (assert) {
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() after tech ready');
	    });
	    QUnit.test('player with a source', function (assert) {
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() after tech ready');
	    });
	  });
	  QUnit.module('with a playlist', function () {
	    QUnit.test('set new source by calling currentItem()', function (assert) {
	      this.player.playlist(samplePlaylist);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() changes the current item');
	    });
	    QUnit.test('set a new source via src()', function (assert) {
	      this.player.playlist(samplePlaylist);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), 2, 'src() changes the current item');
	    });
	    QUnit.test('set a new source via src() - source is NOT in the playlist', function (assert) {
	      // Populate the player with a playlist without oceans.mp4
	      this.player.playlist(samplePlaylist.slice(0, 2));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'src() changes the current item');
	    });
	  });
	  QUnit.module('duplicate sources playlist', function () {
	    QUnit.test('set new sources by calling currentItem()', function (assert) {
	      // Populate the player with a playlist with another sintel on the end.
	      this.player.playlist(samplePlaylist.concat([{
	        sources: [{
	          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	          type: 'video/mp4'
	        }],
	        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	      }]));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready'); // Set the playlist to the last item.

	      this.player.playlist.currentItem(3);
	      assert.strictEqual(this.player.playlist.currentItem(), 3, 'currentItem() matches the duplicated item that was actually selected'); // Set the playlist back to the first item (also sintel).

	      this.player.playlist.currentItem(0);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() matches the duplicated item that was actually selected'); // Set the playlist to the second item (NOT sintel).

	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() is correct');
	    });
	    QUnit.test('set new source by calling src()', function (assert) {
	      // Populate the player with a playlist with another sintel on the end.
	      this.player.playlist(samplePlaylist.concat([{
	        sources: [{
	          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	          type: 'video/mp4'
	        }],
	        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	      }]));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready'); // Set the playlist to the second item (NOT sintel).

	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() acted as a setter');
	      this.player.src({
	        src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() defaults to the first playlist item that matches the current source');
	    });
	  });
	});

	QUnit.module('play-item');
	QUnit.test('clearTracks will try and remove all tracks', function (assert) {
	  var player = proxy();
	  var remoteTracks = [1, 2, 3];
	  var removedTracks = [];

	  player.remoteTextTracks = function () {
	    return remoteTracks;
	  };

	  player.removeRemoteTextTrack = function (tt) {
	    removedTracks.push(tt);
	  };

	  clearTracks(player);
	  assert.deepEqual(removedTracks.sort(), remoteTracks.sort(), 'the removed tracks are equivalent to our remote tracks');
	});
	QUnit.test('will not try to play if paused', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not reply on paused');
	});
	QUnit.test('will try to play if not paused', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit.test('will not try to play if paused and not ended', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not replaye on paused and not ended');
	});
	QUnit.test('will try to play if paused and ended', function (assert) {
	  var player = proxy();
	  var tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit.test('fires "beforeplaylistitem" and "playlistitem"', function (assert) {
	  var player = proxy();
	  var beforeSpy = sinon.spy();
	  var spy = sinon.spy();
	  player.on('beforeplaylistitem', beforeSpy);
	  player.on('playlistitem', spy);
	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.strictEqual(beforeSpy.callCount, 1);
	  assert.strictEqual(spy.callCount, 1);
	});

	var videoList = [{
	  sources: [{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://www.videojs.com/img/poster.jpg'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/video/poster.png'
	}];
	QUnit.module('playlist-maker', {
	  beforeEach: function beforeEach() {
	    this.clock = sinon.useFakeTimers();
	  },
	  afterEach: function afterEach() {
	    this.clock.restore();
	  }
	});
	QUnit.test('playlistMaker takes a player and a list and returns a playlist', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(typeof playlist, 'function', 'playlist is a function');
	  assert.equal(typeof playlist.autoadvance, 'function', 'we have a autoadvance function');
	  assert.equal(typeof playlist.currentItem, 'function', 'we have a currentItem function');
	  assert.equal(typeof playlist.first, 'function', 'we have a first function');
	  assert.equal(typeof playlist.indexOf, 'function', 'we have a indexOf function');
	  assert.equal(typeof playlist.next, 'function', 'we have a next function');
	  assert.equal(typeof playlist.previous, 'function', 'we have a previous function');
	});
	QUnit.test('playlistMaker can either take nothing or an Array as its first argument', function (assert) {
	  var playlist1 = factory(proxy());
	  var playlist2 = factory(proxy(), 'foo');
	  var playlist3 = factory(proxy(), {
	    foo: [1, 2, 3]
	  });
	  assert.deepEqual(playlist1(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist2(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist3(), [], 'if given no initial array, default to an empty array');
	});
	QUnit.test('playlist() is a getter and setter for the list', function (assert) {
	  var playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist(), [1, 2, 3], 'equal to input list');
	  assert.deepEqual(playlist([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'equal to input list, arguments ignored');
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'equal to input list');
	  var list = playlist();
	  list.unshift(10);
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	  assert.notDeepEqual(playlist(), [10, 1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	});
	QUnit.test('playlist() should only accept an Array as a new playlist', function (assert) {
	  var playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist('foo'), [1, 2, 3], 'when given "foo", it should be treated as a getter');
	  assert.deepEqual(playlist({
	    foo: [1, 2, 3]
	  }), [1, 2, 3], 'when given {foo: [1,2,3]}, it should be treated as a getter');
	});
	QUnit.test('playlist.currentItem() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'begin at the first item, item 0');
	  assert.equal(playlist.currentItem(2), 2, 'setting to item 2 gives us back the new item index');
	  assert.equal(playlist.currentItem(), 2, 'the current item is now 2');
	  assert.equal(playlist.currentItem(5), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(-1), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(null), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(NaN), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(Infinity), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(-Infinity), 2, 'cannot change to an invalid item');
	});
	QUnit.test('playlist.currentItem() returns -1 with an empty playlist', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.currentItem(), -1, 'we should get a -1 with an empty playlist');
	});
	QUnit.test('playlist.currentItem() does not change items if same index is given', function (assert) {
	  var player = proxy();
	  var sources = 0;
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }

	    sources++;
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList);
	  assert.equal(sources, 1, 'we switched to the first playlist item');
	  sources = 0;
	  assert.equal(playlist.currentItem(), 0, 'we start at index 0');
	  playlist.currentItem(0);
	  assert.equal(sources, 0, 'we did not try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did not try to set sources');
	});
	QUnit.test('playlistMaker accepts a starting index', function (assert) {
	  var player = proxy();
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList, 1);
	  assert.equal(playlist.currentItem(), 1, 'if given an initial index, load that video');
	});
	QUnit.test('playlistMaker accepts a starting index', function (assert) {
	  var player = proxy();
	  var src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  var playlist = factory(player, videoList, -1);
	  assert.equal(playlist.currentItem(), -1, 'if given -1 as initial index, load no video');
	});
	QUnit.test('playlist.contains() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  player.playlist = playlist;
	  assert.ok(playlist.contains('http://media.w3.org/2010/05/sintel/trailer.mp4'), 'we can ask whether it contains a source string');
	  assert.ok(playlist.contains(['http://media.w3.org/2010/05/sintel/trailer.mp4']), 'we can ask whether it contains a sources list of strings');
	  assert.ok(playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }]), 'we can ask whether it contains a sources list of objects');
	  assert.ok(playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/trailer.mp4']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }]
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains('http://media.w3.org/2010/05/sintel/poster.png'), 'we get false for a non-existent source string');
	  assert.ok(!playlist.contains(['http://media.w3.org/2010/05/sintel/poster.png']), 'we get false for a non-existent source list of strings');
	  assert.ok(!playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), 'we get false for a non-existent source list of objects');
	  assert.ok(!playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), 'we get false for a non-existent playlist item');
	});
	QUnit.test('playlist.indexOf() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var mixedSourcesPlaylist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }]);
	  player.playlist = playlist;
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item');
	  assert.equal(playlist.indexOf('//media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item, protocol-relative url considered equal');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/bunny/trailer.mp4']), 1, 'bunny trailer is second item');
	  assert.equal(playlist.indexOf([{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }]), 2, 'oceans is third item');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/bunny/movie.mp4']
	  }), 3, 'bunny movie is fourth item');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	      type: 'video/mp4'
	    }]
	  }), 4, 'timer video is fifth item');
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/poster.png'), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/sintel/poster.png']), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), -1, 'poster.png does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/bunny/movie',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), -1, 'bunny movie does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), 0, 'sintel trailer does exist');
	});
	QUnit.test('playlist.nextIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.nextIndex(), -1, 'the next index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = function () {
	    return 0;
	  };

	  assert.equal(playlist.nextIndex(), 1, 'the next index was 1');

	  playlist.currentItem = function () {
	    return 1;
	  };

	  assert.equal(playlist.nextIndex(), 2, 'the next index was 2');

	  playlist.currentItem = function () {
	    return 2;
	  };

	  assert.equal(playlist.nextIndex(), 2, 'the next index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.nextIndex(), 0, 'the next index was now 0 because the playlist repeats');
	});
	QUnit.test('playlist.previousIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.previousIndex(), -1, 'the previous index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = function () {
	    return 2;
	  };

	  assert.equal(playlist.previousIndex(), 1, 'the previous index was 1');

	  playlist.currentItem = function () {
	    return 1;
	  };

	  assert.equal(playlist.previousIndex(), 0, 'the previous index was 0');

	  playlist.currentItem = function () {
	    return 0;
	  };

	  assert.equal(playlist.previousIndex(), 0, 'the previous index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.previousIndex(), 2, 'the previous index was now 2 because the playlist repeats');
	});
	QUnit.test('playlist.lastIndex() works as expected', function (assert) {
	  var playlist = factory(proxy(), []);
	  assert.equal(playlist.lastIndex(), -1, 'the last index was -1 for an empty list');
	  playlist([1, 2, 3]);
	  assert.equal(playlist.lastIndex(), 2, 'the last index was 2');
	});
	QUnit.test('playlist.next() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.deepEqual(playlist.next(), videoList[1], 'we get back the value of currentItem 2');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are now on item 1');
	  assert.deepEqual(playlist.next(), videoList[2], 'we get back the value of currentItem 3');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are now on item 2');
	  src = videoList[4].sources[0].src;
	  assert.equal(playlist.currentItem(4), 4, 'we are now on item 4');
	  assert.equal(typeof playlist.next(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit.test('playlist.previous() works as expected', function (assert) {
	  var player = proxy();
	  var playlist = factory(player, videoList);
	  var src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are on item 2');
	  assert.deepEqual(playlist.previous(), videoList[1], 'we get back value of currentItem 1');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are on item 1');
	  assert.deepEqual(playlist.previous(), videoList[0], 'we get back value of currentItem 0');
	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we are on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit.test('loading a non-playlist video will cancel autoadvance and set index of -1', function (assert) {
	  var oldReset = reset;
	  var player = proxy();
	  var playlist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }, {
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	  }]);

	  player.currentSrc = function () {
	    return 'http://vjs.zencdn.net/v/oceans.mp4';
	  };

	  setReset_(function () {
	    assert.ok(true, 'autoadvance.reset was called');
	  });
	  player.trigger('loadstart');
	  assert.equal(playlist.currentItem(), -1, 'new currentItem is -1');

	  player.currentSrc = function () {
	    return 'http://media.w3.org/2010/05/sintel/trailer.mp4';
	  };

	  setReset_(function () {
	    assert.ok(false, 'autoadvance.reset should not be called');
	  });
	  player.trigger('loadstart');
	  setReset_(oldReset);
	});
	QUnit.test('when loading a new playlist, trigger "duringplaylistchange" on the player', function (assert) {
	  var done = assert.async();
	  var player = proxy();
	  var playlist = factory(player, [1, 2, 3], 1);
	  player.on('duringplaylistchange', function (e) {
	    assert.strictEqual(e.type, 'duringplaylistchange', 'the event object had the correct "type" property');
	    assert.strictEqual(e.previousIndex, 1, 'the event object had the correct "previousIndex" property');
	    assert.deepEqual(e.previousPlaylist, [1, 2, 3], 'the event object had the correct "previousPlaylist" property');
	    assert.strictEqual(e.nextIndex, 0, 'the event object had the correct "nextIndex" property');
	    assert.deepEqual(e.nextPlaylist, [4, 5, 6], 'the event object had the correct "nextPlaylist" property');
	    assert.throws(function () {
	      playlist([1, 2, 3]);
	    }, Error, 'cannot set a new playlist during a change');
	    var spy = sinon.spy();
	    player.on('playlistsorted', spy);
	    playlist.sort();
	    playlist.reverse();
	    playlist.shuffle();
	    assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event never fired');
	    playlist.currentItem(2);
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.next();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.previous();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.first();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.last();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    done();
	  });
	  playlist([4, 5, 6]);
	});
	QUnit.test('when loading a new playlist, trigger "playlistchange" on the player', function (assert) {
	  var spy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', spy);
	  var playlist = factory(player, [1, 2, 3]);
	  playlist([4, 5, 6]);
	  this.clock.tick(1);
	  assert.strictEqual(spy.callCount, 1);
	  assert.strictEqual(spy.firstCall.args[0].type, 'playlistchange');
	});
	QUnit.test('"duringplaylistchange" and "playlistchange" on first call without an initial list', function (assert) {
	  var changeSpy = sinon.spy();
	  var duringSpy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  var playlist = factory(player);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 0, 'on initial call, the "duringplaylistchange" event did not fire');
	  playlist([1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit.test('"duringplaylistchange" and "playlistchange" on first call with an initial list', function (assert) {
	  var changeSpy = sinon.spy();
	  var duringSpy = sinon.spy();
	  var player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  var playlist = factory(player, [1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on initial call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([3]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 3, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit.test('playlist.sort() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.sort();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([4, 2, 1, 3]);
	  playlist.sort();
	  assert.deepEqual(playlist(), [1, 2, 3, 4], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.sort(function (a, b) {
	    return b - a;
	  });
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.reverse() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is reversed');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.shuffle() works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, []);
	  playlist.shuffle();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.shuffle();
	  var list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit.test('playlist.shuffle({rest: true}) works as expected', function (assert) {
	  var player = proxy();
	  var spy = sinon.spy();
	  player.on('playlistsorted', spy);
	  var playlist = factory(player, [1, 2, 3, 4]);
	  playlist.currentIndex_ = 3;
	  playlist.shuffle({
	    rest: true
	  });
	  var list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 2;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the second-to-last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.strictEqual(list.indexOf(2), 1, '2 is the second item in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = 0;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = -1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 3, 'the "playlistsorted" event triggered');
	});

	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof plugin, 'function', 'plugin is a function');
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(1);
	  assert.strictEqual(typeof videojs.getComponent('Player').prototype.playlist, 'function', 'videojs-playlist plugin was registered');
	});

}(QUnit, sinon, videojs));
