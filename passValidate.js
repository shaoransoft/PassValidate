/*!
PassValidate v.1.0.0

(c) 2022 Shaoransoft
*/

;(function(factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if (typeof exports === 'object' && module.exports) {
		module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
			    if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
			factory(jQuery);
            return jQuery;
		};
	}
	else {
        factory(jQuery);
    }

    $.fn.passValidate = function(options) {
        var opts = $.extend({}, $.fn.passValidate.defaults, options);
        var element = $(this);
        $.fn.passValidate.render(opts);
        element.on({
            keyup: function() {
                $.fn.passValidate.validate(opts, element.val());
                $.fn.passValidate.render(opts);
            }
        });
    };

    $.fn.passValidate.defaults = {
        eTarget: $('#validate_display'),
        vUppercase: true,
        vLowercase: true,
        vNumeric: true,
        vLength: true,
        lengthMin: 8,
    };

    $.fn.passValidate.validate = function(opts, s) {
        if (typeof s != 'string')
            return;
        if (opts.vUppercase === true) {
            _validate.uppercase = /[A-Z]/g.test(s);
        }
        if (opts.vLowercase === true) {
            _validate.lowercase = /[a-z]/g.test(s);
        }
        if (opts.vNumeric === true) {
            _validate.numeric = /[0-9]/g.test(s);
        }
        if (opts.vLength === true) {
            _validate.length = s.length>=opts.lengthMin;
        }
    };

    $.fn.passValidate.render = function(opts) {
        var elementTarget = opts.eTarget;
        if (elementTarget == undefined)
            return;
        if (opts.vUppercase === true) {
            var eUppercase = elementTarget.find('[validate-form="uppercase"]');
            if (eUppercase.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.uppercase?'success':'light')+' btn-sm fw-bold" validate-form="uppercase" title="Enter capital letters">ABC</span> ');
            }
            else {
                if (_validate.uppercase) {
                    eUppercase.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eUppercase.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (opts.vLowercase === true) {
            var eLowercase = elementTarget.find('[validate-form="lowercase"]');
            if (eLowercase.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.lowercase?'success':'light')+' btn-sm fw-bold" validate-form="lowercase" title="Enter lowercase letters">abc</span> ');
            }
            else {
                if (_validate.lowercase) {
                    eLowercase.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eLowercase.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (opts.vNumeric === true) {
            var eNumeric = elementTarget.find('[validate-form="numeric"]');
            if (eNumeric.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.numeric?'success':'light')+' btn-sm fw-bold" validate-form="numeric" title="Enter number">123</span> ');
            }
            else {
                if (_validate.numeric) {
                    eNumeric.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eNumeric.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
        if (opts.vLength === true) {
            var eLength = elementTarget.find('[validate-form="length"]');
            if (eLength.length == 0) {
                elementTarget.append('<span class="btn btn-'+(_validate.length?'success':'light')+' btn-sm fw-bold" validate-form="length" title="Enter at least '+opts.lengthMin+' characters">Length '+opts.lengthMin+'+</span> ');
            }
            else {
                if (_validate.length) {
                    eLength.removeClass('btn-light').addClass('btn-success');
                }
                else {
                    eLength.removeClass('btn-success').addClass('btn-light');
                }
            }
        }
    }
    var _validate = {
        uppercase: false,
        lowercase: false,
        numeric: false,
        length: false
    };
}(jQuery));