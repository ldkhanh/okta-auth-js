define(function(require) {
  var util = require('../util/util');

  describe('MFA_CHALLENGE', function () {

    describe('trans.verify', function () {
      util.itMakesCorrectRequestResponse({
        title: 'allows verification with passCode',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456'
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with rememberDevice',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?rememberDevice=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            rememberDevice: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with rememberDevice as false',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            rememberDevice: false
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush true',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?autoPush=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush as false',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?autoPush=false',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: false
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush as a function',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?autoPush=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: function () {
              return true;
            }
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush as undefined',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: undefined
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush as null',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: null
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush and rememberDevice true',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?autoPush=true&rememberDevice=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: true,
            rememberDevice: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush and rememberDevice false',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?autoPush=false',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: false,
            rememberDevice: false
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush undefined and rememberDevice true',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?rememberDevice=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: undefined,
            rememberDevice: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows verification with autoPush null and rememberDevice true',
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/factors/smsigwDlH85L9FyQK0g3/verify?rememberDevice=true',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF',
              passCode: '123456'
            }
          },
          response: 'success'
        },
        execute: function (test) {
          return test.trans.verify({
            passCode: '123456',
            autoPush: null,
            rememberDevice: true
          });
        }
      });
    });

    describe('trans.poll', function () {
      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll(0);
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push with rememberDevice',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            rememberDevice: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push with autoPush true',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push with autoPush false',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=false',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=false',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=false',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: false
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push with autoPush as a function',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: function () {
              return true;
            }
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'does not include autoPush for polling for push if autoPush undefined',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: undefined
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'does not include autoPush for polling for push if autoPush null',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: null
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push with autoPush and rememberDevice',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true&rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true&rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true&rememberDevice=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: true,
            rememberDevice: true
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'does not include rememberDevice for polling for push if rememberDevice is falsy',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify?autoPush=true',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          return test.trans.poll({
            delay: 0,
            autoPush: true,
            rememberDevice: false
          });
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push after a network error',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          util.mockQDelay();
          return test.trans.poll(0);
        }
      });

      util.itMakesCorrectRequestResponse({
        title: 'allows polling for push after throttling',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-throttle'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'success'
            }
          ]
        },
        execute: function (test) {
          util.mockQDelay();
          return test.trans.poll(0);
        }
      });

      util.itErrorsCorrectly({
        title: 'returns correct error if persistent network error',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'mfa-challenge-push'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            }
          ]
        },
        execute: function (test) {
          util.mockQDelay();
          return test.trans.poll(0);
        },
        expectations: function (test, err) {
          expect(err.name).toEqual('AuthApiError');
          expect(err.xhr.status).toEqual(0);
          expect(err.errorCode).toBeUndefined();
          expect(err.errorSummary).toBeUndefined();
          expect(err.errorLink).toBeUndefined();
          expect(err.errorCode).toBeUndefined();
          expect(err.errorId).toBeUndefined();
          expect(err.errorCauses).toBeUndefined();
        }
      });

      util.itErrorsCorrectly({
        title: 'returns correct number of errors if intermittent network errors',
        setup: {
          status: 'mfa-challenge-push',
          calls: [
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            },
            {
              request: {
                uri: '/api/v1/authn/factors/opf492vmb3s1blLTs0h7/verify',
                data: {
                  stateToken: '00T4jcVNRzJy5dkWJ4P7c9051dY3FUYY9O2zvbU_vI'
                }
              },
              response: 'error-network'
            }
          ]
        },
        execute: function (test) {
          util.mockQDelay();
          return test.trans.poll(0);
        },
        expectations: function (test, err) {
          expect(err.name).toEqual('AuthApiError');
          expect(err.xhr.status).toEqual(0);
          expect(err.errorCode).toBeUndefined();
          expect(err.errorSummary).toBeUndefined();
          expect(err.errorLink).toBeUndefined();
          expect(err.errorCode).toBeUndefined();
          expect(err.errorId).toBeUndefined();
          expect(err.errorCauses).toBeUndefined();
        }
      });
    });

    describe('trans.prev', function () {
      util.itMakesCorrectRequestResponse({
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/previous',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF'
            }
          },
          response: 'mfa-required'
        },
        execute: function (test) {
          return test.trans.prev();
        }
      });
    });

    describe('trans.cancel', function () {
      util.itMakesCorrectRequestResponse({
        setup: {
          status: 'mfa-challenge-sms',
          request: {
            uri: '/api/v1/authn/cancel',
            data: {
              stateToken: '00rt1IY9c6Q3RVc4a2jJPbS2uAtFNWJz_d8A26KTdF'
            }
          },
          response: 'cancel'
        },
        execute: function (test) {
          return test.trans.cancel();
        }
      });
    });
  });
});
